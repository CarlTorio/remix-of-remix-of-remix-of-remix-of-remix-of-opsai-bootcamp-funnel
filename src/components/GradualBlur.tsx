import "./GradualBlur.css";

interface GradualBlurProps {
  direction?: "top" | "bottom";
  blurLayers?: number;
  maxBlur?: number;
  className?: string;
}

const GradualBlur = ({
  direction = "bottom",
  blurLayers = 6,
  maxBlur = 12,
  className = "",
}: GradualBlurProps) => {
  const layers = Array.from({ length: blurLayers }, (_, i) => {
    const progress = i / (blurLayers - 1);
    const blur = maxBlur * progress;
    const gradientDir = direction === "bottom" ? "to bottom" : "to top";
    const start = (i / blurLayers) * 100;
    const end = ((i + 1) / blurLayers) * 100;

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: `linear-gradient(${gradientDir}, rgba(0,0,0,0) ${start}%, rgba(0,0,0,1) ${end}%)`,
          WebkitMaskImage: `linear-gradient(${gradientDir}, rgba(0,0,0,0) ${start}%, rgba(0,0,0,1) ${end}%)`,
        }}
      />
    );
  });

  return (
    <div
      className={`gradual-blur absolute inset-0 pointer-events-none ${className}`}
    >
      <div className="gradual-blur-inner">{layers}</div>
    </div>
  );
};

export default GradualBlur;
