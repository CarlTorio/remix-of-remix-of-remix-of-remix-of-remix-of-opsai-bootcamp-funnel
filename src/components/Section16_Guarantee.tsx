import { ShieldCheck } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Section16Guarantee = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-section-alt section-divider">
      <div ref={ref} className={`container max-w-[800px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="bg-card rounded-2xl border border-accent/30 p-8 md:p-12 text-center" style={{ boxShadow: "0 0 40px hsl(217 71% 68% / 0.08)" }}>
          <div className="flex justify-center mb-6">
            <ShieldCheck />
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-5">The Learn-It-or-Refund Guarantee</h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            Join the bootcamp, attend the sessions, and if by the end you genuinely feel you did not gain valuable clarity on how to build your own internal business system… we'll refund your full payment.
          </p>
          <p className="text-accent font-body font-semibold text-base mb-6">No questions asked.</p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            You are not risking <span className="text-secondary font-semibold">₱4,886</span> on hype. You are investing <span className="text-secondary font-semibold">₱4,886</span> to finally get clarity on something that could save you: <span className="text-foreground font-semibold">months of delay, hundreds of thousands in custom development, and years of backend inefficiency</span>.
          </p>
          <p className="font-body text-base text-muted-foreground">And if it doesn't give you that value? You're covered.</p>
        </div>
      </div>
    </section>
  );
};

export default Section16Guarantee;
