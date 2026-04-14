import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HeroImage from "./HeroImage";

const Section3Intro = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 -mt-20 md:-mt-32">
      <div ref={ref} className={`container max-w-[900px] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <HeroImage />
        
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-5">
          Introducing the <span className="text-secondary">SME Systems Bootcamp</span>
        </h2>
        <p className="font-body text-lg leading-relaxed mb-6 max-w-[800px] mx-auto text-primary-foreground">
          A live 2-week online bootcamp where SME owners learn how to build their own internal business system, software, dashboards, workflows, user roles, and business logic using AI and no-code tools.
        </p>

        <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/30 rounded-full px-6 py-3 mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
          <span className="font-heading font-bold text-secondary text-base md:text-lg tracking-wide">Starts April 28</span>
        </div>

        <div className="mb-8">
          <p className="text-muted-foreground font-body text-sm mb-1">Price Today:</p>
          <p className="font-heading font-semibold text-2xl md:text-3xl text-muted-foreground line-through mb-1">
            ₱200,000
          </p>
          <p className="font-heading font-extrabold text-5xl md:text-6xl text-secondary" style={{ textShadow: "0 0 30px hsl(43 96% 56% / 0.3)" }}>
            ₱4,886
          </p>
          <p className="text-muted-foreground font-body text-sm mt-2">Limited to 100 slots only</p>
        </div>

        <CTAButton href="/checkout">RESERVE MY SLOT FOR ₱4,886</CTAButton>
      </div>
    </section>
  );
};

export default Section3Intro;
