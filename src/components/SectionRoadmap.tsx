import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Image, Search, Map, LayoutGrid, Sparkles, Hammer, Rocket,
  CheckCircle2, BookMarked, FileSpreadsheet, Wrench, Video,
  ArrowRight
} from "lucide-react";

const phases = [
  { num: "01", icon: Map, title: "Phase 1 — Map", time: "Morning · ~2 hrs", desc: "Diagnose hidden bottlenecks, audit workflows and approvals, define the data, dashboards, and reports you actually need, and choose the right no-code tool stack. Walk out with a clear system blueprint." },
  { num: "02", icon: Hammer, title: "Phase 2 — Build", time: "Midday · ~3 hrs", desc: "Use AI and prompts to translate business logic into software logic. Build dashboards, forms, workflows, user roles, employee logins, approvals, and back-end automations — live." },
  { num: "03", icon: Rocket, title: "Phase 3 — Launch", time: "Afternoon · ~1 hr", desc: "Test the system in real conditions, refine and polish, and walk out with the first usable version of your internal business system." },
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
            A live 1-day intensive online bootcamp delivered in 3 phases — Map, Build, Launch. From messy backend thinking to a working internal system using AI, prompts, and no-code tools, all in a single day.
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
            And when the owner has the right tools, prompts, and process the build gets <span className="text-[#ffb700] font-semibold">dramatically faster</span>.
          </p>
        </div>


      </div>
    </section>
  );
};

export default SectionRoadmap;
