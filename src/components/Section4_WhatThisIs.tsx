import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  LayoutDashboard,
  Workflow,
  BarChart3,
  CheckCircle,
  Users,
  Settings,
  XCircle,
  ChevronRight,
  Brain,
  Check,
} from "lucide-react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  ComposedChart,
} from "recharts";
import { motion } from "framer-motion";

const chartData = [
  { day: "Mon", current: 82, potential: 55 },
  { day: "Tue", current: 75, potential: 60 },
  { day: "Wed", current: 68, potential: 65 },
  { day: "Thu", current: 60, potential: 70 },
  { day: "Fri", current: 52, potential: 76 },
  { day: "Sat", current: 45, potential: 82 },
  { day: "Sun", current: 38, potential: 90 },
];

const statCards = [
  { label: "SPREADSHEETS", value: "∞ files", icon: XCircle, badge: "INEFFICIENT", spark: "M0,8 L3,6 L6,7 L9,4 L12,5 L15,2 L18,3 L21,0" },
  { label: "CHATS SCATTERED", value: "27 threads", icon: XCircle, badge: "FRAGMENTED", spark: "M0,6 L3,8 L6,4 L9,7 L12,3 L15,6 L18,2 L21,5" },
  { label: "MEMORY GAPS", value: "Daily", icon: XCircle, badge: "CRITICAL", spark: "M0,4 L3,6 L6,3 L9,7 L12,5 L15,8 L18,6 L21,9" },
  { label: "FOLLOW-UPS MISSED", value: "42%", icon: XCircle, badge: "AT RISK", spark: "M0,2 L3,4 L6,3 L9,6 L12,5 L15,7 L18,8 L21,9" },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Workflow, label: "Operations" },
  { icon: BarChart3, label: "Reports" },
  { icon: CheckCircle, label: "Approvals" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
];

const rejectionList = [
  "Not a generic template.",
  "Not a fake demo.",
  'Not "pang-idea lang."',
];

const checklistItems = [
  "what slows your team down",
  "what data you need to see",
  "what reports matter",
  "what approvals are annoying",
  "what departments are disconnected",
  "what process is broken",
];

const Section4WhatThisIs = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="overview"
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: "#0A0A0B", marginTop: "-120px", position: "relative", zIndex: 10 }}
    >
      <div ref={ref} className="container max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbd23] mb-3">
            WHAT THIS IS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            What This Is
          </h2>
        </motion.div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-[#0F0F11] rounded-2xl border border-[#2A2A32] overflow-hidden relative"
          style={{
            boxShadow: "0 0 80px rgba(251,189,35,0.08)",
          }}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.02,
            }}
          />

          {/* Top Bar */}
          <div className="h-12 bg-[#131316] border-b border-[#2A2A32] flex items-center px-5 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-4 h-4 rounded bg-[#fbbd23]" />
              <span className="text-white text-xs font-semibold tracking-wider">OPS AI &bull; SME SYSTEM</span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="bg-[#1C1C21] text-gray-400 text-xs px-4 py-1 rounded-md hidden md:block">
                ops-ai.ph/your-internal-system
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#fbbd23] animate-pulse" />
              <span className="text-[#fbbd23] text-xs font-medium">LIVE</span>
            </div>
          </div>

          {/* Body */}
          <div className="flex relative z-10" style={{ minHeight: "600px" }}>
            {/* Sidebar - hidden on mobile/tablet */}
            <div className="hidden lg:flex flex-col w-52 bg-[#0F0F11] border-r border-[#2A2A32] p-4 justify-between">
              <div>
                <span className="text-gray-600 text-[10px] uppercase tracking-widest mb-3 block">NAVIGATION</span>
                <div className="space-y-1">
                  {navItems.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-md text-sm cursor-pointer transition-all ${
                        item.active
                          ? "bg-[#fbbd23]/10 text-[#fbbd23] border-l-2 border-[#fbbd23]"
                          : "text-gray-400 hover:bg-[#1C1C21]"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#fbbd23]/5 border border-[#fbbd23]/20 rounded-lg p-3">
                <p className="text-white text-xs font-semibold">You need a way to build.</p>
                <p className="text-[#fbbd23] text-[10px] mt-1 cursor-pointer hover:underline">Start building &rarr;</p>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-4 md:p-6 overflow-hidden pb-16">
              {/* ROW 1: Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {statCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-[#131316] border border-[#2A2A32] rounded-xl p-4 cursor-pointer transition-all duration-200 hover:border-[#fbbd23]/40 hover:-translate-y-0.5"
                    style={{ "--hover-shadow": "0 0 20px rgba(251,189,35,0.15)" } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(251,189,35,0.15)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-[#fbbd23]/10 rounded-md p-2">
                        <card.icon className="w-4 h-4 text-[#fbbd23]" />
                      </div>
                      <span className="bg-red-500/10 text-red-400 text-[9px] px-2 py-0.5 rounded-full">{card.badge}</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-white text-xl md:text-2xl font-bold mb-2">{card.value}</p>
                    <svg viewBox="0 0 21 10" className="w-full h-3 opacity-60">
                      <path d={card.spark} fill="none" stroke="#fbbd23" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* ROW 2: Chart + Rejection */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 mt-4">
                {/* Live Diagnosis */}
                <div className="lg:col-span-2 bg-[#131316] border border-[#2A2A32] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#fbbd23] animate-pulse" />
                      <span className="text-[#fbbd23] text-xs uppercase tracking-wider font-semibold">LIVE DIAGNOSIS</span>
                    </div>
                    <span className="text-gray-500 text-xs">Last 7 days &#9662;</span>
                  </div>
                  <p className="text-white text-sm font-medium mt-2 mb-4">Your operations are running on:</p>

                  <div className="h-40 md:h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2A2A32" vertical={false} />
                        <XAxis dataKey="day" tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                        <Bar dataKey="current" fill="#fbbd23" radius={[4, 4, 0, 0]} barSize={20} name="Current (generic apps)" />
                        <Line
                          dataKey="potential"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth={2}
                          dot={false}
                          name="Your own system"
                          type="monotone"
                        />
                        <Legend
                          wrapperStyle={{ fontSize: 10, color: "#9CA3AF" }}
                          iconSize={8}
                          formatter={(value: string) => <span style={{ color: "#9CA3AF", fontSize: 10 }}>{value}</span>}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mt-4">
                    Instead of depending on developers to slowly interpret your operations... this bootcamp shows you how to use{" "}
                    <span className="bg-[#fbbd23]/10 text-[#fbbd23] px-2 py-0.5 rounded text-xs">AI + prompts + no-code tools</span>{" "}
                    to build{" "}
                    <span className="bg-[#fbbd23]/10 text-[#fbbd23] px-2 py-0.5 rounded text-xs">your own internal business system yourself</span>.
                  </p>
                </div>

                {/* Rejection List */}
                <div className="bg-[#131316] border border-[#2A2A32] rounded-xl p-5">
                  <span className="text-gray-500 text-xs uppercase tracking-widest">NOT THIS</span>
                  <div className="mt-4 space-y-2">
                    {rejectionList.map((item, i) => (
                      <div
                        key={i}
                        className="border-l-2 border-[#fbbd23] pl-3 py-2 hover:bg-[#1C1C21] rounded-r cursor-pointer transition-all flex items-center justify-between"
                      >
                        <span className="text-gray-300 text-sm">{item}</span>
                        <XCircle className="w-3 h-3 text-gray-600 shrink-0" />
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#2A2A32] mt-4 pt-4">
                    <div className="bg-[#fbbd23]/5 border border-[#fbbd23]/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Brain className="w-4 h-4 text-[#fbbd23] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-xs font-semibold">A system based on your real business logic.</p>
                          <p className="text-gray-400 text-[10px] mt-1 leading-relaxed">
                            No outsider will ever understand your business as fast as the owner who lives inside it every day.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 3: Checklist */}
              <div className="bg-[#131316] border border-[#2A2A32] rounded-xl p-5 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-xs uppercase tracking-widest">CHECKLIST &bull; YOU ALREADY KNOW</span>
                  <span className="text-[#fbbd23] text-xs">6/7 &#10003;</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {checklistItems.map((item, i) => (
                    <div
                      key={i}
                      className="group bg-[#1C1C21] hover:bg-[#fbbd23]/5 border border-[#2A2A32] hover:border-[#fbbd23]/40 rounded-md px-3 py-2.5 flex items-center justify-between cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-[#fbbd23] transition-transform group-hover:translate-x-0.5" />
                        <span className="text-gray-300 text-xs">{item}</span>
                      </div>
                      <Check className="w-3 h-3 text-[#fbbd23]/60" />
                    </div>
                  ))}
                  {/* Highlighted last item */}
                  <div className="md:col-span-2 lg:col-span-3 bg-[#fbbd23]/10 border border-[#fbbd23]/50 rounded-md px-3 py-2.5 flex items-center justify-between cursor-pointer transition-all">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#fbbd23]" />
                      <span className="text-[#fbbd23] text-xs font-semibold">and what kind of system would make your business easier to run</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#fbbd23] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="lg:ml-52 h-12 bg-[#0F0F11] border-t border-[#2A2A32] flex items-center justify-between px-4 md:px-6 relative z-10">
            <span className="text-gray-500 text-xs hidden md:block">You do not need more awareness.</span>
            <span className="text-white text-sm font-bold">You need a way to build.</span>
            <button className="bg-[#fbbd23] text-black text-xs font-semibold px-4 py-1.5 rounded-md hover:brightness-110 transition whitespace-nowrap">
              That's what this bootcamp gives you &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4WhatThisIs;
