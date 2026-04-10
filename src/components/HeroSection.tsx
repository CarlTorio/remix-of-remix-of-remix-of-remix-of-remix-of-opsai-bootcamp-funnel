const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import chaosBg from "@/assets/chaos-bg.png";
const systemBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/System.png";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

const pills = [
  "Google Sheets",
  "Messenger Group Chats",
  "Manual follow-ups",
  "Disconnected Tools",
  "Delayed reports",
];

const stackCards = [
  {
    title: "Google Sheets",
    description: "Endless tabs and broken formulas with no single source of truth across your team.",
    gradient: "from-[#dc2626] to-[#b91c1c]",
  },
  {
    title: "Messenger Group Chats",
    description: "Critical updates and client requests buried under hundreds of unread messages.",
    gradient: "from-[#b91c1c] to-[#991b1b]",
  },
  {
    title: "Manual Follow-ups",
    description: "Hours wasted every week chasing leads instead of actually growing the business.",
    gradient: "from-[#991b1b] to-[#7f1d1d]",
  },
  {
    title: "Disconnected Tools",
    description: "Every app works in isolation, forcing you to switch tabs and re-enter the same data.",
    gradient: "from-[#7f1d1d] to-[#601414]",
  },
  {
    title: "Delayed Reports",
    description: "You only find out if you're profitable at month-end, when it's already too late to fix.",
    gradient: "from-[#601414] to-[#450a0a]",
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


      {/* ScrollStack section with sticky headline */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${chaosBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10">

          {/* ScrollStack below it */}
          <div className="relative -mt-8">
            <ScrollStack
              useWindowScroll={true}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="30%"
              baseScale={0.88}
              className="max-w-5xl mx-auto px-4 md:px-8"
            >
              {stackCards.map((card, i) => (
                <ScrollStackItem
                  key={i}
                  itemClassName={`bg-gradient-to-br ${card.gradient} border border-border`}
                >
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                    {card.description}
                  </p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          {/* Problem statement below stacks */}
          <div className="w-full text-center py-12 md:py-20">
            <p className="text-muted-foreground font-body text-lg mb-3">
              …then your business is not "organized enough."
            </p>
            <p className="text-destructive font-heading font-semibold text-xl md:text-2xl">
              It is one problem away from chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
