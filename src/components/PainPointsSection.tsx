import SectionLabel from "./SectionLabel";

const painPoints = [
  {
    icon: "🔥",
    title: "You ARE the system",
    desc: "Every decision, every task, every fire — it all goes through you. Your business can't function without you.",
  },
  {
    icon: "⏰",
    title: "No time to grow",
    desc: "You're stuck working IN the business instead of ON it. Growth plans keep getting pushed to 'next month.'",
  },
  {
    icon: "😰",
    title: "Hiring doesn't help",
    desc: "You hired people, but without systems they just create more chaos. Training is inconsistent and nothing sticks.",
  },
  {
    icon: "📉",
    title: "Revenue plateaus",
    desc: "You've hit a ceiling. No matter how hard you push, the business won't scale beyond your personal capacity.",
  },
];

const PainPointsSection = () => (
  <section className="py-12 md:py-20 bg-section-alt section-divider">
    <div className="container">
      <div className="text-center mb-12">
        <SectionLabel>Sound Familiar?</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl">
          Your Business Is <span className="text-destructive">Stuck</span> Because You Don't Have Systems
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {painPoints.map((p, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-border">
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="font-heading font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-base">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
