import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "Who is this bootcamp for?",
    a: "This is for Filipino SME owners and entrepreneurs who want to build systems, delegate effectively, and scale without burning out. Whether you have 2 employees or 200, this will work for you.",
  },
  {
    q: "What if I can't attend live?",
    a: "All sessions are recorded and you get lifetime access. You can watch on your own schedule and still get support in the private community.",
  },
  {
    q: "Do I need technical skills?",
    a: "Not at all. We use simple, practical tools Google Sheets, Notion, free CRMs. No coding or technical knowledge required.",
  },
  {
    q: "What's the time commitment?",
    a: "About 3-4 hours per week: 1.5 hours live session + implementation time. Most owners see ROI within the first 2 weeks.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes! We offer a 30-day money-back guarantee. If you don't see value after completing the first 4 modules, we'll refund you in full.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 bg-section-alt section-divider">
      <div className="container">
        <div className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">
            Got Questions? We've Got <span className="text-accent">Answers.</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 font-heading font-semibold text-base flex justify-between items-center gap-4"
              >
                {f.q}
                <span className="text-muted-foreground text-xl shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted-foreground font-body text-base leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
