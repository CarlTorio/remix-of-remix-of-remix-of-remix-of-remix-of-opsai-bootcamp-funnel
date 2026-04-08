import SectionLabel from "./SectionLabel";

const modules = [
  { week: "Week 1", title: "Business Audit & Foundation", desc: "Map your current operations, identify bottlenecks, and set your systems roadmap." },
  { week: "Week 2", title: "Standard Operating Procedures", desc: "Create SOPs that your team actually follows. Document, delegate, and scale." },
  { week: "Week 3", title: "Hiring & Team Systems", desc: "Build hiring funnels, onboarding checklists, and accountability frameworks." },
  { week: "Week 4", title: "Sales & Marketing Automation", desc: "Set up lead capture, follow-up sequences, and CRM workflows that close deals." },
  { week: "Week 5", title: "Financial & Operations Dashboards", desc: "Track KPIs, cash flow, and team performance in real-time dashboards." },
  { week: "Week 6", title: "Scale & Exit Strategy", desc: "Build a business that runs without you. Prepare for scale, franchising, or exit." },
];

const CurriculumSection = () => (
  <section className="py-12 md:py-20 section-divider">
    <div className="container">
      <div className="text-center mb-12">
        <SectionLabel>What You'll Learn</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl">
          6 Weeks to a <span className="text-accent">Systemized</span> Business
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
