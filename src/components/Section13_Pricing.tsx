import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { CyanCheck } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offers = [
  { title: "2-Week Live Bootcamp", desc: "A guided live experience to help you plan, structure, and build your internal business system in just 6 sessions", value: "₱150,000++" },
  { title: "System Blueprint Kit", desc: "Map out your workflows, departments, dashboards, approvals, and automations clearly before you build", value: "₱50,000++" },
  { title: "SME Prompt Vault", desc: "Ready-to-use prompts for dashboards, workflows, permissions, forms, access logic, and internal systems", value: "₱5,000" },
  { title: "No-Code Tool Stack Guide", desc: "Know exactly what tools to use so you avoid trial-and-error and wasted weeks", value: "₱3,500" },
];

const Section13Pricing = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="pricing" className="py-12 md:py-20 section-divider">
      <div ref={ref} className={`container max-w-[900px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>THE OFFER</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">
            Here's Everything You Get Inside The <span className="text-accent">SME Systems Bootcamp</span>
          </h2>
        </div>

        <div className="space-y-3 mb-10">
          {offers.map((o, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <CyanCheck className="shrink-0 mt-1" />
                <div>
                  <p className="font-heading font-semibold text-foreground text-base">{o.title}</p>
                  <p className="text-muted-foreground font-body text-sm">{o.desc}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body text-sm md:text-right whitespace-nowrap">{o.value}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-muted-foreground font-body text-base mb-1">
            Total Value: <span className="line-through">₱200,000+++</span>
          </p>
          <p className="font-body text-sm text-muted-foreground mb-1">Today: Only</p>
          <p className="font-heading font-extrabold text-5xl md:text-6xl text-secondary" style={{ textShadow: "0 0 30px hsl(43 96% 56% / 0.3)" }}>
            ₱4,886
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl p-5 mb-10 space-y-4 font-body text-base leading-relaxed">
          <p className="text-muted-foreground">
            Let's put that in perspective. You could spend <span className="text-destructive">₱500,000 to ₱1,000,000+</span> on outsourced software development… and still spend months: explaining your logic, correcting the output, following up on progress, waiting for revisions, and hoping someone else understands your business.
          </p>
          <p className="text-muted-foreground">
            Or… for just <span className="text-secondary font-semibold">₱4,886</span>, you can learn how to shape and build the first real version of your own internal system yourself.
          </p>
          <p className="text-foreground font-semibold">Faster. Cheaper. Clearer. More aligned to your actual business.</p>
          <p className="text-muted-foreground">
            That is not just affordable. That is a <span className="text-accent font-semibold">ridiculous value gap</span>.
          </p>
        </div>

        <div className="text-center">
          <CTAButton href="/checkout">RESERVE MY SLOT FOR ₱4,886</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Section13Pricing;
