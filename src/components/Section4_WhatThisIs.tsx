import SectionLabel from "./SectionLabel";
import { XCircle, CyanArrow } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const leaveBehinds = ["spreadsheets", "chats", "memory", "follow-ups", "generic apps", "and outsourced people who still don't fully understand the business"];

const youKnow = [
  "what slows your team down",
  "what data you need to see",
  "what reports matter",
  "what approvals are annoying",
  "what departments are disconnected",
  "what process is broken",
  "and what kind of system would make your business easier to run",
];

const Section4WhatThisIs = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="overview" className="py-12 md:py-20 bg-background">
      <div ref={ref} className={`container max-w-[900px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">What This Is</h2>
        </div>

        <div className="bg-card rounded-2xl border border-accent/30 p-6 md:p-10 space-y-6">
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            The SME Systems Bootcamp is a live implementation bootcamp for business owners who want to stop running their operations on:
          </p>

          <div className="space-y-2">
            {leaveBehinds.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <XCircle className="shrink-0" />
                <span className="font-body text-base text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Instead of depending on developers to slowly interpret your operations… this bootcamp shows you how to use <span className="text-foreground font-semibold">AI + prompts + no-code tools</span> to build the first real version of <span className="text-foreground font-semibold">your own internal business system yourself</span>.
          </p>

          <div className="space-y-2 pl-2">
            <p className="font-body text-foreground font-semibold">
              <span className="text-accent">—</span> Not a generic template.
            </p>
            <p className="font-body text-foreground font-semibold">
              <span className="text-accent">—</span> Not a fake demo.
            </p>
            <p className="font-body text-foreground font-semibold">
              <span className="text-accent">—</span> Not "pang-idea lang."
            </p>
          </div>

          <p className="font-heading font-bold text-lg md:text-xl text-foreground" style={{ textShadow: "0 0 20px hsl(217 71% 68% / 0.2)" }}>
            A system based on your real business logic.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Because the truth is: No outsider will ever understand your business as fast as <span className="text-foreground font-semibold">the owner who lives inside it every day</span>.
          </p>

          <div className="pt-4">
            <p className="font-body text-foreground font-semibold text-center mb-4">You already know:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {youKnow.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3 ${i === 6 ? "md:col-span-2 border border-accent/30 text-foreground font-semibold" : ""}`}
                >
                  <CyanArrow className="shrink-0" />
                  <span className={`font-body text-sm ${i === 6 ? "" : "text-muted-foreground"}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-1 pt-4">
            <p className="text-muted-foreground font-body text-base">You do not need more awareness.</p>
            <p className="text-foreground font-body font-semibold text-lg">You need a way to build.</p>
            <p className="text-accent font-body text-base">That's what this bootcamp gives you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4WhatThisIs;
