import SectionLabel from "./SectionLabel";

const modules = [
  { week: "Phase 1", title: "Map (Morning · ~2 hrs)", desc: "Diagnose hidden bottlenecks, audit workflows and approvals, define data/dashboards/reports, and choose the right no-code tool stack. Walk out with a clear system blueprint." },
  { week: "Phase 2", title: "Build (Midday · ~3 hrs)", desc: "Use AI + prompts to translate business logic into software logic. Build dashboards, forms, workflows, user roles, employee logins, and back-end automations — live." },
  { week: "Phase 3", title: "Launch (Afternoon · ~1 hr)", desc: "Test the system in real conditions, refine, and walk out with the first usable version of your internal business system." },
];

const CurriculumSection = () => (
  <section className="py-12 md:py-20 section-divider">
    <div className="container">
      <div className="text-center mb-12">
        <SectionLabel>What You'll Learn</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl">
          1 Day to a <span className="text-accent">Systemized</span> Business
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {modules.map((m, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-border flex gap-5 items-start">
            <div className="bg-primary/20 text-accent font-heading font-bold text-sm rounded-lg px-3 py-1.5 whitespace-nowrap mt-0.5">
              {m.week}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">{m.title}</h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
