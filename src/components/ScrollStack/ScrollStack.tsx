import React, { useRef, useEffect, useCallback } from "react";
import "./ScrollStack.css";

interface ScrollStackProps {
  children: React.ReactNode;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
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

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => {
  return (
    <div className={`scroll-stack-card ${itemClassName}`}>{children}</div>
  );
};

function getElementOffset(el: HTMLElement): number {
  let offset = 0;
  let current: HTMLElement | null = el;
  while (current) {
    offset += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return offset;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
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
  const rafRef = useRef<number>(0);
  const lastTransforms = useRef<Map<number, string>>(new Map());

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const effectiveStackPosition = isMobile ? "35%" : stackPosition;
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

    const endEl = innerRef.current?.querySelector(".scroll-stack-end") as HTMLElement | null;
    if (!endEl) return;

    let scrollTop: number;
    let containerHeight: number;

    if (useWindowScroll) {
      scrollTop = window.scrollY;
      containerHeight = window.innerHeight;
    } else {
      const container = scrollerRef.current;
      if (!container) return;
      scrollTop = container.scrollTop;
      containerHeight = container.clientHeight;
    }

    const stackPosPx = parsePosValue(effectiveStackPosition, containerHeight);
    const endElementTop = getElementOffset(endEl);
    const pinEnd = endElementTop - containerHeight;

    // Find topmost pinned card
    let topCardIndex = 0;
    for (let j = 0; j < cards.length; j++) {
      const cardTop = getElementOffset(cards[j]);
      const pinStart = cardTop - stackPosPx - j * effectiveItemStackDistance;
      if (scrollTop >= pinStart) topCardIndex = j;
    }

    cards.forEach((card, i) => {
      const cardTop = getElementOffset(card);
      const pinTargetFromTop = stackPosPx + i * effectiveItemStackDistance;
      const pinStart = cardTop - pinTargetFromTop;

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - pinStart;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - pinStart;
      }

      // Scale: only cards behind the topmost shrink
      let scale = 1;
      if (i < topCardIndex) {
        const depth = topCardIndex - i;
        scale = Math.max(baseScale, 1 - depth * itemScale);
      }

      // Optional rotation
      const rotatePart = rotationAmount && i < topCardIndex
        ? ` rotate(${(topCardIndex - i) * rotationAmount}deg)`
        : "";

      const transformStr = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})${rotatePart}`;

      // Only update DOM if changed
      if (lastTransforms.current.get(i) !== transformStr) {
        lastTransforms.current.set(i, transformStr);
        card.style.transform = transformStr;
      }

      // Optional blur
      if (blurAmount > 0) {
        const blurVal = i < topCardIndex ? (topCardIndex - i) * blurAmount : 0;
        card.style.filter = blurVal > 0 ? `blur(${blurVal}px)` : "none";
      }
    });
  }, [
    useWindowScroll,
    effectiveStackPosition,
    effectiveItemStackDistance,
    baseScale,
    itemScale,
    rotationAmount,
    blurAmount,
    parsePosValue,
  ]);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const cards = Array.from(
      inner.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    // Use native scroll listener instead of Lenis to avoid hijacking window scroll
    const scrollTarget = useWindowScroll ? window : scrollerRef.current;
    if (!scrollTarget) return;

    const onScroll = () => {
      updateCardTransforms();
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lastTransforms.current.clear();
        updateCardTransforms();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    updateCardTransforms();

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      cardsRef.current = [];
      lastTransforms.current.clear();
    };
  }, [useWindowScroll, updateCardTransforms]);

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
