import { useScrollReveal } from "@/hooks/useScrollReveal";
import { XCircle, Check } from "lucide-react";

function RevealBlock({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const problems = [
  { bold: "Spreadsheets", rest: " with broken formulas" },
  { bold: "Messenger threads", rest: " as your 'system'" },
  { bold: "Memory", rest: " and manual follow-ups" },
  { bold: "Generic apps", rest: " that don't fit your business" },
  { bold: "Outsourced people", rest: " who still don't get it" },
];

const signals = [
  "What's slowing your team down",
  "What data you actually need",
  "What reports matter",
  "What approvals are wasting time",
  "Which departments aren't connected",
  "What process is broken",
];

const notList = ["Not a template.", "Not a demo.", "Not theory."];

export default function Section4WhatThisIs() {
  return (
    <section
      id="overview"
      className="relative w-full py-28 px-6"
      style={{ backgroundColor: "#06070e", marginTop: "-120px", zIndex: 10 }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(255,183,0,0.06), transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-[780px] mx-auto text-center">

        <RevealBlock delay={80}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-8">
            Stop Running Your Business on <span className="text-[#ffb700]">Spreadsheets</span>.
          </h2>
        </RevealBlock>

        <RevealBlock delay={160}>
          <p className="text-base md:text-lg text-[#C4C4CC] leading-relaxed max-w-2xl mx-auto mb-16">
            The SME Systems Bootcamp teaches you how to build your own internal business system using{" "}
            <span className="text-white font-semibold">AI and no-code tools</span> — in less than{" "}
            <span className="text-[#ffb700] font-semibold">2 weeks</span>.
          </p>
        </RevealBlock>

        <RevealBlock delay={200}>
          <div className="w-16 h-px bg-[#ffb700]/40 mx-auto mb-12" />
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="text-lg md:text-xl text-white font-medium mb-8">You're probably still running on:</p>
        </RevealBlock>

        <RevealBlock delay={150} className="max-w-xl mx-auto mb-16 pl-8 md:pl-16">
          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <XCircle className="w-6 h-6 text-red-400/80 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#C4C4CC] leading-snug">
                  <span className="text-white font-semibold">{p.bold}</span>{p.rest}
                </span>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="text-xl md:text-2xl font-medium italic mb-10 text-primary-foreground">There's a better way.</p>
        </RevealBlock>

        <RevealBlock delay={120} className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#ffb700]/5 border border-[#ffb700]/25 rounded-2xl px-8 py-10 shadow-[0_0_60px_rgba(255,183,0,0.08)]">
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="text-[#ffb700]">AI</span> + <span className="text-[#ffb700]">PROMPTS</span> + <span className="text-[#ffb700]">NO CODE</span>
            </p>
            <p className="text-xl text-[#8A8A94] my-2">=</p>
            <p className="text-xl md:text-2xl font-bold text-[#ffb700] tracking-tight">your own real business system.</p>
          </div>
        </RevealBlock>

        <RevealBlock delay={100} className="mb-4">
          <div className="flex flex-col gap-3 items-center">
            {notList.map((item, i) => (
              <p key={i} className="text-lg md:text-xl text-[#8A8A94] font-medium">
                <span className="text-[#ffb700] font-bold">— </span>{item}
              </p>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={150}>
          <p className="text-xl md:text-2xl font-bold text-white mb-16 mt-6">
            A system built around <span className="text-[#ffb700]">YOUR</span> business logic.
          </p>
        </RevealBlock>

        <RevealBlock delay={100} className="max-w-2xl mx-auto mb-16 text-left md:text-center">
          <p className="text-base md:text-lg text-[#C4C4CC] leading-relaxed">
            No developer will ever understand your business faster than <span className="text-white font-semibold">you, the owner</span>.
          </p>
          <p className="text-base md:text-lg text-[#C4C4CC] leading-relaxed mt-4">
            You already know what's broken. You just need a <span className="text-[#ffb700] font-semibold">way to build the fix</span>.
          </p>
        </RevealBlock>

        <RevealBlock delay={80}>
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">You already know:</h3>
        </RevealBlock>

        <RevealBlock delay={120} className="max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {signals.map((s, i) => (
              <div key={i} className="bg-[#13131A] border border-white/5 hover:border-[#ffb700]/30 rounded-xl px-5 py-4 flex items-center gap-3 cursor-pointer transition-all duration-300 group">
                <Check className="w-4 h-4 text-[#ffb700]/70 group-hover:text-[#ffb700] transition flex-shrink-0" />
                <span className="text-sm md:text-base text-[#C4C4CC] text-left">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-gradient-to-r from-[#ffb700]/10 to-transparent border border-[#ffb700]/40 rounded-xl px-5 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0" />
              <span className="text-[#ffb700] font-semibold text-base md:text-lg text-left">What system would make your life easier</span>
            </div>
            <span className="w-2 h-2 bg-[#ffb700] rounded-full animate-pulse flex-shrink-0" />
          </div>
        </RevealBlock>

        <div className="mb-20" />

        <RevealBlock delay={100} className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#8A8A94] font-medium mb-3">You don't need more awareness.</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
            You need a <span className="text-[#ffb700]">way to build</span>.
          </p>
          <a href="#pricing" className="inline-flex text-base md:text-lg text-[#ffb700] font-semibold hover:text-white cursor-pointer underline-offset-4 hover:underline transition-colors">
            That's exactly what this bootcamp gives you. →
          </a>
        </RevealBlock>
      </div>
    </section>
  );
}
