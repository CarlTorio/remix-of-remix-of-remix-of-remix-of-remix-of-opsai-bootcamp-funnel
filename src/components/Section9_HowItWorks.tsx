import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Image, Map, Database, Wand2, Workflow, Zap, Rocket,
  CheckCircle2, Clock, ArrowRight
} from "lucide-react";

const week1Sessions = [
  { num: "01", icon: Map, day: "MONDAY", title: "Map Your Operations", desc: "Identify what slows your business and map your workflows." },
  { num: "02", icon: Database, day: "WEDNESDAY", title: "Build Your Data Layer", desc: "Set up your database tables for customers, orders, and inventory." },
  { num: "03", icon: Wand2, day: "FRIDAY", title: "AI Prompts & Tools", desc: "Master the AI prompts and no-code tools you'll use to build." },
];

const week2Sessions = [
  { num: "04", icon: Workflow, day: "MONDAY", title: "Build Your Dashboard", desc: "Create the visual interface for your real-time business overview." },
  { num: "05", icon: Zap, day: "WEDNESDAY", title: "Connect Everything", desc: "Wire up your dashboard to your data so it updates automatically." },
  { num: "06", icon: Rocket, day: "FRIDAY", title: "Launch & Iterate", desc: "Deploy your system, test it live, and learn how to improve it." },
];

const SessionCard = ({ session, index, visible }: { session: typeof week1Sessions[0]; index: number; visible: boolean }) => {
  const Icon = session.icon;
  return (
    <div
      className={`bg-[#13131A] border border-white/[0.06] rounded-xl p-4 relative transition-all duration-300 hover:border-[#ffb700]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,183,0,0.08)] group cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
    >
      <span className="absolute top-3 right-3 text-2xl font-bold text-[#ffb700]/15 group-hover:text-[#ffb700]/30 transition-colors font-mono">{session.num}</span>
      <div className="w-9 h-9 rounded-lg bg-[#ffb700]/10 border border-[#ffb700]/25 flex items-center justify-center mb-2.5">
        <Icon className="w-4 h-4 text-[#ffb700]" />
      </div>
      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">{session.day}</p>
      <h4 className="text-sm font-bold text-white leading-tight mb-1.5">{session.title}</h4>
      <p className="text-[11px] text-gray-400 leading-relaxed">{session.desc}</p>
      <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center gap-1.5">
        <Clock className="w-3 h-3 text-gray-500" />
        <span className="text-[10px] text-gray-500">2 hours · Live</span>
      </div>
    </div>
  );
};

const WeekBlock = ({ weekNum, title, sessions, visible, startIndex }: { weekNum: number; title: string; sessions: typeof week1Sessions; visible: boolean; startIndex: number }) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="bg-[#ffb700]/10 border border-[#ffb700]/30 px-2.5 py-0.5 rounded-md text-[#ffb700] text-[10px] font-bold uppercase tracking-wider">WEEK {weekNum}</span>
        <span className="text-base font-bold text-white tracking-tight">{title}</span>
      </div>
      <span className="text-[10px] text-gray-500">3 sessions</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {sessions.map((s, i) => (
        <SessionCard key={s.num} session={s} index={startIndex + i} visible={visible} />
      ))}
    </div>
  </div>
);

const Section9HowItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-[radial-gradient(ellipse_at_left,rgba(255,183,0,0.05),transparent_60%)]"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">HOW IT WORKS</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            2 Weeks. <span className="text-[#ffb700]">6 Live Sessions</span>. 1 System You Built Yourself.
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Live cohort sessions, 3 times a week. By the end, you'll have your own internal business system — not a tutorial, not a template, but the real thing.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left — Photo Placeholder */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/25 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(255,183,0,0.08)]">
              <div className="aspect-video lg:aspect-[4/5] rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#13131A] relative overflow-hidden flex flex-col items-center justify-center gap-3 border border-[#ffb700]/10">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,183,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,183,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center">
                    <Image className="w-7 h-7 text-[#ffb700]/60" />
                  </div>
                  <span className="text-[#ffb700]/70 text-[11px] uppercase tracking-widest font-bold">REPLACE WITH PHOTO</span>
                  <span className="text-gray-500 text-[10px] text-center px-4">Instructor, students, or live session</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500 italic">
              Live sessions every Mon, Wed, Fri — 7:00 PM to 9:00 PM PHT
            </p>
            <div className="mt-3 flex justify-center">
              <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-[10px] font-semibold">Next cohort starts soon</span>
              </span>
            </div>
          </div>

          {/* Right — Schedule */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <WeekBlock weekNum={1} title="Foundation & Build" sessions={week1Sessions} visible={visible} startIndex={0} />
            <WeekBlock weekNum={2} title="Connect & Launch" sessions={week2Sessions} visible={visible} startIndex={3} />
          </div>
        </div>

        {/* Outcome Strip */}
        <div
          className={`max-w-4xl mx-auto mt-12 bg-gradient-to-br from-[#ffb700]/10 via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(255,183,0,0.08)] relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: visible ? "600ms" : "0ms" }}
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#ffb700]/5 rounded-full" />
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffb700]/15 border border-[#ffb700]/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#ffb700]" />
            </div>
            <div className="flex-1">
              <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-1.5 block">AFTER 2 WEEKS</span>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight mb-2">You'll have a working system you built yourself.</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Not a tutorial. Not a template. Your actual internal business system — running live, owned by you, ready to use forever.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-3">Next cohort fills up fast.</p>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 bg-[#ffb700] hover:bg-[#ffc733] text-black font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-[0_10px_40px_rgba(255,183,0,0.4)] hover:shadow-[0_15px_50px_rgba(255,183,0,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Reserve My Slot for ₱4,886
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-3 text-[10px] text-gray-500">✓ Limited to 100 slots  •  ✓ Lifetime access  •  ✓ Live cohort</p>
        </div>
      </div>
    </section>
  );
};

export default Section9HowItWorks;
