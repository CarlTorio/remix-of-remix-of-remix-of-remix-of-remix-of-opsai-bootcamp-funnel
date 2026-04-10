import SectionLabel from "./SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { num: "2", label: "Weeks", desc: "Compact, focused, implementation-driven" },
  { num: "6", label: "Live Sessions", desc: "Guided step-by-step with real mapping" },
  { num: "1", label: "Working System", desc: "Your own internal business software" },
];

const Section9HowItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 section-divider">
      <div ref={ref} className={`container max-w-[1000px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>THE FORMAT</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">How This Bootcamp Works</h2>
          <p className="text-muted-foreground font-body text-base mb-2">
            This is a live 2-week online bootcamp with 6 total sessions. The goal is simple:
          </p>
          <p className="font-body text-foreground font-medium text-base">
            help you go from messy backend thinking <span className="text-accent">→</span> to a clear business system <span className="text-accent">→</span> to a working internal software structure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[22px] left-[16.67%] right-[16.67%] h-px bg-accent/30" />
          {stats.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center relative">
              <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-4" style={{ boxShadow: "0 0 12px hsl(223 85% 70% / 0.5)" }} />
              <p className="font-heading font-extrabold text-4xl text-accent mb-1" style={{ textShadow: "0 0 20px hsl(223 85% 70% / 0.3)" }}>{s.num}</p>
              <p className="font-heading font-semibold text-foreground text-base mb-1">{s.label}</p>
              <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mb-10">
          Using: <span className="text-accent">AI</span> <span className="text-accent">•</span> Prompts <span className="text-accent">•</span> No-Code Tools <span className="text-accent">•</span> System Mapping <span className="text-accent">•</span> Workflow Logic <span className="text-accent">•</span> Guided Implementation
        </p>

        <div className="text-center space-y-4 max-w-[800px] mx-auto">
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            So instead of wasting months trying to explain your operations to someone else… you'll learn how to build from <span className="text-foreground font-semibold">the logic that already exists inside your head</span>.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            That's why this is powerful. You are not starting from zero. You are starting from <span className="text-accent font-semibold" style={{ textShadow: "0 0 15px hsl(223 85% 70% / 0.3)" }}>ownership</span>.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            And when the owner finally has the right tools, prompts, and process… the build becomes <span className="text-foreground font-semibold">dramatically faster</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section9HowItWorks;
