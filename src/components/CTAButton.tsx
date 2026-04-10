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
      speed="3s"
      thickness={2}
      className={className}
    >
      <span className="inline-block bg-gradient-to-r from-secondary to-amber-400 text-secondary-foreground font-heading font-bold text-lg uppercase px-10 py-2.5 tracking-wide">
        {children}
      </span>
    </StarBorder>
  );
};

export default CTAButton;
