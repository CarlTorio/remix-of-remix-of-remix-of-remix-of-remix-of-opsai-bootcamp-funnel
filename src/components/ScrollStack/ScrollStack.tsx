import React, { useRef, useEffect, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

interface ScrollStackProps {
  children: React.ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

interface TransformState {
  y: number;
  scale: number;
  rotation: number;
  blur: number;
}

const THRESHOLD = 0.001;

function transformsEqual(a: TransformState, b: TransformState): boolean {
  return (
    Math.abs(a.y - b.y) < THRESHOLD &&
    Math.abs(a.scale - b.scale) < THRESHOLD &&
    Math.abs(a.rotation - b.rotation) < THRESHOLD &&
    Math.abs(a.blur - b.blur) < THRESHOLD
  );
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => {
  return (
    <div className={`scroll-stack-card ${itemClassName}`}>{children}</div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  className = "",
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const transformCache = useRef<Map<number, TransformState>>(new Map());
  const stackCompleteRef = useRef(false);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const effectiveStackPosition = isMobile ? "15%" : stackPosition;
  const effectiveItemStackDistance = isMobile ? 20 : itemStackDistance;

  const parsePosValue = useCallback(
    (value: string, containerH: number): number => {
      if (value.endsWith("%")) {
        return (parseFloat(value) / 100) * containerH;
      }
      return parseFloat(value);
    },
    []
  );

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const container = scrollerRef.current;
    const endEl = innerRef.current?.querySelector(
      ".scroll-stack-end"
    ) as HTMLElement | null;
    if (!endEl) return;

    let scrollTop: number;
    let containerHeight: number;

    if (useWindowScroll) {
      scrollTop = window.scrollY;
      containerHeight = window.innerHeight;
    } else {
      if (!container) return;
      scrollTop = container.scrollTop;
      containerHeight = container.clientHeight;
    }

    const stackPosPx = parsePosValue(effectiveStackPosition, containerHeight);
    const scaleEndPx = parsePosValue(scaleEndPosition, containerHeight);
    const pinEnd = endEl.offsetTop - containerHeight / 2;

    let topmostPinnedIndex = -1;
    let allPinned = true;

    cards.forEach((card, i) => {
      const cardTop = card.offsetTop;
      const triggerStart =
        cardTop - stackPosPx - effectiveItemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;

      const rawProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      const progress = Math.max(0, Math.min(1, rawProgress));

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - progress * (1 - targetScale);
      const rotation = i * rotationAmount * progress;

      // Pin logic
      const pinStart = triggerStart;
      let translateY = 0;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPosPx + effectiveItemStackDistance * i;
        if (progress >= 0.5) {
          topmostPinnedIndex = Math.max(topmostPinnedIndex, i);
        }
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosPx + effectiveItemStackDistance * i;
        topmostPinnedIndex = Math.max(topmostPinnedIndex, i);
      } else {
        allPinned = false;
      }

      const cached = transformCache.current.get(i);
      const newState: TransformState = {
        y: translateY,
        scale,
        rotation,
        blur: 0,
      };

      if (!cached || !transformsEqual(cached, newState)) {
        transformCache.current.set(i, newState);
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      }
    });

    // Blur pass
    if (blurAmount > 0 && topmostPinnedIndex > 0) {
      cards.forEach((card, i) => {
        const blurVal =
          i < topmostPinnedIndex
            ? (topmostPinnedIndex - i) * blurAmount
            : 0;
        const cached = transformCache.current.get(i);
        if (cached && Math.abs(cached.blur - blurVal) > THRESHOLD) {
          cached.blur = blurVal;
          card.style.filter = blurVal > 0 ? `blur(${blurVal}px)` : "none";
        }
      });
    }

    if (allPinned && !stackCompleteRef.current && onStackComplete) {
      stackCompleteRef.current = true;
      onStackComplete();
    }
  }, [
    useWindowScroll,
    effectiveStackPosition,
    effectiveItemStackDistance,
    scaleEndPosition,
    baseScale,
    itemScale,
    rotationAmount,
    blurAmount,
    parsePosValue,
    onStackComplete,
  ]);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const cards = Array.from(
      inner.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
    });

    const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

    let lenis: Lenis;

    if (useWindowScroll) {
      lenis = new Lenis({
        duration: 1.2,
        easing,
        smoothWheel: true,
        syncTouch: true,
        lerp: 0.1,
      });
    } else {
      lenis = new Lenis({
        wrapper: scrollerRef.current!,
        content: inner,
        duration: 1.2,
        easing,
        smoothWheel: true,
        syncTouch: true,
        lerp: 0.1,
      });
    }

    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      updateCardTransforms();
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    // Resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        transformCache.current.clear();
        updateCardTransforms();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    // Initial update
    updateCardTransforms();

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      cardsRef.current = [];
      transformCache.current.clear();
    };
  }, [itemDistance, useWindowScroll, updateCardTransforms]);

  if (useWindowScroll) {
    return (
      <div className={className}>
        <div ref={innerRef} className="scroll-stack-inner">
          {children}
          <div className="scroll-stack-end" />
        </div>
      </div>
    );
  }

  return (
    <div ref={scrollerRef} className={`scroll-stack-scroller ${className}`}>
      <div ref={innerRef} className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};
