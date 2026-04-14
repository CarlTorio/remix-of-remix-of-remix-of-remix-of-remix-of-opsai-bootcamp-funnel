import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import {
  Star, BookMarked, FileSpreadsheet, Wrench, Video,
  ShieldCheck, Lock, Users, Infinity, ArrowRight, Check
} from "lucide-react";

const includes = [
  { main: "6 Live Implementation Sessions", sub: "Mon/Wed/Fri over 2 weeks" },
  { main: "Internal System Blueprint Method", sub: "Map → design → build framework" },
  { main: "AI Build Method (Prompt-to-System)", sub: "Translate business to software logic" },
  { main: "Internal App Buildout Workflows", sub: "Dashboards, forms, permissions, roles" },
  { main: "Lifetime Access to Replays", sub: "Rewatch anytime, forever" },
];

const bonusItems = [
  { icon: BookMarked, title: "SME Prompt Vault", sub: "100+ ready-to-use prompts", value: "₱10,000" },
  { icon: FileSpreadsheet, title: "System Blueprint Kit", sub: "Templates & worksheets", value: "₱1,500" },
  { icon: Wrench, title: "No-Code Tool Stack Guide", sub: "Curated tool recommendations", value: "₱1,000" },
  { icon: Video, title: "Fast-Track Replay Vault", sub: "30-day priority access", value: "₱2,000" },
];

const trustItems = [
  { icon: Lock, label: "Secure Payment" },
  { icon: Users, label: "100 Slots Only" },
  { icon: Infinity, label: "Lifetime Access" },
];

const SectionOfferZone = () => {
  const { ref: cardRef, visible: cardVisible } = useScrollReveal(0.1);
  const { ref: guRef, visible: guVisible } = useScrollReveal(0.1);
  const { ref: trRef, visible: trVisible } = useScrollReveal(0.1);

  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.1), transparent 60%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/15 border border-[#ffb700]/40 px-3 py-1 rounded-full mb-4 shadow-[0_0_20px_rgba(255,183,0,0.2)]">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">The Offer</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            Everything You Need to <span className="text-[#ffb700]">Build Your System</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            One investment. Lifetime ownership. No subscriptions. No vendor lock-in.
          </p>
        </div>

        {/* Main Offer Card */}
        <div
          ref={cardRef}
          className={`max-w-2xl mx-auto relative transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ffb700]/20 via-[#ffb700]/40 to-[#ffb700]/20 blur-2xl rounded-3xl opacity-40 pointer-events-none z-0" />

          {/* Card */}
          <div className="relative z-10 bg-[#13131A] border border-[#ffb700]/40 rounded-3xl p-5 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(255,183,0,0.15)]">
            {/* Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-[#ffb700] text-black text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(255,183,0,0.4)]">
                <Star className="w-3 h-3" />
                FOUNDING COHORT
              </span>
            </div>

            {/* Title */}
            <div className="mt-3 text-center">
              <p className="text-base text-gray-400 uppercase tracking-widest font-semibold mb-1">SME Systems Bootcamp</p>
              <p className="text-xs text-gray-500 mb-5">The 14-Day Buildout Program</p>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-lg text-gray-500 line-through font-medium tabular-nums">₱200,000</span>
                
              </div>
              <p className="text-5xl md:text-6xl font-bold text-[#ffb700] tracking-tight leading-none drop-shadow-[0_0_40px_rgba(255,183,0,0.4)] tabular-nums">
                ₱4,886
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">
                One-Time Payment • Lifetime Access
              </p>
            </div>

            <div className="w-full h-px bg-[#ffb700]/20 my-6" />

            {/* What's Included */}
            <div className="mb-6">
              <p className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-3 text-left">What's Included</p>
              <div className="flex flex-col gap-2.5">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{item.main}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-[#ffb700]/20 my-6" />

            {/* Bonuses */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold">Plus 4 Premium Bonuses</p>
                <p className="text-[10px] text-gray-500 font-semibold">Total bonus value: ₱7,000</p>
              </div>
              <div className="flex flex-col gap-2.5">
                {bonusItems.map((b, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#0F0F14] border border-white/[0.05] hover:border-[#ffb700]/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#ffb700]/10 border border-[#ffb700]/25 flex items-center justify-center flex-shrink-0">
                        <b.icon className="w-4 h-4 text-[#ffb700]" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold text-white">{b.title}</p>
                        <p className="text-[10px] text-gray-500">{b.sub}</p>
                      </div>
                    </div>
                    <span className="bg-[#ffb700]/10 text-[#ffb700] text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider whitespace-nowrap">
                      Value: {b.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-[#ffb700]/20 my-6" />

            {/* Value Stack */}
            <div className="flex flex-col gap-1.5 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Bootcamp value:</span>
                <span className="text-xs text-gray-400 tabular-nums">₱200,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Bonuses value:</span>
                <span className="text-xs text-gray-400 tabular-nums">₱7,000</span>
              </div>
              <div className="border-t border-white/10 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white font-bold uppercase">Total Value:</span>
                <span className="text-base text-gray-300 line-through tabular-nums">₱207,000</span>
              </div>
              <div className="flex items-center justify-between bg-[#ffb700]/10 border border-[#ffb700]/30 rounded-lg px-3 py-2.5 mt-2">
                <span className="text-sm text-[#ffb700] font-bold uppercase">Your Price Today:</span>
                <span className="text-xl text-[#ffb700] font-bold tabular-nums">₱4,886</span>
              </div>
            </div>

            {/* CTA */}
            <CTAButton href="/checkout" className="w-full">
              RESERVE MY SLOT FOR ₱4,886
            </CTAButton>

            <p className="text-[10px] text-gray-500 text-center mt-3">
              🔒 Secure payment  •  ✓ Limited to 100 slots  •  ✓ Lifetime access
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div
          ref={guRef}
          className={`max-w-2xl mx-auto mt-8 transition-all duration-700 delay-[400ms] ${guVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="bg-gradient-to-r from-[#13131A] via-[#1A1A22] to-[#13131A] border border-[#ffb700]/20 rounded-2xl p-5 relative overflow-hidden">
            <ShieldCheck className="absolute -right-4 -top-4 w-32 h-32 text-[#ffb700] opacity-[0.05]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#ffb700]" />
              </div>
              <div className="flex-1">
                <p className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-1.5">7-Day Money-Back Guarantee</p>
                <p className="text-base font-bold text-white mb-1.5">Try the first sessions risk-free.</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  If within 7 days you feel the bootcamp isn't for you, send one email and we'll refund every peso. No forms. No questions. No hard feelings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          ref={trRef}
          className={`max-w-2xl mx-auto mt-8 grid grid-cols-3 gap-3 transition-all duration-700 delay-[600ms] ${trVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {trustItems.map((t, i) => (
            <div key={i} className="bg-[#0F0F14] border border-white/[0.05] rounded-lg p-3 flex flex-col items-center text-center gap-2 hover:border-[#ffb700]/30 transition-colors">
              <t.icon className="w-5 h-5 text-[#ffb700]" />
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold leading-tight">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOfferZone;
