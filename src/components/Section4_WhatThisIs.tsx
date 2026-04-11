import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";
import {
  LayoutDashboard, Workflow, BarChart3, CheckCircle, Users, Settings,
  XCircle, ChevronRight, Brain, ArrowDown
} from "lucide-react";

const problemCards = [
  { label: "Spreadsheets", value: "∞" },
  { label: "Chats", value: "247" },
  { label: "Memory", value: "0%" },
  { label: "Follow-ups", value: "∞" },
];

const problemCards2 = [
  { label: "Generic Apps", value: "12+" },
  { label: "Outsourced People", value: "∞" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Workflow, label: "Operations" },
  { icon: BarChart3, label: "Reports" },
  { icon: CheckCircle, label: "Approvals" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
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
      className="py-12 md:py-20 relative"
      style={{ backgroundColor: "#0A0E1A", marginTop: "-120px", position: "relative", zIndex: 10 }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className={`container max-w-[1280px] relative z-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <h2
            className="font-heading font-bold text-3xl md:text-5xl text-white"
            style={{ textShadow: "0 0 30px rgba(59,130,246,0.15)" }}
          >
            What This Is
          </h2>
        </div>

        {/* Browser Window Frame */}
        <div
          className="rounded-xl overflow-hidden shadow-2xl"
          style={{ background: "#0F1524", border: "1px solid #1E2A44" }}
        >
          {/* Top Bar */}
          <div className="h-10 flex items-center px-4 gap-2" style={{ borderBottom: "1px solid #1E2A44" }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 flex justify-center">
              <span
                className="text-xs px-3 py-1 rounded-md"
                style={{ background: "#1A2238", color: "#9CA3AF" }}
              >
                ops-ai.ph/your-system
              </span>
            </div>
          </div>

          {/* Body: Sidebar + Main */}
          <div className="flex">
            {/* Sidebar (hidden on mobile) */}
            <div
              className="hidden md:block w-56 shrink-0 py-4 px-3"
              style={{ borderRight: "1px solid #1E2A44" }}
            >
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                      item.active
                        ? "bg-blue-500/10 text-blue-400 border-l-2 border-blue-500"
                        : "text-gray-500 hover:text-gray-400"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Dashboard Area */}
            <div className="flex-1 p-4 md:p-8 space-y-6">
              {/* ROW 1: Problem Metrics */}
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">Problem Metrics</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {problemCards.map((card, i) => (
                    <div
                      key={card.label}
                      className="rounded-lg p-4 md:p-5 transition hover:border-blue-500/30"
                      style={{
                        background: "#131A2E",
                        border: "1px solid #1E2A44",
                        animationDelay: `${i * 100}ms`,
                      }}
                    >
                      <XCircle className="w-5 h-5 text-red-400 mb-2" />
                      <p className="text-gray-400 text-sm">{card.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <ArrowDown className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs">inefficient</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                  {problemCards2.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-lg p-4 md:p-5 transition hover:border-blue-500/30"
                      style={{ background: "#131A2E", border: "1px solid #1E2A44" }}
                    >
                      <XCircle className="w-5 h-5 text-red-400 mb-2" />
                      <p className="text-gray-400 text-sm">{card.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <ArrowDown className="w-3 h-3 text-red-400" />
                        <span className="text-red-400 text-xs">inefficient</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROW 2: System Diagnosis */}
              <div
                className="rounded-lg p-5 md:p-6 mt-6"
                style={{ background: "#131A2E", border: "1px solid #1E2A44" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-blue-400 text-xs uppercase tracking-wider font-semibold">Live Diagnosis</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Instead of depending on developers to slowly interpret your operations… this bootcamp shows you how to use{" "}
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-sm">AI + prompts + no-code tools</span>{" "}
                  to build the first real version of{" "}
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-sm">your own internal business system yourself</span>.
                </p>
                <div className="mt-5 space-y-2">
                  {["Not a generic template.", 'Not a fake demo.', 'Not "pang-idea lang."'].map((text) => (
                    <div
                      key={text}
                      className="pl-4 py-2 text-gray-300 text-sm font-semibold"
                      style={{ borderLeft: "2px solid #3B82F6" }}
                    >
                      — {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* ROW 3: Core Logic */}
              <div
                className="rounded-lg p-5 md:p-6 mt-6"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.05), transparent)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl text-white font-semibold">
                      A system based on your real business logic.
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      Because the truth is: No outsider will ever understand your business as fast as{" "}
                      <span className="text-white font-semibold">the owner who lives inside it every day</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* ROW 4: Checklist */}
              <div className="mt-8">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">Checklist / You Already Know</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {checklistItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition"
                      style={{ background: "#131A2E", border: "1px solid #1E2A44" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1A2238";
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#131A2E";
                        e.currentTarget.style.borderColor = "#1E2A44";
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                      <span className="text-gray-600">→</span>
                    </div>
                  ))}
                </div>
                {/* Highlighted last item */}
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-md mt-3 cursor-pointer"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.4)" }}
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-300 text-sm font-semibold">
                      and what kind of system would make your business easier to run
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                </div>
              </div>

              {/* ROW 5: Final Verdict */}
              <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid #1E2A44" }}>
                <p className="text-gray-500 text-sm">You do not need more awareness.</p>
                <p className="text-2xl text-white font-bold mt-2">You need a way to build.</p>
                <p className="text-blue-400 hover:text-blue-300 mt-3 text-sm underline underline-offset-4 cursor-pointer transition">
                  That's what this bootcamp gives you →
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4WhatThisIs;
