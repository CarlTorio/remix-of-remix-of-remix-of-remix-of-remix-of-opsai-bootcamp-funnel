import { XCircle, Check, ArrowDown, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const traditional = [
  { bold: "Months", rest: " of meetings and explanations" },
  { bold: "Miscommunication", rest: " at every step" },
  { bold: "₱500K+", rest: " before anything ships" },
  { bold: "You still don't own", rest: " the system" },
];

const smarter = [
  { bold: "You", rest: " map your business clearly" },
  { bold: "AI", rest: " accelerates the build" },
  { bold: "No-code", rest: " removes the complexity" },
  { bold: "You own", rest: " the system forever" },
];

const SectionSmarterWay = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="smarter-way"
      className="w-full py-12 md:py-16 px-6 bg-[radial-gradient(ellipse_at_center,rgba(255,183,0,0.04),transparent_60%)]"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div
        ref={ref}
        className={`max-w-[700px] mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              THE SMARTER WAY
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-[1.2]">
            Two Ways to Build. <span className="text-[#ffb700]">One Is Smarter.</span>
          </h2>
        </div>

        {/* Traditional Way */}
        <div className="mb-10">
          <p className="text-red-400 text-[11px] uppercase tracking-[0.3em] font-bold mb-3">
            THE TRADITIONAL WAY
          </p>
          <div className="max-w-md mx-auto text-left flex flex-col gap-2.5 mb-5">
            {traditional.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `all 0.5s ease ${i * 60 + 200}ms`,
                }}
              >
                <XCircle className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-snug">
                  <span className="text-white font-semibold">{item.bold}</span>
                  {item.rest}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base font-bold text-red-400/90 italic mt-2">
            Slow. Expensive. Out of your control.
          </p>
        </div>

        {/* Transition Divider */}
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto my-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#ffb700]/40" />
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-2 rounded-full shadow-[0_0_30px_rgba(255,183,0,0.15)]">
            <ArrowDown className="w-4 h-4 text-[#ffb700] animate-bounce" />
            <span className="text-[#ffb700] text-[11px] font-bold uppercase tracking-widest">OR</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#ffb700]/40" />
        </div>

        {/* Smarter Way */}
        <div className="mb-10">
          <p className="text-[#ffb700] text-[11px] uppercase tracking-[0.3em] font-bold mb-3">
            THE SMARTER WAY
          </p>
          <div className="max-w-md mx-auto text-left flex flex-col gap-2.5 mb-5">
            {smarter.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `all 0.5s ease ${i * 60 + 600}ms`,
                }}
              >
                <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-snug">
                  <span className="text-white font-semibold">{item.bold}</span>
                  {item.rest}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base font-bold text-[#ffb700] italic mt-2">
            Faster. Cheaper. Built around you.
          </p>
        </div>

        {/* Bottom Hook */}
        <p className="mt-10 text-sm md:text-base text-gray-300 leading-relaxed max-w-lg mx-auto">
          If your business feels more manual than it should <span className="text-white font-bold">this isn't just another course</span>.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <CTAButton href="#pricing">
            Show Me the Offer
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SectionSmarterWay;
