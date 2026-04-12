import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Section18FinalCTA = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#06070e" }}>
      <div ref={ref} className={`container max-w-[800px] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-5">
          Join the SME Systems Bootcamp Today for Just{" "}
          <span className="text-secondary" style={{ textShadow: "0 0 25px hsl(43 96% 56% / 0.3)" }}>₱4,886</span>
        </h2>
        <p className="text-muted-foreground font-body text-base leading-relaxed mb-4 max-w-[700px] mx-auto">
          Build your own internal business system with AI in less than 2 weeks without hiring developers, without coding, and without spending ₱500,000+ on custom software.
        </p>
        <p className="text-muted-foreground font-body text-sm mb-8">Limited to 100 slots only.</p>

        <CTAButton href="#pricing" className="text-xl px-12 py-5">RESERVE MY SLOT NOW</CTAButton>

        <div className="mt-12 border-t border-border pt-8 text-left max-w-[600px] mx-auto">
          <p className="text-accent font-heading font-bold text-sm mb-3">P.S.</p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
            Every month you delay this, your business keeps paying for it through slower operations, scattered data, manual work, and avoidable confusion.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
            If you join now, in less than 2 weeks you can begin building the first real version of the system your business should have had a long time ago.
          </p>
          <p className="text-muted-foreground font-body text-sm mb-1">
            Price today: <span className="text-secondary font-semibold">₱4,886</span>
          </p>
          <p className="text-muted-foreground font-body text-sm mb-6">Slots available: 100 only</p>
          <div className="text-center">
            <CTAButton href="#pricing">RESERVE MY SLOT FOR ₱4,886</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section18FinalCTA;
