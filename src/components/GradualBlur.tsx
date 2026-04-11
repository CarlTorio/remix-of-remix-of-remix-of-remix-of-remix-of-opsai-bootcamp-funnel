import "./GradualBlur.css";

interface GradualBlurProps {
  className?: string;
  blurLayers?: number;
  maxBlur?: number;
  height?: string;
}

const GradualBlur = ({
  className = "",
  blurLayers = 8,
  maxBlur = 20,
  height = "40%",
}: GradualBlurProps) => {
  const layers = Array.from({ length: blurLayers }, (_, i) => {
    const ratio = i / (blurLayers - 1);
    const blur = ratio * maxBlur;
    return (
      <div
        key={i}
        className="absolute inset-x-0"
        style={{
          bottom: 0,
          height,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: `linear-gradient(to bottom, transparent ${(1 - ratio) * 100}%, black 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent ${(1 - ratio) * 100}%, black 100%)`,
        }}
      />
    );
  });

  return (
    <div className={`gradual-blur absolute inset-0 pointer-events-none ${className}`}>
      <div className="gradual-blur-inner">{layers}</div>
      {/* Bottom fade to background */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height,
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />
    </div>
  );
};

export default GradualBlur;
