import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Image, Search, Map, LayoutGrid, Sparkles, Hammer, Rocket,
  CheckCircle2, BookMarked, FileSpreadsheet, Wrench, Video,
  ArrowRight
} from "lucide-react";

const week1Sessions = [
  { num: "01", icon: Search, title: "Systems Diagnosis", desc: "Discover the hidden operational problems slowing down your business — the invisible backend drag most owners never see." },
  { num: "02", icon: Map, title: "Operator Mapping", desc: "Audit your workflows, approvals, departments, and the exact data your business needs — like a CEO would." },
  { num: "03", icon: LayoutGrid, title: "System Blueprinting", desc: "Design the internal system structure your business actually needs — before writing a single line of code." },
];

const week2Sessions = [
  { num: "04", icon: Sparkles, title: "AI Build Method", desc: "Learn how to use AI and prompts to turn business logic into software logic — your repeatable AI-assisted workflow." },
  { num: "05", icon: Hammer, title: "Internal App Buildout", desc: "Build dashboards, workflows, forms, access control, permissions, and the core structure of your system." },
  { num: "06", icon: Rocket, title: "Operational Launch", desc: "Refine your build, test it in real conditions, and turn it into a usable internal system you can keep improving." },
];

const bonuses = [
  { icon: BookMarked, title: "SME Prompt Vault", sub: "Ready-to-use prompts" },
  { icon: FileSpreadsheet, title: "Blueprint Kit", sub: "Templates & worksheets" },
  { icon: Wrench, title: "Tool Stack Guide", sub: "Curated no-code tools" },
  { icon: Video, title: "Replay Vault", sub: "30-day session access" },
];

interface SessionCardProps {
  num: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
  visible: boolean;
  sessionNum: number;
}

const SessionCard = ({ num, icon: Icon, title, desc, index, visible, sessionNum }: SessionCardProps) => (
  <div
    className={`bg-[#13131A] border border-white/[0.06] rounded-xl p-4 relative transition-all duration-300 hover:border-[#ffb700]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,183,0,0.08)] group cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffb700]/20 group-hover:border-[#ffb700]/50 transition-colors">
        <span className="text-[#ffb700] text-sm font-bold">{num}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5 text-[#ffb700]" />
            <span className="text-sm font-bold text-white">{title}</span>
          </div>
          <span className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">SESSION {sessionNum}</span>
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const SectionRoadmap = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: ref2, visible: visible2 } = useScrollReveal();
  const { ref: ref3, visible: visible3 } = useScrollReveal();
  const { ref: ref4, visible: visible4 } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="py-20 px-6"
      style={{ backgroundColor: "#0A0A0F", backgroundImage: "radial-gradient(ellipse at left, rgba(255,183,0,0.05), transparent 60%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={ref} className={`text-center mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            How This <span className="text-[#ffb700]">Bootcamp</span> Actually Works
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            A live 2-week online bootcamp with 6 total sessions. From messy backend thinking to a working internal system — using AI, prompts, and no-code tools.
          </p>
        </div>

        {/* Narrative Block */}
        <div className={`max-w-2xl mx-auto text-center mb-12 mt-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-sm md:text-base text-gray-500 italic leading-relaxed mb-3">
            Instead of wasting months explaining your operations to someone else…
          </p>
          <p className="text-base md:text-lg font-bold text-white mb-2">
            You're not starting from zero.
          </p>
          <p className="text-base md:text-lg font-bold text-[#ffb700]">
            You're starting from <span className="text-[#ffb700]">ownership</span>.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            And when the owner has the right tools, prompts, and process — the build gets <span className="text-[#ffb700] font-semibold">dramatically faster</span>.
          </p>
        </div>


        {/* Outcome Strip */}
        <div ref={ref3} className={`mt-12 max-w-4xl mx-auto bg-gradient-to-br from-[#ffb700]/10 via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(255,183,0,0.08)] relative overflow-hidden transition-all duration-700 ${visible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#ffb700]/5 rounded-full" />
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffb700]/15 border border-[#ffb700]/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#ffb700]" />
            </div>
            <div className="flex-1">
              <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-1.5 block">AFTER 14 DAYS</span>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight mb-2">You'll have a working business system you built yourself.</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Not a tutorial. Not a template. Your actual internal business system — running live, owned by you, and built around your real business logic.</p>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div ref={ref4} className={`mt-8 max-w-4xl mx-auto text-center transition-all duration-700 ${visible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-4 block">PLUS, EVERY STUDENT GETS:</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {bonuses.map((b, i) => (
              <div
                key={i}
                className={`bg-[#13131A] border border-white/[0.06] rounded-lg p-3 text-center hover:border-[#ffb700]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${visible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: visible4 ? `${i * 80}ms` : "0ms" }}
              >
                <b.icon className="w-7 h-7 mx-auto mb-2 text-[#ffb700]" />
                <p className="text-[11px] font-bold text-white leading-tight mb-1">{b.title}</p>
                <p className="text-[9px] text-gray-500">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-3">Next cohort fills up fast.</p>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
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

export default SectionRoadmap;
