import { XCircle, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problemItems = [
  "Spreadsheets",
  "Chats",
  "Memory",
  "Follow-ups",
  "Generic apps",
  "Outsourced people who don't understand the business",
];

const youKnowItems = [
  "what slows your team down",
  "what data you need to see",
  "what reports matter",
  "what approvals are annoying",
  "what departments are disconnected",
  "what process is broken",
];

const highlightedItem = "and what kind of system would make your business easier to run";

function useStaggerReveal(count: number, stagger = 100) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * stagger);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count, stagger]);

  return { ref, visibleItems };
}

const Section4WhatThisIs = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, visibleItems } = useStaggerReveal(4, 100);

  return (
    <section
      id="overview"
      className="relative py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: "#06070e", marginTop: "-120px", position: "relative", zIndex: 10 }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60M0 0h60' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#ffb700] mb-4">
            WHAT THIS IS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            What This Is
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            The SME Systems Bootcamp is a live implementation bootcamp for business owners who want to stop running their operations on outdated workflows.
          </p>
        </div>

        {/* Main Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div
              className={`bg-[#0F1524] border border-[#1E2A44] rounded-2xl p-6 md:p-8 hover:-translate-y-0.5 transition-all duration-300 ${visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <span className="text-gray-500 text-xs uppercase tracking-widest block mb-5">
                STOP RUNNING ON
              </span>

              <div className="flex flex-col">
                {problemItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 py-3 ${i < problemItems.length - 1 ? "border-b border-[#1E2A44]" : ""}`}
                  >
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 bg-red-500/10 rounded-full">
                      <XCircle className="w-4 h-4 text-red-400" />
                    </span>
                    <span className="text-gray-300 text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1E2A44] my-6" />

              <span className="text-[#ffb700] text-xs uppercase tracking-widest block mb-3">
                THE ALTERNATIVE
              </span>
              <p className="text-white text-xl font-semibold leading-snug mb-3">
                A system based on your real business logic.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-[#ffb700] pl-4">
                No outsider will ever understand your business as fast as the owner who lives inside it every day.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card 1 — The Approach */}
            <div
              className={`bg-[#0F1524] border border-[#1E2A44] rounded-2xl p-6 md:p-8 hover:-translate-y-0.5 transition-all duration-300 ${visibleItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <span className="text-[#ffb700] text-xs uppercase tracking-widest block mb-4">
                THE APPROACH
              </span>
              <p className="text-gray-300 text-base leading-relaxed">
                Instead of depending on developers to slowly interpret your operations… this bootcamp shows you how to use{" "}
                <span className="inline-flex bg-[#ffb700]/10 text-[#ffcf4d] px-2.5 py-0.5 rounded-md text-sm font-medium border border-[#ffb700]/20">
                  AI + prompts + no-code tools
                </span>{" "}
                to build the first real version of{" "}
                <span className="inline-flex bg-[#ffb700]/10 text-[#ffcf4d] px-2.5 py-0.5 rounded-md text-sm font-medium border border-[#ffb700]/20">
                  your own internal business system yourself
                </span>
                .
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {["Not a generic template.", "Not a fake demo.", "Not \"pang-idea lang.\""].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-semibold text-base">
                    <span className="text-[#ffb700] font-bold">—</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — You Already Know */}
            <div
              className={`bg-[#0F1524] border border-[#1E2A44] rounded-2xl p-6 md:p-8 hover:-translate-y-0.5 transition-all duration-300 ${visibleItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="text-[#ffb700] text-xs uppercase tracking-widest">
                  YOU ALREADY KNOW
                </span>
                <span className="text-gray-500 text-xs">6 signals →</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {youKnowItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#131A2E] hover:bg-[#1A2238] border border-[#1E2A44] hover:border-[#ffb700]/40 rounded-lg px-4 py-3.5 flex items-center gap-3 cursor-pointer transition-all duration-200 group"
                  >
                    <ChevronRight className="text-[#ffb700] w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-gradient-to-r from-[#ffb700]/10 to-transparent border border-[#ffb700]/40 rounded-lg px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-[#ffb700] w-4 h-4 shrink-0" />
                  <span className="text-[#ffcf4d] text-sm font-semibold">{highlightedItem}</span>
                </div>
                <span className="w-2 h-2 bg-[#ffb700] rounded-full animate-pulse shrink-0" />
              </div>
            </div>

            {/* Card 3 — Final CTA */}
            <div
              className={`bg-gradient-to-br from-[#ffb700]/10 via-[#0F1524] to-[#0F1524] border border-[#ffb700]/30 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-0.5 transition-all duration-300 ${visibleItems[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ boxShadow: "0 0 60px rgba(255,183,0,0.08)" }}
            >
              <p className="text-gray-400 text-sm mb-2">You do not need more awareness.</p>
              <p className="text-white text-2xl md:text-3xl font-bold mb-4">You need a way to build.</p>
              <span className="inline-flex items-center gap-2 text-[#ffb700] hover:text-[#ffcf4d] text-base font-semibold underline-offset-4 hover:underline cursor-pointer transition-colors">
                That's what this bootcamp gives you →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4WhatThisIs;
