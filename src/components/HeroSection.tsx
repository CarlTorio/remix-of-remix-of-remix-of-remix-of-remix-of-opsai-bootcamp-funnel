const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
const systemBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/System.png";
import CTAButton from "./CTAButton";
import ShinyText from "./ShinyText";
import SectionLabel from "./SectionLabel";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    title: "Google Sheets",
    description: "Tracking everything in spreadsheets that break, get messy, and can't scale with your business.",
  },
  {
    title: "Messenger Group Chats",
    description: "Critical business updates buried in endless chat threads that no one can find later.",
  },
  {
    title: "Manual Follow-ups",
    description: "Spending hours chasing clients, leads, and tasks because nothing is automated.",
  },
  {
    title: "Disconnected Tools",
    description: "Jumping between 5+ apps that don't talk to each other, wasting time and losing data.",
  },
  {
    title: "Delayed Reports",
    description: "Waiting days for reports that should take seconds — making decisions based on outdated info.",
  },
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

      {/* Problem section - ScrollStack */}
      <div className="relative w-full">
        <div className="absolute -top-64 left-0 right-0 bottom-0">
          <img src={systemBg} alt="" className="w-full h-full object-cover object-top opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div ref={ref} className="relative z-10 w-full">
          <div className="container text-center mb-8">
            <p
              className={`text-muted-foreground font-body text-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              If your business is still running on…
            </p>
          </div>
          <ScrollStack
            useWindowScroll
            itemDistance={80}
            itemScale={0.02}
            itemStackDistance={25}
            stackPosition="30%"
            scaleEndPosition="15%"
            baseScale={0.88}
            blurAmount={2}
          >
            {painPoints.map((point, i) => (
              <ScrollStackItem key={i} itemClassName="!bg-card !border-border/50">
                <div className="flex flex-col justify-center h-full max-w-2xl mx-auto text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-body font-medium border bg-destructive/10 border-destructive/30 text-destructive mb-4 self-center">
                    {point.title}
                  </span>
                  <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
          <div className="container text-center mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
