import SectionLabel from "./SectionLabel";
import { XCircle, CyanCheck } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Section8Timing = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#06070e" }}>
      <div ref={ref} className={`container max-w-[1000px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>THE TIMING</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">Why This Matters Right Now</h2>
          <p className="text-muted-foreground font-body text-base">
            A few years ago, if you wanted a proper internal business system, you usually had to choose between two painful options:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-2xl border border-destructive/20 p-6">
            <p className="text-destructive font-heading font-bold text-sm uppercase tracking-wider mb-3">OPTION 1</p>
            <p className="text-muted-foreground font-body text-base mb-4">Keep everything manual and suffer through the mess.</p>
            <XCircle />
          </div>
          <div className="bg-card rounded-2xl border border-destructive/20 p-6">
            <p className="text-destructive font-heading font-bold text-sm uppercase tracking-wider mb-3">OPTION 2</p>
            <p className="text-muted-foreground font-body text-base mb-4">
              Spend <span className="text-destructive">₱500,000 to ₱1,000,000+</span> on custom software, wait months, explain everything over and over, and hope the developer gets it right.
            </p>
            <XCircle />
          </div>
        </div>

        <p className="text-center font-heading font-bold text-xl md:text-2xl mb-8">
          But now? <span className="text-accent" style={{ textShadow: "0 0 20px hsl(217 71% 68% / 0.4)" }}>AI</span> has changed the game.
        </p>

        <div className="bg-card rounded-2xl border border-accent/30 p-6 md:p-8 space-y-4" style={{ boxShadow: "0 0 30px hsl(217 71% 68% / 0.06)" }}>
          <p className="text-accent font-heading font-bold text-sm uppercase tracking-wider">THE SMARTER WAY</p>
          <div className="space-y-3">
            {[
              "The owner maps the business clearly.",
              "AI accelerates the build.",
              "No-code tools reduce technical complexity.",
              <>The system gets shaped by <span className="text-foreground font-semibold">the person who actually understands the operation</span>.</>,
              <>That does not just save money. It saves: <span className="text-foreground font-semibold">time, energy, clarity, and avoidable frustration</span>.</>,
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CyanCheck className="shrink-0 mt-0.5" />
                <span className="font-body text-base text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-body text-base text-muted-foreground mt-8">
          And it gives you something most owners still don't have: <span className="text-accent font-semibold" style={{ textShadow: "0 0 15px hsl(217 71% 68% / 0.3)" }}>control</span> over how your business system is designed.
        </p>
      </div>
    </section>
  );
};

export default Section8Timing;
