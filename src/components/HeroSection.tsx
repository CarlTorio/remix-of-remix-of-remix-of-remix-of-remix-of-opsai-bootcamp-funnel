import { useState, useEffect, useRef } from "react";
import FuzzyText from "./FuzzyText";
import LiquidEther from "./LiquidEther";
const heroBgDesktop = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
const heroBgMobile = "https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/Hero%20Section%20Original%20-%20Portrait.png";
import chaosBg from "@/assets/chaos-bg.png";
const systemBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/System.png";
import CTAButton from "./CTAButton";
import { Check } from "lucide-react";

const checklistItems = [
  {
    title: "Google Sheets",
    description: "Endless tabs and broken formulas with no single source of truth across your team.",
  },
  {
    title: "Messenger Group Chats",
    description: "Critical updates and client requests buried under hundreds of unread messages.",
  },
  {
    title: "Manual Follow-ups",
    description: "Hours wasted every week chasing leads instead of actually growing the business.",
  },
  {
    title: "Disconnected Tools",
    description: "Every app works in isolation, forcing you to switch tabs and re-enter the same data.",
  },
  {
    title: "Delayed Reports",
    description: "You only find out if you're profitable at month-end, when it's already too late to fix.",
  },
];

const HeroSection = () => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);
  const [animationStage, setAnimationStage] = useState<0 | 1 | 2>(0);
  // 0 = initial (sharp hero), 1 = animating (blur+overlay), 2 = done (faded out, ready to leave)
  const isAnimatingRef = useRef(false);
  const stageRef = useRef<0 | 1 | 2>(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxBlur = isMobile ? 6 : 10;
  const blurAmount = animationStage >= 1 ? maxBlur : 0;
  const overlayOpacity = animationStage === 1 ? 1 : 0;
  const textOpacity = animationStage >= 1 ? 1 : 0;

  return (
    <>
      {/* HERO SECTION isolated, tall, handles all overlay logic */}
      <section
        ref={heroSectionRef}
        className="relative bg-background"
        style={{ height: "100vh" }}
      >
        <div className="h-screen w-full overflow-hidden relative">
          {/* Hero content blurred */}
          <div
            className="absolute inset-0"
          >
            {/* Image area */}
            <div className="relative w-full overflow-hidden">
              <img src={isMobile ? heroBgMobile : heroBgDesktop} alt="" className="w-full h-auto md:scale-100 scale-[1.35] origin-top md:translate-y-0 -translate-y-[13.5rem]" width={1920} height={1080} fetchPriority="high" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
            </div>
            {/* Text content */}
            <div className="md:relative md:z-10 md:container md:text-center md:-mt-24 absolute bottom-12 left-0 right-0 z-10 container text-center" style={isMobile ? { textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)" } : undefined}>
              <p className="font-heading font-bold text-secondary text-sm md:text-base uppercase tracking-widest mb-2">Starts April 28</p>
              <h1 className="font-heading font-black text-[26px] md:text-[44px] leading-[1.1] mb-3 max-w-4xl mx-auto">
                Build Your Own <span style={{ color: "#fbbd23" }}>Internal Business System</span> with{" "}
                <span style={{ color: "#fbbd23" }}>A.I.</span> in Just <span style={{ color: "#fbbd23" }}>1 Day</span>
              </h1>
              <p className="font-body text-white text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                Without Hiring Developers, Without Coding,<br />and Without Spending ₱500,000+ on Custom Software.
              </p>
              <div style={isMobile ? { textShadow: "none" } : undefined}>
                <CTAButton>Enroll Now - Limited Slots</CTAButton>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Live Bootcamp</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> 1-Day Intensive</span>
                <span className="hidden md:flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Lifetime Access</span>
              </div>
              {/* Scroll indicator */}
              <div className="mt-4 flex justify-center">
                <span className="hidden md:inline text-white/30 text-[10px] font-body tracking-[0.25em] uppercase animate-bounce">Scroll down</span>
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{
              height: isMobile ? "85%" : "60%",
              background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
              opacity: overlayOpacity,
              transition: "opacity 1.5s ease-out",
            }}
          />

          {/* Red headline */}
          <div
            className="absolute left-0 right-0 flex justify-center px-4 pointer-events-none"
            style={{
              bottom: "3vh",
              opacity: textOpacity,
              transition: "opacity 2s ease-out",
            }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-center" style={{ color: "#fbbd23" }}>
              If your business is still running on
            </h2>
          </div>
        </div>
      </section>

      {/* SECOND SECTION completely separate sibling, untouched */}
      <section
        ref={secondSectionRef}
        className="relative w-full"
      >
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div
              className="rounded-3xl p-8 md:p-12 border-2"
              style={{
                borderColor: "rgba(251, 189, 35, 0.4)",
                background: "linear-gradient(180deg, rgba(20, 16, 6, 0.95) 0%, rgba(10, 8, 3, 0.95) 100%)",
                boxShadow: "0 0 60px rgba(251, 189, 35, 0.15), inset 0 1px 0 rgba(251, 189, 35, 0.1)",
              }}
            >
              <h2 className="font-heading font-black text-2xl md:text-3xl text-center mb-8 md:mb-10" style={{ color: "#fbbd23" }}>
                If your business is still running on:
              </h2>

              <ul className="space-y-6 md:space-y-7">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: "rgba(251, 189, 35, 0.15)",
                        border: "1.5px solid #fbbd23",
                      }}
                      aria-hidden="true"
                    >
                      <Check className="w-4 h-4" strokeWidth={3} style={{ color: "#fbbd23" }} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-base md:text-lg text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm md:text-base text-white/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem statement below stacks */}
          <div className="relative w-full text-center py-6 md:py-10 -mt-16">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg pointer-events-none -z-0" />
            <p className="relative z-10 text-foreground font-body text-base md:text-xl mb-2">
              …then your business is not "ORGANIZED ENOUGH."
            </p>
            <p className="relative z-10 text-[#ffb700] font-heading text-lg md:text-2xl font-extrabold">
              IT IS ONE PROBLEM AWAY{' '}
              <br className="md:hidden" />
              FROM CHAOS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
