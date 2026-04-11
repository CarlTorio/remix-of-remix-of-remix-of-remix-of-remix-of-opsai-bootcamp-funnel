import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const included = [
  "Live 2-week cohort sessions",
  "Build your own internal business system",
  "Dashboards, workflows, user roles, business logic",
  "Lifetime access to all replays",
];

const trustItems = [
  "100 Slots Only",
  "Starts July 2026",
  "Lifetime Access",
];

const Section3Intro = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="w-full bg-[#0A0A0F] py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,183,0,0.05),transparent_60%)] pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-[1100px] mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Eyebrow pill */}
        <div
          className={`inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-1.5 h-1.5 bg-[#ffb700] rounded-full animate-pulse" />
          <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">
            Limited Time Offer
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Introducing the{" "}
          <span className="text-[#ffb700]">SME Systems Bootcamp</span>
        </h2>

        {/* Subtext */}
        <p
          className={`text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          A live <span className="text-white font-semibold">2-week online bootcamp</span> where
          SME owners learn how to build their own internal business system, software, dashboards,
          workflows, user roles, and business logic using{" "}
          <span className="text-[#ffb700] font-semibold">AI and no-code tools</span>.
        </p>

        {/* Pricing Card */}
        <div
          className={`max-w-md mx-auto relative transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ffb700]/20 via-[#ffb700]/40 to-[#ffb700]/20 blur-xl rounded-3xl opacity-50 pointer-events-none" />

          {/* Card */}
          <div className="relative bg-[#13131A] border border-[#ffb700]/30 rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_rgba(255,183,0,0.1)]">
            {/* Best Value ribbon */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#ffb700] text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg inline-block">
                ★ BEST VALUE
              </span>
            </div>

            {/* Price today label */}
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 mt-2">
              Price Today
            </p>

            {/* Old price + save badge */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-gray-500 line-through font-medium">₱15,000</span>
              <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-semibold">
                SAVE ₱10,114
              </span>
            </div>

            {/* Main price */}
            <p className="text-5xl md:text-7xl font-bold text-[#ffb700] tracking-tight leading-none mb-2 drop-shadow-[0_0_40px_rgba(255,183,0,0.3)]">
              ₱4,886
            </p>

            {/* Slots indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm">Limited to 100 slots only</span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#ffb700]/15 my-6" />

            {/* What's included */}
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 text-left">
              What's Included
            </p>
            <div className="flex flex-col gap-3 text-left mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#ffb700] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#pricing"
              className="w-full flex items-center justify-center gap-2 bg-[#ffb700] text-black font-bold text-base tracking-wide py-4 rounded-full shadow-[0_10px_40px_rgba(255,183,0,0.4)] hover:bg-[#ffc733] hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(255,183,0,0.5)] transition-all duration-300"
            >
              RESERVE MY SLOT FOR ₱4,886
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Microcopy */}
            <p className="text-gray-500 text-xs mt-4 text-center">
              🔒 Secure payment • Instant access • 100% money-back guarantee
            </p>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3Intro;
