interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, href = "#pricing", className = "" }: CTAButtonProps) => {
  return (
    <a
      href={href}
      className={`inline-block bg-secondary text-secondary-foreground font-heading font-bold text-lg uppercase rounded-full px-10 py-4 tracking-wide transition-all duration-200 hover:brightness-110 hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;
