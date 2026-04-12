import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionFinalCTA = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      id="final-cta"
      className="py-24 px-6"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at center, rgba(255,183,0,0.12), transparent 70%)",
      }}
    >
      <div ref={ref} className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 px-3 py-1 rounded-full mb-5">
            <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-[10px] uppercase tracking-[0.25em] font-semibold">Last Call</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl mx-auto mb-4">
            You've Read Enough. Now <span className="text-[#ffb700]">Build It</span>.
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            In 14 days, you'll either have a working internal business system or you'll still be running on spreadsheets, wondering what could've been.
          </p>
        </div>

        {/* Urgency Bar */}
        <div className="max-w-xl mx-auto mt-8 mb-8 relative">
          <div className="absolute -inset-0.5 bg-[#ffb700]/15 blur-xl rounded-2xl opacity-50 -z-10" />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-3 bg-[#ffb700] hover:bg-[#ffc733] text-black font-bold text-base md:text-lg px-10 md:px-14 py-5 rounded-full shadow-[0_15px_50px_rgba(255,183,0,0.5)] hover:shadow-[0_20px_60px_rgba(255,183,0,0.6)] hover:-translate-y-1 transition-all duration-300 tracking-wide"
          >
            RESERVE MY SLOT FOR ₱4,886
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[11px] text-gray-500 leading-relaxed mt-4 text-center">
            🔒 Secure payment  •  ✓ 7-day money-back guarantee  •  ✓ Lifetime access
          </p>
        </div>

        {/* Alt path */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Not ready yet?{" "}
            <button
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#ffb700] cursor-pointer hover:underline underline-offset-4"
            >
              Read the FAQ →
            </button>
          </p>
        </div>

        {/* Closing line */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-500 italic leading-relaxed">
            The best time to build your system was yesterday. The second best time is right now.
          </p>
          <p className="mt-3 text-[11px] text-[#ffb700] font-semibold">John Carl Torio, SME Systems Bootcamp</p>
        </div>
      </div>
    </section>
  );
};

export default SectionFinalCTA;
