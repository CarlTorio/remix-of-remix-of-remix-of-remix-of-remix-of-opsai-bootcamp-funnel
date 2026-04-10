import SectionLabel from "./SectionLabel";
import { WarningTriangle, CyanCheck } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  "multiple spreadsheets for one process",
  "reports that arrive late",
  "data that doesn't match",
  "inventory you can't fully trust",
  "tasks that only move when you follow up",
  "approvals stuck in chat",
  "information scattered across tools",
  "a team that keeps asking you because you're the only one who sees the whole picture",
];

const afterItems = [
  "one clearer backend",
  "one real dashboard",
  "one system that reflects how your business actually runs",
  "cleaner workflows between departments",
  "less manual checking",
  "less back-and-forth",
  "less dependency on scattered files",
  "more visibility over the numbers, people, and processes that matter",
];

const Section5BeforeAfter = () => {
  const { ref: refL, visible: visL } = useScrollReveal();
  const { ref: refR, visible: visR } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 section-divider">
      <div className="container max-w-[1100px]">
        <div className="text-center mb-12">
          <SectionLabel>THE TRANSFORMATION</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">What Changes When You Have a System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Vertical connector line — desktop only */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center z-10">
            <div className="w-px h-full bg-border relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card border border-accent/50 flex items-center justify-center text-accent text-sm">→</div>
            </div>
          </div>

          {/* Before */}
          <div
            ref={refL}
            className={`bg-card rounded-2xl border border-destructive/20 p-6 md:p-8 transition-all duration-700 ${visL ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-destructive/80 to-destructive/20 rounded-full mb-6" />
            <h3 className="font-heading font-bold text-xl text-destructive mb-2">What Life Looks Like Before This</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Your business probably looks successful from the outside. But behind the scenes?</p>
            <div className="space-y-3 mb-6">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3" style={{ transitionDelay: `${i * 60}ms` }}>
                  <WarningTriangle className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-2">
              So instead of leading the business… you end up <span className="text-destructive">babysitting the backend</span>.
            </p>
            <p className="text-destructive font-body text-sm font-medium">That is exhausting. And dangerous.</p>
          </div>

          {/* After */}
          <div
            ref={refR}
            className={`bg-card rounded-2xl border border-accent/20 p-6 md:p-8 transition-all duration-700 ${visR ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ boxShadow: "0 0 40px hsl(217 71% 68% / 0.08)" }}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-accent/80 to-accent/20 rounded-full mb-6" />
            <h3 className="font-heading font-bold text-xl text-accent mb-2">What Life Looks Like After This</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Imagine having:</p>
            <div className="space-y-3 mb-6">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CyanCheck className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-3">
              That changes everything: <span className="text-accent">faster decisions • better delegation • fewer errors • stronger accountability • more control • more peace of mind</span>
            </p>
            <p className="text-accent font-body text-sm font-semibold">You stop operating from confusion.</p>
            <p className="text-accent font-body text-sm font-semibold" style={{ textShadow: "0 0 15px hsl(217 71% 68% / 0.3)" }}>
              You start operating from <span className="font-bold">systems</span>.
            </p>
            <p className="text-accent font-body text-sm mt-2">That changes everything.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5BeforeAfter;
