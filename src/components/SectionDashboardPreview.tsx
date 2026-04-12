import { useState } from "react";
import { Sun, Moon, UtensilsCrossed, ShoppingCart, Store, Briefcase } from "lucide-react";

const tabs = [
  { id: 0, icon: UtensilsCrossed, label: "F&B / Restaurant" },
  { id: 1, icon: ShoppingCart, label: "E-commerce" },
  { id: 2, icon: Store, label: "Retail / Distribution" },
  { id: 3, icon: Briefcase, label: "Service / Agency" },
];

const SectionDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <section
      className="w-full py-24 px-6 mt-12 relative"
      style={{
        background: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.05), transparent 60%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-[#ffb700] rounded-full animate-pulse" />
          <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">
            SEE WHAT YOU CAN BUILD
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          Real Systems, <span className="text-[#ffb700]">Built By Owners</span> Like You
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Click through 4 sample dashboards built inside the bootcamp. This is the kind of system you'll build yourself — no developers, no{" "}
          <span className="text-[#ffb700] font-semibold">₱500,000+</span> software.
        </p>

        {/* Dashboard Frame */}
        <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-b from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/20 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(255,183,0,0.08)]">
          {/* Top Controls Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#ffb700]/15">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-500 text-xs font-mono">sample-dashboard.ops-ai.ph</span>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              {isDark ? "Dark" : "Light"}
            </button>
          </div>

          {/* Tabs Row */}
          <div className="flex flex-wrap gap-2 p-4 border-b border-[#ffb700]/15 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#ffb700] text-black shadow-[0_4px_20px_rgba(255,183,0,0.4)]"
                      : "bg-transparent text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Inner Dashboard Area */}
          <div className="p-2 md:p-3">
            <div
              className={`rounded-2xl overflow-hidden min-h-[600px] flex items-center justify-center transition-colors duration-500 ${
                isDark ? "bg-[#0F1420]" : "bg-[#F8FAFC]"
              }`}
            >
              <span className={`text-sm ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                {tabs[activeTab].label} dashboard loading...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDashboardPreview;
