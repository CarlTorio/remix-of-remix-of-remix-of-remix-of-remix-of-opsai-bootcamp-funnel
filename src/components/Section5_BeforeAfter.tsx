import { XCircle, Check, ArrowDown, LayoutDashboard } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeData = [
  { number: "8 hrs/day", label: "Stuck in spreadsheets", tag: "wasted" },
  { number: "₱500,000+", label: "Spent on custom software", tag: "lost" },
  { number: "5 tools", label: "Disconnected & messy", tag: "scattered" },
  { number: "3 outsourced devs", label: "Don't understand your business", tag: "frustrated" },
];

const afterData = [
  { number: "30 mins/day", label: "Quick review on your dashboard", tag: "saved" },
  { number: "₱4,886", label: "One-time investment", tag: "earned" },
  { number: "1 system", label: "All operations connected", tag: "unified" },
  { number: "Just you", label: "Built around your business logic", tag: "owned" },
];

const Section5BeforeAfter = () => {
  const { ref: refLeft, visible: visLeft } = useScrollReveal();
  const { ref: refRight, visible: visRight } = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 px-6" style={{ background: "#0A0A0F" }}>
      <div
        className="max-w-[1100px] mx-auto bg-[radial-gradient(ellipse_at_right,rgba(255,183,0,0.05),transparent_60%)]"
      >
        {/* TOP HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 bg-[#ffb700] rounded-full animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              THE TRANSFORMATION
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            From <span className="text-red-400/80">8 Hours of Spreadsheets</span> to{" "}
            <span className="text-[#ffb700]">30 Minutes of Clarity</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Real numbers from real business owners after building their first internal system.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* LEFT COLUMN */}
          <div ref={refLeft} className="lg:col-span-7 flex flex-col gap-4">
            {/* BEFORE */}
            <div>
              <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold mb-2">
                BEFORE: Running on chaos
              </p>
              <div className="bg-[#13131A] border border-red-500/15 rounded-xl p-4">
                <div className="flex flex-col gap-2.5">
                  {beforeData.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 transition-all duration-500"
                      style={{
                        transitionDelay: `${i * 80}ms`,
                        opacity: visLeft ? 1 : 0,
                        transform: visLeft ? "translateY(0)" : "translateY(12px)",
                      }}
                    >
                      <div className="w-7 h-7 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-white tabular-nums">{item.number}</p>
                        <p className="text-[11px] text-gray-500 leading-tight">{item.label}</p>
                      </div>
                      <span className="flex-shrink-0 bg-red-500/10 text-red-400 text-[9px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center justify-center my-1">
              <div
                className="w-9 h-9 rounded-full bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center animate-bounce"
                style={{ boxShadow: "0 0 15px rgba(255,183,0,0.3)" }}
              >
                <ArrowDown className="w-4 h-4 text-[#ffb700]" />
              </div>
            </div>

            {/* AFTER */}
            <div>
              <p className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-2">
                AFTER: Your own system
              </p>
              <div
                className="bg-gradient-to-br from-[#ffb700]/[0.08] via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-xl p-4"
                style={{ boxShadow: "0 8px 30px rgba(255,183,0,0.06)" }}
              >
                <div className="flex flex-col gap-2.5">
                  {afterData.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 transition-all duration-500"
                      style={{
                        transitionDelay: `${(i + 5) * 80}ms`,
                        opacity: visLeft ? 1 : 0,
                        transform: visLeft ? "translateY(0)" : "translateY(12px)",
                      }}
                    >
                      <div className="w-7 h-7 rounded-md bg-[#ffb700]/15 border border-[#ffb700]/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#ffb700]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-white tabular-nums">{item.number}</p>
                        <p className="text-[11px] text-gray-400 leading-tight">{item.label}</p>
                      </div>
                      <span className="flex-shrink-0 bg-[#ffb700]/15 text-[#ffb700] text-[9px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            ref={refRight}
            className="lg:col-span-5 relative lg:sticky lg:top-24 transition-all duration-700"
            style={{
              opacity: visRight ? 1 : 0,
              transform: visRight ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "300ms",
            }}
          >
            <div
              className="relative rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/25 p-2.5"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,183,0,0.08)" }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-[#ffb700]/15">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-500 text-[8px] font-mono ml-1">your-business.system</span>
              </div>

              {/* Placeholder */}
              <div className="aspect-video rounded-lg bg-[#0F1420] relative overflow-hidden flex flex-col items-center justify-center gap-2">
                <LayoutDashboard className="w-12 h-12 text-[#ffb700]/30" />
                <span className="text-gray-500 text-[10px]">[Dashboard preview]</span>
                <span className="text-gray-600 text-[9px]">Replace with screenshot</span>
              </div>
            </div>

            {/* Below preview */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400 italic mb-3">
                This is what 6 weeks of building looks like.
              </p>
              <button
                onClick={() => scrollTo("dashboard-showcase")}
                className="inline-flex items-center gap-1.5 bg-[#ffb700]/10 hover:bg-[#ffb700]/20 border border-[#ffb700]/40 px-3 py-1.5 rounded-full text-[#ffb700] text-[11px] font-semibold cursor-pointer transition-all"
              >
                See Live Examples
                <ArrowDown className="w-3 h-3" />
              </button>
            </div>
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
            Built in 6 weeks. Owned forever. →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5BeforeAfter;
