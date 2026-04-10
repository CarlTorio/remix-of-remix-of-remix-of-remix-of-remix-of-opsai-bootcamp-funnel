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
      color="white"
      speed="3s"
      thickness={2}
      speed="5s"
      className={className}
    >
      <span className="inline-block bg-secondary text-secondary-foreground font-heading font-bold text-lg uppercase px-10 py-4 tracking-wide">
        {children}
      </span>
    </StarBorder>
  );
};

export default CTAButton;
