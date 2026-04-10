import SectionLabel from "./SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quotes = [
  "Ang dami naming tools pero ang gulo pa rin.",
  "Kailangan na talaga namin ng system.",
  "Ang tagal na naming gustong ayusin ito.",
  "Hindi namin ma-visualize nang malinaw ang buong operations.",
  "Ayoko nang umasa sa spreadsheet para sa lahat.",
  "Pag wala ako, bumabagal lahat.",
];

const Section6Relevant = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-section-alt section-divider">
      <div ref={ref} className="container max-w-[1000px]">
        <div className="text-center mb-10">
          <SectionLabel>REAL TALK</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">Why This Is So Relevant to Real SME Owners</h2>
          <p className="text-muted-foreground font-body text-base max-w-[800px] mx-auto mb-2">
            This is not a "learn tech for fun" offer. This is for business owners who already feel the pain of running operations without a proper internal system.
          </p>
          <p className="text-muted-foreground font-body text-base">
            The businesses that usually need this most are the same businesses that keep saying:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl border border-border p-6 relative transition-all duration-500 hover:border-accent/50 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="absolute top-3 left-4 text-accent/30 font-heading text-[44px] leading-none select-none">"</span>
              <p className="font-body text-foreground italic font-medium text-base leading-relaxed pt-8">
                {q}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-base text-muted-foreground max-w-[700px] mx-auto">
          If any of those sound familiar, then this is not random. This is probably one of the <span className="text-accent">most relevant offers</span> you've seen for your business.
        </p>
      </div>
    </section>
  );
};

export default Section6Relevant;
