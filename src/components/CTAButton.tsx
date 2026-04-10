import BorderGlow from './BorderGlow';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, href = "#pricing", className = "" }: CTAButtonProps) => {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="transparent"
      borderRadius={9999}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#fbbd23', '#f59e0b', '#fbbf24']}
      className="inline-block"
    >
      <a
        href={href}
        className={`inline-block bg-secondary text-secondary-foreground font-heading font-bold text-lg uppercase rounded-full px-10 py-4 tracking-wide transition-all duration-200 hover:brightness-110 hover:scale-105 ${className}`}
      >
        {children}
      </a>
    </BorderGlow>
  );
};

export default CTAButton;
