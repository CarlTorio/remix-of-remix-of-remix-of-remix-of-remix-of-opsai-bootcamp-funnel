import React, { useMemo } from 'react';
import './GradualBlur.css';

interface GradualBlurProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  opacity?: number;
  className?: string;
}

const getGradientDirection = (position: string) =>
  ({ top: 'to top', bottom: 'to bottom', left: 'to left', right: 'to right' })[position] || 'to bottom';

function GradualBlur({
  position = 'bottom',
  strength = 2,
  height = '6rem',
  divCount = 5,
  exponential = false,
  zIndex = 10,
  opacity = 1,
}: GradualBlurProps) {
  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / divCount;
    const direction = getGradientDirection(position);

    for (let i = 1; i <= divCount; i++) {
      const progress = i / divCount;

      let blurValue: number;
      if (exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * strength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * strength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      divs.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: '0',
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity,
          }}
        />
      );
    }
    return divs;
  }, [divCount, position, strength, exponential, opacity]);

  const isVertical = ['top', 'bottom'].includes(position);

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex,
    ...(isVertical
      ? { height, width: '100%', [position]: 0, left: 0, right: 0 }
      : { width: height, height: '100%', [position]: 0, top: 0, bottom: 0 }),
  };

  return (
    <div className="gradual-blur" style={containerStyle}>
      <div className="gradual-blur-inner">{blurDivs}</div>
    </div>
  );
}

export default React.memo(GradualBlur);
