const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
const heroOverlay = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V3.png";
import CTAButton from "./CTAButton";
import ShinyText from "./ShinyText";
import SectionLabel from "./SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pills = [
  "Google Sheets",
  "Messenger Group Chats",
  "Manual follow-ups",
  "Disconnected Tools",
  "Delayed reports",
];

const HeroSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-background">
      {/* Image area - upper portion */}
      <div className="relative w-full">
        <div className="relative w-full">
          <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
      </div>
      {/* Text content - below image */}
      <div className="relative z-10 container text-center -mt-16 md:-mt-24 pb-16 md:pb-24">
        
        <h1 className="font-heading font-extrabold text-[26px] md:text-[44px] leading-[1.1] mb-3 max-w-4xl mx-auto">
          Build Your Own <span className="text-accent">Internal Business System</span> with{" "}
          <span style={{ color: "#fbbd23" }}>A.I.</span> in Less Than <span style={{ color: "#fbbd23" }}>2 Weeks</span>
        </h1>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Without Hiring Developers, Without Coding,<br />and Without Spending ₱500,000+ on Custom Software.
        </p>
        <CTAButton>Enroll Now — Limited Slots</CTAButton>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Live Cohort</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> 6-Week Program</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Lifetime Access</span>
        </div>
      </div>

      {/* Overlay image */}
      <div className="relative w-full">
        <img src={heroOverlay} alt="" className="w-full h-auto opacity-80" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Problem section - integrated */}
      <div ref={ref} className="container max-w-[900px] text-center pb-12 md:pb-20">
        <p
          className={`text-muted-foreground font-body text-lg mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          If your business is still running on
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 mb-6">
          {pills.map((pill, i) => (
            <span
              key={i}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-body font-medium border transition-all duration-500 bg-destructive/10 border-destructive/30 text-destructive ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {pill}
            </span>
          ))}
        </div>
        <p
          className={`text-foreground font-body font-medium text-lg mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
        >
          …then your business is not "organized enough."
        </p>
        <p
          className={`text-destructive font-heading font-semibold text-xl md:text-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "750ms" }}
        >
          It is one problem away from chaos.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
