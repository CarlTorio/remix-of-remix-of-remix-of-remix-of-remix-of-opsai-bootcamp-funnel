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
    title: "Automate Your Workflows",
    description: "Stop doing repetitive tasks manually. Build systems that run 24/7 without you lifting a finger.",
    gradient: "from-[hsl(220,80%,15%)] to-[hsl(220,60%,25%)]",
  },
  {
    title: "Centralize Your Data",
    description: "No more scattered spreadsheets. One single source of truth for your entire business.",
    gradient: "from-[hsl(200,70%,12%)] to-[hsl(200,50%,22%)]",
  },
  {
    title: "Track Everything in Real-Time",
    description: "Dashboards that update automatically. Know exactly where your business stands at any moment.",
    gradient: "from-[hsl(250,60%,14%)] to-[hsl(250,40%,24%)]",
  },
  {
    title: "Scale Without Hiring",
    description: "Handle 10x more clients with the same team. Let A.I. do the heavy lifting.",
    gradient: "from-[hsl(170,50%,10%)] to-[hsl(170,40%,20%)]",
  },
  {
    title: "Own Your System Forever",
    description: "No monthly subscriptions to expensive software. Build it once, use it for life.",
    gradient: "from-[hsl(30,60%,12%)] to-[hsl(30,50%,22%)]",
  },
];

const HeroSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative flex flex-col items-center overflow-x-hidden bg-background">
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


      {/* ScrollStack cards */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${chaosBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10">
          <div className="sticky top-8 md:top-12 z-20 text-center pt-12 md:pt-20 mb-8 pointer-events-none">
            <p className="font-heading font-semibold text-lg md:text-2xl text-foreground">
              If your business is still running on…
            </p>
          </div>
          <ScrollStack
            useWindowScroll={true}
            itemScale={0.03}
            itemStackDistance={30}
            stackPosition="25%"
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
