import StarBorder from "./StarBorder";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, href = "#pricing", className = "" }: CTAButtonProps) => {
  return (
    <StarBorder
      as="a"
      href={href}
      color="hsl(43, 96%, 56%)"
      speed="5s"
      className={`animate-slow-pulse ${className}`}
    >
      <span className="inline-block bg-gradient-to-r from-secondary via-[hsl(45,100%,75%)] to-secondary bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite] text-secondary-foreground font-heading font-bold text-sm md:text-lg uppercase px-6 py-3 md:px-10 md:py-4 tracking-wide">
        {children}
      </span>
    </StarBorder>
  );
};

export default CTAButton;
