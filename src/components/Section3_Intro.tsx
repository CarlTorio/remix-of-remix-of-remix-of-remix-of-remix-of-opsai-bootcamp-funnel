import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Section3Intro = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 section-divider">
      <div ref={ref} className={`container max-w-[900px] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <img
          src="https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/Build.png"
          alt="Build"
          className="mx-auto mb-6 max-w-[600px] md:max-w-[800px] w-full"
        />
        <SectionLabel>THE BOOTCAMP</SectionLabel>
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-5">
          Introducing the <span className="text-accent">SME Systems Bootcamp</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10 max-w-[800px] mx-auto">
          A live 2-week online bootcamp where SME owners learn how to build their own internal business system, software, dashboards, workflows, user roles, and business logic using AI and no-code tools.
        </p>

        <div className="mb-8">
          <p className="text-muted-foreground font-body text-sm mb-1">Price Today:</p>
          <p className="font-heading font-extrabold text-5xl md:text-6xl text-secondary" style={{ textShadow: "0 0 30px hsl(43 96% 56% / 0.3)" }}>
            ₱4,886
          </p>
          <p className="text-muted-foreground font-body text-sm mt-2">Limited to 100 slots only</p>
        </div>

        <CTAButton href="#pricing">RESERVE MY SLOT FOR ₱4,886</CTAButton>
      </div>
    </section>
  );
};

export default Section3Intro;
