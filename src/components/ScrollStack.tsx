import React, { useRef, useEffect, useState, useCallback, Children, cloneElement, isValidElement } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

interface ScrollStackProps {
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  children: React.ReactNode;
}

interface ScrollStackItemProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  index?: number;
  scrollProgress?: number;
  totalItems?: number;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  className = '',
  style = {},
  children,
  index = 0,
  scrollProgress = 0,
  totalItems = 1,
  itemDistance = 600,
  itemScale = 0.05,
  itemStackDistance = 30,
  baseScale = 1,
  rotationAmount = 0,
  blurAmount = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const itemStart = index * itemDistance;
    const progress = Math.max(0, Math.min(1, (scrollProgress - itemStart) / itemDistance));
    const stackOffset = index * itemStackDistance;

    // Scale: cards scale down as they stack
    const scale = baseScale - progress * itemScale * (totalItems - index);
    const clampedScale = Math.max(0.5, Math.min(baseScale, scale));

    // Translation: move card up to stack position
    const translateY = -progress * itemDistance + stackOffset * progress;

    // Rotation
    const rotation = progress * rotationAmount;

    // Blur
    const blur = progress * blurAmount;

    // Sticky behavior once stacked
    const isStacked = scrollProgress > itemStart + itemDistance;

    setCardStyle({
      transform: `translateY(${isStacked ? -itemDistance + stackOffset : translateY}px) scale(${isStacked ? baseScale - itemScale * (totalItems - index) : clampedScale}) rotate(${isStacked ? rotationAmount : rotation}deg)`,
      filter: `blur(${isStacked ? blurAmount : blur}px)`,
      position: 'sticky' as const,
      top: `${100 + index * itemStackDistance}px`,
      zIndex: index + 1,
    });
  }, [scrollProgress, index, totalItems, itemDistance, itemScale, itemStackDistance, baseScale, rotationAmount, blurAmount]);

  return (
    <div className="scroll-stack-card-wrapper">
      <div
        ref={cardRef}
        className={`scroll-stack-card ${className}`}
        style={{ ...style, ...cardStyle }}
      >
        {children}
      </div>
    </div>
  );
};

const ScrollStack: React.FC<ScrollStackProps> = ({
  className = '',
  itemDistance = 600,
  itemScale = 0.05,
  itemStackDistance = 30,
  stackPosition = 'top',
  scaleEndPosition = 'center',
  baseScale = 1,
  scaleDuration = 1,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  children,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const totalItems = Children.count(children);

  const handleScroll = useCallback(() => {
    if (useWindowScroll) {
      setScrollProgress(window.scrollY);
    } else if (scrollerRef.current) {
      setScrollProgress(scrollerRef.current.scrollTop);
    }
  }, [useWindowScroll]);

  useEffect(() => {
    const wrapper = useWindowScroll ? undefined : scrollerRef.current;

    if (!useWindowScroll && wrapper) {
      lenisRef.current = new Lenis({
        wrapper,
        content: wrapper.firstElementChild as HTMLElement,
        smoothWheel: true,
        lerp: 0.1,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);

      lenisRef.current.on('scroll', () => {
        handleScroll();
      });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [useWindowScroll, handleScroll]);

  // Check if all cards are stacked
  useEffect(() => {
    const maxScroll = (totalItems - 1) * itemDistance + itemDistance;
    if (scrollProgress >= maxScroll && onStackComplete) {
      onStackComplete();
    }
  }, [scrollProgress, totalItems, itemDistance, onStackComplete]);

  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<ScrollStackItemProps>, {
        index,
        scrollProgress,
        totalItems,
        itemDistance,
        itemScale,
        itemStackDistance,
        baseScale,
        rotationAmount,
        blurAmount,
      });
    }
    return child;
  });

  if (useWindowScroll) {
    return (
      <div className={`scroll-stack-inner ${className}`}>
        {enhancedChildren}
        <div className="scroll-stack-end" />
      </div>
    );
  }

  return (
    <div ref={scrollerRef} className={`scroll-stack-scroller ${className}`}>
      <div className="scroll-stack-inner">
        {enhancedChildren}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
