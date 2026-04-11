import { useState, useEffect, useRef } from "react";
import FuzzyText from "./FuzzyText";
const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import chaosBg from "@/assets/chaos-bg.png";
const systemBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/System.png";
import CTAButton from "./CTAButton";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

const stackCards = [
  {
    title: "Google Sheets",
    description: "Endless tabs and broken formulas with no single source of truth across your team.",
    gradient: "from-[#450a0a] to-[#dc2626]",
  },
  {
    title: "Messenger Group Chats",
    description: "Critical updates and client requests buried under hundreds of unread messages.",
    gradient: "from-[#450a0a] to-[#b91c1c]",
  },
  {
    title: "Manual Follow-ups",
    description: "Hours wasted every week chasing leads instead of actually growing the business.",
    gradient: "from-[#450a0a] to-[#991b1b]",
  },
  {
    title: "Disconnected Tools",
    description: "Every app works in isolation, forcing you to switch tabs and re-enter the same data.",
    gradient: "from-[#450a0a] to-[#7f1d1d]",
  },
  {
    title: "Delayed Reports",
    description: "You only find out if you're profitable at month-end, when it's already too late to fix.",
    gradient: "from-[#450a0a] to-[#601414]",
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

  const resetToInitial = () => {
    // Clear all pending timeouts
    timeoutsRef.current.forEach(id => clearTimeout(id));
    timeoutsRef.current = [];
    isAnimatingRef.current = false;
    stageRef.current = 0;
    setAnimationStage(0);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Scroll UP while hero is in view — reset to original
      if (e.deltaY < 0 && window.scrollY <= 10 && stageRef.current !== 0) {
        e.preventDefault();
        resetToInitial();
        return;
      }

      // Only intercept downward scrolls when hero is at top
      if (e.deltaY <= 0) return;
      if (window.scrollY > 10) return;

      const currentStage = stageRef.current;

      if (currentStage === 0 && !isAnimatingRef.current) {
        e.preventDefault();
        isAnimatingRef.current = true;
        stageRef.current = 1;
        setAnimationStage(1);

        const t1 = window.setTimeout(() => {
          stageRef.current = 2;
          setAnimationStage(2);

          const t2 = window.setTimeout(() => {
            isAnimatingRef.current = false;
            if (secondSectionRef.current) {
              secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }
            const t3 = window.setTimeout(() => {
              stageRef.current = 0;
              setAnimationStage(0);
            }, 1500);
            timeoutsRef.current.push(t3);
          }, 2000);
          timeoutsRef.current.push(t2);
        }, 5000);
        timeoutsRef.current.push(t1);
      } else if (currentStage === 1 || currentStage === 2) {
        e.preventDefault();
      }
    };

    // Also handle touch for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;

      // Swipe DOWN (scroll up) — reset
      if (deltaY < 0 && window.scrollY <= 10 && stageRef.current !== 0) {
        e.preventDefault();
        resetToInitial();
        return;
      }

      if (deltaY <= 0) return;
      if (window.scrollY > 10) return;

      const currentStage = stageRef.current;
      if (currentStage === 0 && !isAnimatingRef.current) {
        e.preventDefault();
        isAnimatingRef.current = true;
        stageRef.current = 1;
        setAnimationStage(1);

        const t1 = window.setTimeout(() => {
          stageRef.current = 2;
          setAnimationStage(2);
          const t2 = window.setTimeout(() => {
            isAnimatingRef.current = false;
            if (secondSectionRef.current) {
              secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }
            const t3 = window.setTimeout(() => {
              stageRef.current = 0;
              setAnimationStage(0);
            }, 1500);
            timeoutsRef.current.push(t3);
          }, 2000);
          timeoutsRef.current.push(t2);
        }, 5000);
        timeoutsRef.current.push(t1);
      } else if (currentStage === 1 || currentStage === 2) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const maxBlur = isMobile ? 6 : 10;
  const blurAmount = animationStage >= 1 ? maxBlur : 0;
  const overlayOpacity = animationStage === 1 ? 1 : 0;
  const textOpacity = animationStage === 1 ? 1 : 0;

  return (
    <>
      {/* HERO SECTION — isolated, tall, handles all overlay logic */}
      <section
        ref={heroSectionRef}
        className="relative bg-background"
        style={{ height: "100vh" }}
      >
        <div className="h-screen w-full overflow-hidden relative">
          {/* Hero content — blurred */}
          <div
            className="absolute inset-0"
            style={{
              filter: `blur(${blurAmount}px)`,
              willChange: "filter",
              transition: "filter 1.5s ease-out",
            }}
          >
            {/* Image area */}
            <div className="relative w-full">
              <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
            </div>
            {/* Text content */}
            <div className="relative z-10 container text-center -mt-16 md:-mt-24">
              <h1 className="font-heading font-black text-[26px] md:text-[44px] leading-[1.1] mb-3 max-w-4xl mx-auto drop-shadow-[0_0_25px_rgba(251,189,35,0.2)]" style={{ textShadow: "0 0 20px rgba(251,189,35,0.15), 0 0 40px rgba(251,189,35,0.08)" }}>
                Build Your Own <span style={{ color: "#fbbd23", textShadow: "0 0 20px rgba(251,189,35,0.3), 0 0 40px rgba(251,189,35,0.15)" }}>Internal Business System</span> with{" "}
                <span style={{ color: "#fbbd23", textShadow: "0 0 20px rgba(251,189,35,0.3), 0 0 40px rgba(251,189,35,0.15)" }}>A.I.</span> in Less Than <span style={{ color: "#fbbd23", textShadow: "0 0 20px rgba(251,189,35,0.3), 0 0 40px rgba(251,189,35,0.15)" }}>2 Weeks</span>
              </h1>
              <p className="font-body text-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                Without Hiring Developers, Without Coding,<br />and Without Spending ₱500,000+ on Custom Software.
              </p>
              <CTAButton>Enroll Now — Limited Slots</CTAButton>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
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
              transition: "opacity 1.5s ease-out",
            }}
          />

          {/* Red headline */}
          <div
            className="absolute left-0 right-0 flex justify-center px-4 pointer-events-none"
            style={{
              bottom: "8vh",
              opacity: textOpacity,
              transition: "opacity 2s ease-out",
            }}
          >
            <h2 className="text-destructive text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-center">
              If your business is still running on
            </h2>
          </div>
        </div>
      </section>

      {/* SECOND SECTION — completely separate sibling, untouched */}
      <section
        ref={secondSectionRef}
        className="relative w-full bg-cover bg-[center_30%]"
        style={{ backgroundImage: `url('https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/Background%20-%20V10.png')` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10">
          <div className="relative">
            <ScrollStack
              useWindowScroll={true}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="30%"
              baseScale={0.88}
              className="max-w-5xl mx-auto px-4 md:px-8 pt-16 md:pt-24"
            >
              {stackCards.map((card, i) => (
                <ScrollStackItem
                  key={i}
                  itemClassName={`bg-gradient-to-br ${card.gradient} border border-red-500/60 shadow-[0_0_50px_rgba(239,68,68,0.6)]`}
                >
                  <div className="flex flex-col items-center justify-center text-center w-full h-full">
                    <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-3 uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="font-body text-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                      {card.description}
                    </p>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          {/* Problem statement below stacks */}
          <div className="relative w-full text-center py-12 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg pointer-events-none -z-0" />
            <p className="relative z-10 text-foreground font-body text-2xl md:text-4xl mb-3">
              …then your business is not "ORGANIZED ENOUGH."
            </p>
            <div className="relative z-10 flex justify-center">
              <FuzzyText
                fontSize="clamp(2rem, 4vw, 2.5rem)"
                fontWeight={800}
                color="hsl(0, 84%, 60%)"
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                fuzzRange={15}
                className="max-w-full"
              >
                IT IS ONE PROBLEM AWAY FROM CHAOS.
              </FuzzyText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
