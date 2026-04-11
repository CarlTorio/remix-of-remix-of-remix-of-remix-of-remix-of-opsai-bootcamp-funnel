interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="inline-block text-xs font-body font-medium tracking-[0.1em] uppercase text-accent mb-4">
    {children}
  </span>
);

export default SectionLabel;
