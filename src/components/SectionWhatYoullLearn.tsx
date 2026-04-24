import { Check, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const phase1Outcomes = [
  { bold: "Bottlenecks", rest: " in your operations identified" },
  { bold: "System blueprint", rest: " of what you actually need" },
  { bold: "Reports & dashboards", rest: " defined for your business" },
  { bold: "Tools chosen", rest: " based on your specific setup" },
  { bold: "Stop guessing", rest: " what your business needs" },
];

const phase23Outcomes = [
  { bold: "Dashboards", rest: " that show your real-time business" },
  { bold: "Forms & data flow", rest: " for capturing information" },
  { bold: "Workflows & approvals", rest: " that move automatically" },
  { bold: "User roles & permissions", rest: " for your team" },
  { bold: "Login access", rest: " for employees" },
  { bold: "The first working version", rest: " of your internal system, tested & deployed" },
];

const SectionWhatYoullLearn = () => {
  const { ref: ref1, visible: visible1 } = useScrollReveal();
  const { ref: ref2, visible: visible2 } = useScrollReveal();
  const { ref: ref3, visible: visible3 } = useScrollReveal();

  return (
    <section
      id="what-youll-learn"
      className="py-20 px-6 relative"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,183,0,0.04),transparent_60%)]" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div ref={ref1} className={`text-center mb-12 transition-all duration-700 ${visible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            WHAT YOU'LL LEARN INSIDE
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            The Skills You'll <span className="text-[#ffb700]">Build</span> (Not Just Watch)
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            By the end of the day, you'll have done the work — not just sat through lessons. Here's what each phase unlocks.
          </p>
        </div>

        {/* Main Grid */}
        <div ref={ref2} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {/* Week 1 */}
          <div
            className={`bg-[#13131A] border border-white/[0.08] rounded-2xl p-6 md:p-7 relative transition-all duration-700 hover:border-[#ffb700]/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,183,0,0.06)] group ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#ffb700]/10 border border-[#ffb700]/30 px-2.5 py-0.5 rounded-md text-[#ffb700] text-[10px] font-bold uppercase tracking-wider">PHASE 1</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold">MORNING · MAP</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-3">Map Before You Build</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Before you build anything, you need clarity. You can't fix what you can't see.
            </p>
            <div className="w-12 h-px bg-[#ffb700]/30 mb-4" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-3 block">BY THE END OF PHASE 1:</span>
            <div className="flex flex-col gap-2.5">
              {phase1Outcomes.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 transition-all duration-500 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  style={{ transitionDelay: visible2 ? `${i * 60}ms` : "0ms" }}
                >
                  <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 leading-snug">
                    <strong className="text-white font-semibold">{item.bold}</strong>{item.rest}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold text-[#ffb700] italic text-center">Stop guessing. Start mapping.</p>
          </div>

          {/* Week 2 */}
          <div
            className={`bg-gradient-to-br from-[#ffb700]/[0.08] via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-2xl p-6 md:p-7 relative transition-all duration-700 hover:border-[#ffb700]/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,183,0,0.12)] shadow-[0_4px_20px_rgba(255,183,0,0.05)] group ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: visible2 ? "100ms" : "0ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#ffb700]/15 border border-[#ffb700]/40 px-2.5 py-0.5 rounded-md text-[#ffb700] text-[10px] font-bold uppercase tracking-wider">PHASE 2 + 3</span>
              <span className="text-[#ffb700]/70 text-[10px] uppercase tracking-widest font-semibold">AFTERNOON · BUILD & LAUNCH</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-3">Build & Launch Your Real System</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Now you build. Using AI, prompts, and guided implementation, you turn the blueprint into something real — then test, refine, and deploy it the same day.
            </p>
            <div className="w-12 h-px bg-[#ffb700]/40 mb-4" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-3 block">YOU'LL CREATE:</span>
            <div className="flex flex-col gap-2.5">
              {phase23Outcomes.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 transition-all duration-500 ${visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  style={{ transitionDelay: visible2 ? `${(i + 5) * 60}ms` : "0ms" }}
                >
                  <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 leading-snug">
                    <strong className="text-white font-semibold">{item.bold}</strong>{item.rest}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold text-[#ffb700] italic text-center">Your first working internal system.</p>
          </div>
        </div>

        {/* Bridge Line */}
        <div ref={ref3} className={`mt-10 max-w-2xl mx-auto text-center transition-all duration-700 ${visible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm md:text-base text-red-400/70 line-through font-medium">Months of back-and-forth</span>
            <ArrowRight className="w-5 h-5 text-[#ffb700]" />
            <span className="text-sm md:text-base text-[#ffb700] font-bold">1 day of building</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-white font-semibold mb-4">Your business deserves a real system.</p>
          <CTAButton href="/checkout">
            Reserve My Slot
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionWhatYoullLearn;
