import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";

const included = [
  "1-day live intensive bootcamp (~6 hours, 3 phases)",
  "Done-for-you SOP templates (50+)",
  "Private community access",
  "Hiring & onboarding toolkit",
  "CRM & automation setup guides",
  "KPI dashboard templates",
  "Weekly accountability check-ins",
  "Lifetime access to recordings",
  "Bonus: 1-on-1 strategy call",
];

const PricingSection = () => (
  <section id="enroll" className="py-12 md:py-20 bg-section-alt section-divider">
    <div className="container">
      <div className="text-center mb-12">
        <SectionLabel>Investment</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl">
          Everything You Need to <span className="text-secondary">Transform</span> Your Business
        </h2>
      </div>
      <div className="max-w-lg mx-auto bg-card rounded-2xl border border-border p-8 md:p-10 glow-blue animate-pulse-glow">
        <div className="text-center mb-8">
          <p className="text-muted-foreground font-body text-sm uppercase tracking-wider mb-2">Full Bootcamp Access</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-muted-foreground line-through text-xl font-body">₱29,997</span>
            <span className="font-heading font-extrabold text-5xl text-foreground">₱14,997</span>
          </div>
          <p className="text-success font-body text-sm mt-2 font-medium">Save ₱15,000 Early Bird Price</p>
        </div>
        <ul className="space-y-3 mb-8">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground font-body text-base">
              <span className="text-success mt-0.5 text-lg">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <CTAButton>Join the Bootcamp Now</CTAButton>
        </div>
        <p className="text-center text-muted-foreground text-xs font-body mt-4">
          30-day money-back guarantee. Zero risk.
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
