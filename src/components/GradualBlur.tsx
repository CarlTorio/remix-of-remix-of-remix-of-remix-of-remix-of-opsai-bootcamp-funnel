import "./GradualBlur.css";

interface GradualBlurProps {
  className?: string;
  height?: string;
}

const GradualBlur = ({
  className = "",
  height = "50%",
}: GradualBlurProps) => {
  return (
    <div className={`absolute inset-x-0 bottom-0 pointer-events-none ${className}`} style={{ height }}>
      {/* Gradient fade from transparent to background */}
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.3) 30%, hsl(var(--background) / 0.7) 60%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default GradualBlur;
