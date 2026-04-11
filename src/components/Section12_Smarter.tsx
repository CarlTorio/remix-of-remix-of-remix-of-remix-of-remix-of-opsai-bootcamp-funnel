import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { XCircle, CyanCheck } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const traditional = ["long meetings", "repeated explanations", "miscommunication", "slow progress", "expensive revisions", "and months passing before anything usable is finished"];
const smarter = [
  "The owner maps the business clearly.",
  "AI accelerates the build.",
  "No-code tools reduce technical complexity.",
  "The system gets shaped by the person who actually understands the operation.",
];

const Section12Smarter = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-background">
      <div ref={ref} className={`container max-w-[900px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>THE SMARTER WAY</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">Why This Is Smarter Than The Traditional Way</h2>
        </div>

        <div className="space-y-6 font-body text-base leading-relaxed">
          <p className="text-muted-foreground">
            The traditional way sounds professional: hire a developer, explain the business, and wait.
          </p>

          <div>
            <p className="text-muted-foreground mb-3">But in reality, it usually looks like this:</p>
            <div className="space-y-2">
              {traditional.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <XCircle className="shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-3">The smarter way today is different.</p>
            <div className="space-y-2">
              {smarter.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CyanCheck className="shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground">
            That does not just save money. It saves: <span className="text-foreground font-semibold">time <span className="text-accent">•</span> energy <span className="text-accent">•</span> clarity <span className="text-accent">•</span> and avoidable frustration</span>
          </p>

          <p className="text-muted-foreground">
            And it gives you something most owners still don't have: <span className="text-accent font-semibold">control</span> over how your business system is designed.
          </p>
        </div>

        <div className="text-center mt-10 space-y-4">
          <p className="font-body text-foreground font-semibold text-xl">
            If your backend has been slowing you down, this is for you.
          </p>
          <CTAButton href="#pricing">RESERVE MY SLOT FOR ₱4,886</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Section12Smarter;
