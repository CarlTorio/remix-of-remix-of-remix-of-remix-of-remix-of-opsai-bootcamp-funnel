import { useState, useEffect, useRef } from "react";
const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import chaosBg from "@/assets/chaos-bg.png";
const systemBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/System.png";
import CTAButton from "./CTAButton";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

const pills = [
  "Google Sheets",
  "Messenger Group Chats",
  "Manual Follow-ups",
  "Disconnected Tools",
  "Delayed Reports",
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
  const sectionRef = useRef<HTMLElement>(null);
  const [blurAmount, setBlurAmount] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportH = window.innerHeight;
      const scrolled = -rect.top;
      const total = sectionHeight - viewportH;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const isMobile = window.innerWidth < 768;

      // Stage 1→2 (0%–20%): fade in
      const fadeInProgress = Math.min(1, progress / 0.2);
      // Stage 4 (80%–100%): fade out
      const fadeOutProgress = Math.max(0, (progress - 0.8) / 0.2);
      const visibility = fadeInProgress * (1 - fadeOutProgress);

      setBlurAmount(visibility * (isMobile ? 8 : 12));
      setOverlayOpacity(visibility * 0.85);
      setTextOpacity(visibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Pinned hero — stays in viewport while parent scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Hero content */}
        <div
          className="absolute inset-0"
          style={{
            filter: `blur(${blurAmount}px)`,
            transform: `scale(${1 + blurAmount * 0.01})`,
            willChange: "filter, transform",
          }}
        >
          <div className="relative flex flex-col items-center bg-background h-full">
            {/* Image area */}
            <div className="relative w-full">
              <div className="relative w-full">
                <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
              </div>
            </div>
            {/* Text content */}
            <div className="relative z-10 container text-center -mt-16 md:-mt-24">
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
          </div>
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/40 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Red headline + pills overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
          style={{ opacity: textOpacity }}
        >
          <p className="text-gray-300 font-body text-lg md:text-2xl mb-3">
            If your business is still running on
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 max-w-2xl">
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs md:text-sm font-medium font-body"
              >
                {pill}
              </span>
            ))}
          </div>
          <h2 className="text-red-500 font-heading font-bold text-2xl md:text-5xl text-center mb-4 max-w-3xl">
            …then your business is one problem away from chaos.
          </h2>
          <p className="text-gray-400 font-body text-sm md:text-base max-w-xl text-center">
            No system. No visibility. No control. Just duct tape holding everything together.
          </p>
        </div>
      </div>

      {/* ScrollStack section — appears below the pinned hero */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${chaosBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10">
          <div className="relative">
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
