import { Clock, DollarSign, Layers, Users, Zap, Coins, Box, Crown, ArrowDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeStats = [
  { icon: Clock, number: "8 hrs", label: "Daily on spreadsheets", tag: "wasted" },
  { icon: DollarSign, number: "₱500K+", label: "On custom software", tag: "lost" },
  { icon: Layers, number: "5 tools", label: "Disconnected & messy", tag: "scattered" },
  { icon: Users, number: "3 devs", label: "Don't get your business", tag: "frustrated" },
];

const afterStats = [
  { icon: Zap, number: "30 mins", label: "Quick daily review", tag: "saved" },
  { icon: Coins, number: "₱4,886", label: "One-time investment", tag: "earned" },
  { icon: Box, number: "1 system", label: "All operations connected", tag: "unified" },
  { icon: Crown, number: "Just you", label: "Built around your logic", tag: "owned" },
];

const Section5BeforeAfter = () => {
  const { ref: refBefore, visible: visBefore } = useScrollReveal();
  const { ref: refAfter, visible: visAfter } = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 px-6" style={{ background: "#0A0A0F" }}>
      <div className="max-w-[1100px] mx-auto text-center bg-[radial-gradient(ellipse_at_center,rgba(255,183,0,0.04),transparent_60%)]">
        {/* TOP HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 bg-[#ffb700] rounded-full animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              THE TRANSFORMATION
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            What <span className="text-[#ffb700]">2 Weeks of Building</span> Actually Changes
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Real numbers from real business owners after their first internal system.
          </p>
        </div>

        {/* BEFORE ROW */}
        <div ref={refBefore} className="max-w-5xl mx-auto mb-6">
          <p className="text-red-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-center">
            BEFORE: RUNNING ON CHAOS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {beforeStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#13131A] border border-red-500/15 rounded-xl p-4 text-center relative hover:border-red-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                    opacity: visBefore ? 1 : 0,
                    transform: visBefore ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white tabular-nums mb-1">{stat.number}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">{stat.label}</p>
                  <div className="mt-2">
                    <span className="bg-red-500/10 text-red-400 text-[9px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                      {stat.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRANSITION DIVIDER */}
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#ffb700]/40" />
          <div
            className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-2 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(255,183,0,0.15)" }}
          >
            <ArrowDown className="w-4 h-4 text-[#ffb700] animate-bounce" />
            <span className="text-[#ffb700] text-[10px] font-bold uppercase tracking-widest">
              AFTER 2 WEEKS
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#ffb700]/40" />
        </div>

        {/* AFTER ROW */}
        <div ref={refAfter} className="max-w-5xl mx-auto mb-12">
          <p className="text-[#ffb700] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-center">
            AFTER: YOUR OWN SYSTEM
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {afterStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#ffb700]/[0.08] via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-xl p-4 text-center relative hover:border-[#ffb700]/50 hover:-translate-y-0.5 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 20px rgba(255,183,0,0.05)",
                    transitionDelay: `${i * 60}ms`,
                    opacity: visAfter ? 1 : 0,
                    transform: visAfter ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#ffb700]/15 border border-[#ffb700]/40 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#ffb700]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white tabular-nums mb-1">{stat.number}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-tight">{stat.label}</p>
                  <div className="mt-2">
                    <span className="bg-[#ffb700]/15 text-[#ffb700] text-[9px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                      {stat.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
            You don't need <span className="text-gray-500">more developers</span>. You need{" "}
            <span className="text-[#ffb700]">your own system</span>.
          </p>
          <button
            onClick={() => scrollTo("pricing")}
            className="inline-flex items-center gap-1.5 text-[#ffb700] text-sm font-semibold hover:text-[#ffc733] cursor-pointer underline-offset-4 hover:underline transition-colors"
          >
            Built in 14 days. Owned forever. →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5BeforeAfter;
