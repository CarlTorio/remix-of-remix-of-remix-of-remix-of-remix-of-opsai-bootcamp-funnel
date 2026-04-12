import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Founder, Fresh Eats PH",
    quote: "Before the bootcamp, I was working 16-hour days. Now my team runs 80% of operations without me. I finally took a vacation!",
  },
  {
    name: "Jerome Reyes",
    role: "CEO, BuildRight Construction",
    quote: "We went from 3 projects a month to 8 without hiring more managers. The systems framework changed everything.",
  },
  {
    name: "Kat Villanueva",
    role: "Owner, Bloom & Co. Salon",
    quote: "I opened my second branch in 4 months after the bootcamp. The SOPs and hiring systems made expansion actually possible.",
  },
];

const TestimonialsSection = () => (
  <section className="py-12 md:py-20 section-divider">
    <div className="container">
      <div className="text-center mb-12">
        <SectionLabel>Success Stories</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl">
          Real SME Owners. <span className="text-accent">Real Results.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-border">
            <p className="text-foreground font-body text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold text-base">{t.name}</p>
              <p className="text-muted-foreground font-body text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
