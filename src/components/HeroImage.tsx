import { useRef } from "react";
import { useScrollBlur } from "@/hooks/useScrollBlur";

const HeroImage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollBlur(sectionRef);

  return (
    <div
      ref={sectionRef}
      style={{ position: 'relative', width: '100%', overflow: 'hidden', lineHeight: 0 }}
    >
      <img
        src="https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/Build%20V2.png"
        alt="SME Systems Bootcamp"
        className="w-full h-auto block object-cover rounded-2xl border border-secondary/30"
      />
      {/* Blur Layer 1 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(95, 20 + scrollProgress * 80)}%`,
        backdropFilter: `blur(${scrollProgress * 2}px)`,
        WebkitBackdropFilter: `blur(${scrollProgress * 2}px)`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)',
        pointerEvents: 'none', zIndex: 2, transition: 'height 0.1s ease-out'
      }} />
      {/* Blur Layer 2 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(85, 15 + scrollProgress * 70)}%`,
        backdropFilter: `blur(${scrollProgress * 4}px)`,
        WebkitBackdropFilter: `blur(${scrollProgress * 4}px)`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 55%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 55%, black 100%)',
        pointerEvents: 'none', zIndex: 3, transition: 'height 0.1s ease-out'
      }} />
      {/* Blur Layer 3 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(70, 10 + scrollProgress * 60)}%`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
        WebkitBackdropFilter: `blur(${scrollProgress * 8}px)`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
        pointerEvents: 'none', zIndex: 4, transition: 'height 0.1s ease-out'
      }} />
      {/* Blur Layer 4 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(55, 8 + scrollProgress * 50)}%`,
        backdropFilter: `blur(${scrollProgress * 14}px)`,
        WebkitBackdropFilter: `blur(${scrollProgress * 14}px)`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
        pointerEvents: 'none', zIndex: 5, transition: 'height 0.1s ease-out'
      }} />
      {/* Blur Layer 5 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(40, 5 + scrollProgress * 38)}%`,
        backdropFilter: `blur(${scrollProgress * 22}px)`,
        WebkitBackdropFilter: `blur(${scrollProgress * 22}px)`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 45%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 45%, black 100%)',
        pointerEvents: 'none', zIndex: 6, transition: 'height 0.1s ease-out'
      }} />
      {/* Final fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${Math.min(60, 15 + scrollProgress * 50)}%`,
        background: `linear-gradient(to bottom, transparent 0%, rgba(6,6,8,${0.3 + scrollProgress * 0.7}) 70%, #060608 100%)`,
        pointerEvents: 'none', zIndex: 7, transition: 'height 0.1s ease-out'
      }} />
      {/* Overall opacity */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `rgba(6,6,8,${scrollProgress * 0.5})`,
        pointerEvents: 'none', zIndex: 8
      }} />
    </div>
  );
};

export default HeroImage;
