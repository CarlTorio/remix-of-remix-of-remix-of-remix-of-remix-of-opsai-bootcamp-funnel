import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  { q: "Do I need to know how to code?", a: "No. This was built specifically for non-technical business owners." },
  { q: "What if I'm not techy?", a: "That's exactly who this is for. The process uses AI, prompts, and no-code tools so you can build without traditional coding." },
  { q: "What if I'm too busy?", a: "That's exactly why you need this. The more manual your business is, the more time it steals from you every day." },
  { q: "What if I already have a developer?", a: "Great. This will still help you because you'll become far clearer on the logic, structure, and system requirements before delegating anything." },
  { q: "What if I don't have a clear system idea yet?", a: "That's okay. Week 1 is designed to help you figure out exactly what your business needs before you build." },
  { q: "Is this live?", a: "Yes. This is a live 2-week online bootcamp with 6 sessions." },
  { q: "Are the sessions recorded?", a: "Yes. Through the Fast-Track Replay Vault, you'll get 30-day access to review while implementing." },
  { q: "What if I join and don't find it valuable?", a: "You're protected by the guarantee below." },
];

const Section15FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-20 section-divider">
      <div className="container max-w-[800px]">
        <div className="text-center mb-10">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 font-heading font-medium text-base flex justify-between items-center gap-4"
              >
                {f.q}
                <span className="text-accent text-xl shrink-0 transition-transform duration-200" style={{ transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0", opacity: open === i ? 1 : 0 }}
              >
                <div className="px-6 pb-5 text-muted-foreground font-body text-base leading-relaxed">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section15FAQ;
