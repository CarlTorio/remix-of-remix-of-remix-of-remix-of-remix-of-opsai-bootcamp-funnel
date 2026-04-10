import { useState, useEffect, useRef } from "react";
const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import chaosBg from "@/assets/chaos-bg.png";
import CTAButton from "./CTAButton";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // 0% → 25%: fade IN
      const fadeIn = Math.min(1, progress / 0.25);
      // 75% → 100%: fade OUT
      const fadeOut = Math.max(0, (progress - 0.75) / 0.25);
      const visibility = fadeIn * (1 - fadeOut);

      const maxBlur = window.innerWidth < 768 ? 6 : 10;

      setBlurAmount(visibility * maxBlur);
      setOverlayOpacity(visibility);
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
      style={{ height: isMobile ? "400vh" : "450vh" }}
    >
      {/* Pinned hero stays in viewport while parent scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Hero content — only blur changes, no scale */}
        <div
          className="absolute inset-0 flex flex-col items-center bg-background"
          style={{
            filter: `blur(${blurAmount}px)`,
            willChange: "filter",
            transition: "filter 0.3s ease-out",
          }}
        >
          {/* Image area */}
          <div className="relative w-full">
            <div className="relative w-full">
              <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
            </div>
          </div>
          {/* Text content */}
          <div className="relative z-10 container text-center -mt-16 md:-mt-24 pb-32 md:pb-48">
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

        {/* Bottom gradient overlay */}
        <div
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          style={{
            height: "60%",
            background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
            opacity: overlayOpacity,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Red headline at bottom of viewport */}
        <div
          className="absolute left-0 right-0 flex justify-center px-4 pointer-events-none"
          style={{
            bottom: "8vh",
            opacity: textOpacity,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <h2 className="text-red-500 text-2xl md:text-4xl font-bold text-center font-heading">
            If your business is still running on
          </h2>
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
