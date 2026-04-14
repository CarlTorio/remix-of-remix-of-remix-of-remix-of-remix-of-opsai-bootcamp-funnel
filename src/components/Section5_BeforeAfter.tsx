import { XCircle, Check, ArrowDown, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  { bold: "Spreadsheets", rest: " for every process" },
  { bold: "Reports that arrive late", rest: " or don't match" },
  { bold: "Tasks that only move", rest: " when you follow up" },
  { bold: "Approvals stuck", rest: " in chat threads" },
  { bold: "A team that always asks you", rest: " because you're the only one who sees everything" },
];

const afterItems = [
  { bold: "One real dashboard", rest: " that shows what's happening" },
  { bold: "Cleaner workflows", rest: " between every department" },
  { bold: "Less back-and-forth", rest: ", less manual checking" },
  { bold: "Full visibility", rest: " over numbers, people, and processes" },
  { bold: "Faster decisions", rest: " and fewer errors" },
];

const Section5BeforeAfter = () => {
  const { ref: refBefore, visible: visBefore } = useScrollReveal();
  const { ref: refAfter, visible: visAfter } = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="transformation" className="w-full py-16 md:py-20 px-6" style={{ background: "#0A0A0F" }}>
      <div className="max-w-[800px] mx-auto text-center bg-[radial-gradient(ellipse_at_center,rgba(255,183,0,0.04),transparent_60%)]">

        {/* TOP HEADER */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-5">
            <span className="w-1 h-1 bg-[#ffb700] rounded-full animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              THE TRANSFORMATION
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-2xl mx-auto">
            Two Pictures of Your Business.{" "}
            <span className="text-[#ffb700]">You Choose Which One.</span>
          </h2>
        </div>

        {/* BEFORE BLOCK */}
        <div ref={refBefore} className="mb-20">
          <p className="text-red-400 text-[11px] uppercase tracking-[0.3em] font-bold mb-5">BEFORE</p>
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3 transition-all duration-700"
            style={{ opacity: visBefore ? 1 : 0, transform: visBefore ? "translateY(0)" : "translateY(16px)" }}
          >
            What Life Looks Like <span className="text-red-400/80">Before This</span>
          </h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-6">
            Your business probably looks successful from the outside. But behind the scenes?
          </p>
          <p className="text-sm text-gray-500 mb-6">It's possible you're still dealing with:</p>

          <div className="flex flex-col gap-3 max-w-md mx-auto text-left mb-8">
            {beforeItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: visBefore ? 1 : 0,
                  transform: visBefore ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <XCircle className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300 leading-snug">
                  <strong className="text-white font-semibold">{item.bold}</strong>{item.rest}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed italic max-w-xl mx-auto mt-8">
            So instead of leading the business… you end up{" "}
            <span className="text-red-400 not-italic font-semibold">babysitting the backend</span>.
          </p>
          <p className="text-base md:text-lg font-bold text-white mt-5">
            That's exhausting. And dangerous.
          </p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto mt-2">
            Manual systems don't get manageable as you grow. They get expensive.
          </p>
        </div>

        {/* TRANSITION DIVIDER */}
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#ffb700]/40" />
          <div
            className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-2 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(255,183,0,0.15)" }}
          >
            <ArrowDown className="w-5 h-5 text-[#ffb700] animate-bounce" />
            <span className="text-[#ffb700] text-xs md:text-sm font-bold uppercase tracking-widest">
              BUT IT DOESN'T HAVE TO BE
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#ffb700]/40" />
        </div>

        {/* AFTER BLOCK */}
        <div ref={refAfter}>
          <p className="text-[#ffb700] text-[11px] uppercase tracking-[0.3em] font-bold mb-5">AFTER</p>
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3 transition-all duration-700"
            style={{ opacity: visAfter ? 1 : 0, transform: visAfter ? "translateY(0)" : "translateY(16px)" }}
          >
            What Life Looks Like <span className="text-[#ffb700]">After This</span>
          </h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-6">
            Imagine waking up tomorrow and finally having:
          </p>

          <div className="flex flex-col gap-3 max-w-md mx-auto text-left mb-8">
            {afterItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: visAfter ? 1 : 0,
                  transform: visAfter ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300 leading-snug">
                  <strong className="text-white font-semibold">{item.bold}</strong>{item.rest}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed italic max-w-xl mx-auto mt-8">
            Instead of chasing the business every day… you finally start{" "}
            <span className="text-[#ffb700] not-italic font-semibold">seeing it clearly</span>.
          </p>
          <p className="text-base md:text-lg font-bold text-white mt-5">
            You stop operating from confusion.
          </p>
          <p className="text-base md:text-lg font-bold text-[#ffb700] mt-1">
            You start operating from systems.
          </p>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <CTAButton href="/checkout">
            Show Me How
          </CTAButton>
          <p className="text-sm md:text-base text-gray-400 italic mt-4 font-medium">
            Built in 14 days. Owned forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5BeforeAfter;
