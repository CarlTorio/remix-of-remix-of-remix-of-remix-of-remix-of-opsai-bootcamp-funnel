import { Brain, Sparkles, Crown, Clock, DollarSign, User, Lock, RefreshCw, Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    num: "01",
    Icon: Brain,
    title: "You know your business better than any developer",
    body: "No outsourced team will ever understand your operations, your customers, your edge cases, or your business logic faster than you, the owner who lives inside it every day.",
    objection: "I should hire experts",
  },
  {
    num: "02",
    Icon: Sparkles,
    title: "AI does the technical heavy lifting",
    body: "You don't need to write code. AI + no-code tools handle the technical work — you bring the business knowledge. The bootcamp teaches you exactly which prompts and tools to use.",
    objection: "I'm not technical enough",
  },
  {
    num: "03",
    Icon: Crown,
    title: "You own the system forever",
    body: "No monthly subscriptions. No vendor lock-in. No per-user fees. Build it once, modify it anytime, and never lose access. Your system, your rules.",
    objection: "What if I want to change it later?",
  },
];

const comparisonRows = [
  { label: "TIMELINE", traditional: "6+ months", ours: "2 weeks", Icon: Clock },
  { label: "COST", traditional: "₱500,000+", ours: "₱4,886", Icon: DollarSign },
  { label: "WHO BUILDS IT", traditional: "Outsourced devs", ours: "You, the owner", Icon: User },
  { label: "UNDERSTANDING", traditional: "Generic templates", ours: "Your business logic", Icon: Brain },
  { label: "OWNERSHIP", traditional: "Vendor-locked", ours: "Owned forever", Icon: Lock },
  { label: "CHANGES LATER", traditional: "Costs more $$$", ours: "Free, anytime", Icon: RefreshCw },
];

const SectionWhyThisWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="why"
      className="w-full py-16 md:py-20 px-4 md:px-6"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.05), transparent 60%)",
      }}
    >
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              WHY THIS WORKS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            The 3 Reasons This Beats <span className="text-[#ffb700]">Hiring Developers</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            You don't need to know how to code. You need to know your business — which you already do.
          </p>
        </div>

        {/* 3 Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`group relative bg-[#13131A] border border-white/[0.06] rounded-2xl p-5 md:p-6 flex flex-col gap-3 transition-all duration-300 hover:border-[#ffb700]/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,183,0,0.08)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="absolute top-4 right-4 text-4xl font-bold text-[#ffb700]/15 group-hover:text-[#ffb700]/30 transition-colors font-mono">
                {r.num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#ffb700]/10 border border-[#ffb700]/25 flex items-center justify-center mb-2 group-hover:bg-[#ffb700]/15 transition-colors">
                <r.Icon className="w-5 h-5 text-[#ffb700]" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-tight">
                {r.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{r.body}</p>
              <div className="mt-3 pt-3 border-t border-white/[0.05]">
                <p className="text-xs text-gray-500 italic">
                  Kills the objection:{" "}
                  <span className="text-[#ffb700]/80 not-italic">"{r.objection}"</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table — Desktop */}
        <div
          className={`max-w-4xl mx-auto bg-[#13131A] border border-white/[0.06] rounded-2xl overflow-hidden mb-16 transition-all duration-700 hidden md:block ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/[0.06]">
            <div className="p-4 bg-[#0F0F14]">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">COMPARE</span>
            </div>
            <div className="p-4 text-center bg-[#0F0F14] flex flex-col items-center justify-center gap-1">
              <span className="text-red-400 text-base">✕</span>
              <span className="text-red-400 text-xs uppercase tracking-widest font-bold">TRADITIONAL WAY</span>
            </div>
            <div className="p-4 text-center flex flex-col items-center justify-center gap-1" style={{ background: "linear-gradient(to bottom, rgba(255,183,0,0.1), transparent)" }}>
              <Check className="w-4 h-4 text-[#ffb700]" />
              <span className="text-[#ffb700] text-xs uppercase tracking-widest font-bold">THE SME SYSTEMS WAY</span>
            </div>
          </div>
          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors`}
            >
              <div className="p-4 flex items-center gap-2">
                <row.Icon className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{row.label}</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-red-400/70 text-sm font-medium">{row.traditional}</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-1.5">
                <Check className="w-3 h-3 text-[#ffb700]" />
                <span className="text-sm text-white font-bold">{row.ours}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table — Mobile (stacked) */}
        <div
          className={`md:hidden space-y-3 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {comparisonRows.map((row, i) => (
            <div key={i} className="bg-[#13131A] border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <row.Icon className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{row.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <span className="text-[9px] text-red-400 uppercase tracking-widest font-bold block mb-1">Traditional</span>
                  <span className="text-red-400/70 text-sm font-medium">{row.traditional}</span>
                </div>
                <div className="text-center">
                  <span className="text-[9px] text-[#ffb700] uppercase tracking-widest font-bold block mb-1">SME Systems</span>
                  <div className="flex items-center justify-center gap-1">
                    <Check className="w-3 h-3 text-[#ffb700]" />
                    <span className="text-sm text-white font-bold">{row.ours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-bold text-white tracking-tight mb-5">
            This isn't theory. It's <span className="text-[#ffb700]">a different way to build</span>.
          </p>
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#ffb700] hover:bg-[#ffc733] text-black font-bold text-sm px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(255,183,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,183,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            See How It Works
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyThisWorks;
