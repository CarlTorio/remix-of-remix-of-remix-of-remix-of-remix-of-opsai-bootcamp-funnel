import CTAButton from "./CTAButton";

const FinalCTASection = () => (
  <section className="py-16 md:py-24 section-divider">
    <div className="container text-center max-w-3xl">
      <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">
        Stop Building a Job. Start Building a <span className="text-secondary">Business.</span>
      </h2>
      <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
        Join 500+ Filipino entrepreneurs who have already transformed their businesses with proven systems.
        Your next chapter starts today.
      </p>
      <CTAButton>Claim Your Spot Now</CTAButton>
      <p className="text-muted-foreground text-sm font-body mt-6">
        Limited to 50 slots per bootcamp. Secure your seat before enrollment closes.
      </p>
    </div>
  </section>
);

export default FinalCTASection;
