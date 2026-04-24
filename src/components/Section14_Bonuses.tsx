import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const bonuses = [
  { title: "Fast-Track Replay Vault", desc: "Rewatch the full session for 30 days while building your system." },
  { title: "SME Prompt Vault", desc: "Get the exact prompts that speed up dashboards, workflows, logic, forms, and access control." },
  { title: "System Blueprint Kit", desc: "Plan your system before building so you don't waste time in confusion." },
  { title: "No-Code Tool Stack Guide", desc: "Use the right tools from day one instead of wasting energy on random platforms." },
];

const Section14Bonuses = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#06070e" }}>
      <div ref={ref} className={`container max-w-[900px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>BONUSES</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-3">Fast-Action Bonuses</h2>
          <p className="text-muted-foreground font-body text-base">If you enroll before the current deadline, you also get:</p>
        </div>

        <div className="space-y-3 mb-10">
          {bonuses.map((b, i) => (
            <div key={i} className="bg-card rounded-2xl border border-secondary/20 p-5 flex flex-col md:flex-row md:items-center gap-4">
              <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-3 py-1 shrink-0">
                BONUS #{i + 1}
              </span>
              <div>
                <p className="font-heading font-semibold text-foreground text-base">{b.title}</p>
                <p className="text-muted-foreground font-body text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3 mb-8">
          <p className="text-muted-foreground font-body text-base">
            Slots are limited to 100 only because this is live and implementation-focused.
          </p>
          <p className="text-muted-foreground font-body text-base">
            And the longer you delay, the longer your business continues paying the <span className="text-accent">hidden tax</span> of manual operations.
          </p>
        </div>

        <div className="text-center">
          <CTAButton href="/checkout">RESERVE MY SLOT FOR ₱4,886</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Section14Bonuses;
