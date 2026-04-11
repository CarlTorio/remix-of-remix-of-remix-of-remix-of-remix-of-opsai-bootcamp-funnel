import { useRef } from "react";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useScrollBlur } from "@/hooks/useScrollBlur";

const Section3Intro = () => {
  const { ref, visible } = useScrollReveal();
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollBlur(imageRef);

  return (
    <section className="py-12 md:py-20">
      <div ref={ref} className={`container max-w-[900px] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div
          ref={imageRef}
          className="mx-auto mb-6 max-w-[600px] md:max-w-[800px] w-full rounded-2xl overflow-hidden"
          style={{ position: "relative", lineHeight: 0 }}
        >
          <img
            src="https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/Build%20V2.png"
            alt="SME Systems Bootcamp"
            className="w-full h-auto block"
            style={{ objectFit: "cover" }}
          />
          {/* Blur Layer 1 */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(95, 20 + scrollProgress * 80)}%`, backdropFilter: `blur(${scrollProgress * 2}px)`, WebkitBackdropFilter: `blur(${scrollProgress * 2}px)`, maskImage: "linear-gradient(to bottom, transparent 0%, black 60%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%, black 100%)", pointerEvents: "none", zIndex: 2, transition: "height 0.1s ease-out" }} />
          {/* Blur Layer 2 */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(85, 15 + scrollProgress * 70)}%`, backdropFilter: `blur(${scrollProgress * 4}px)`, WebkitBackdropFilter: `blur(${scrollProgress * 4}px)`, maskImage: "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)", pointerEvents: "none", zIndex: 3, transition: "height 0.1s ease-out" }} />
          {/* Blur Layer 3 */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(70, 10 + scrollProgress * 60)}%`, backdropFilter: `blur(${scrollProgress * 8}px)`, WebkitBackdropFilter: `blur(${scrollProgress * 8}px)`, maskImage: "linear-gradient(to bottom, transparent 0%, black 50%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%, black 100%)", pointerEvents: "none", zIndex: 4, transition: "height 0.1s ease-out" }} />
          {/* Blur Layer 4 */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(55, 8 + scrollProgress * 50)}%`, backdropFilter: `blur(${scrollProgress * 14}px)`, WebkitBackdropFilter: `blur(${scrollProgress * 14}px)`, maskImage: "linear-gradient(to bottom, transparent 0%, black 50%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%, black 100%)", pointerEvents: "none", zIndex: 5, transition: "height 0.1s ease-out" }} />
          {/* Blur Layer 5 */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(40, 5 + scrollProgress * 38)}%`, backdropFilter: `blur(${scrollProgress * 22}px)`, WebkitBackdropFilter: `blur(${scrollProgress * 22}px)`, maskImage: "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)", pointerEvents: "none", zIndex: 6, transition: "height 0.1s ease-out" }} />
          {/* Fade gradient */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${Math.min(60, 15 + scrollProgress * 50)}%`, background: `linear-gradient(to bottom, transparent 0%, rgba(6,6,8,${0.3 + scrollProgress * 0.7}) 70%, #060608 100%)`, pointerEvents: "none", zIndex: 7, transition: "height 0.1s ease-out" }} />
          {/* Overall opacity fade */}
          <div style={{ position: "absolute", inset: 0, background: `rgba(6,6,8,${scrollProgress * 0.5})`, pointerEvents: "none", zIndex: 8 }} />
        </div>
        
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-5">
          Introducing the <span className="text-secondary">SME Systems Bootcamp</span>
        </h2>
        <p className="font-body text-lg leading-relaxed mb-10 max-w-[800px] mx-auto text-primary-foreground">
          A live 2-week online bootcamp where SME owners learn how to build their own internal business system, software, dashboards, workflows, user roles, and business logic using AI and no-code tools.
        </p>

        <div className="mb-8">
          <p className="text-muted-foreground font-body text-sm mb-1">Price Today:</p>
          <p className="font-heading font-semibold text-2xl md:text-3xl text-muted-foreground line-through mb-1">
            ₱15,000
          </p>
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
