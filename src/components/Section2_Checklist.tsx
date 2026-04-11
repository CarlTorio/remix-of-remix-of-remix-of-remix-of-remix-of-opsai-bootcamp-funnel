import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  UtensilsCrossed,
  ShoppingCart,
  Briefcase,
  Users,
  HardHat,
  Store,
  FileSpreadsheet,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    tag: "FOOD & BEVERAGE",
    title: "You run a food & beverage business",
    body: "and you want to build your own POS-connected system with inventory, sales, orders, and reporting visibility",
  },
  {
    icon: ShoppingCart,
    tag: "E-COMMERCE",
    title: "You run an e-commerce business",
    body: "and you want to connect your warehouse, orders, fulfillment, logistics, inventory, and accounting into one clear system",
  },
  {
    icon: Briefcase,
    tag: "SERVICE-BASED",
    title: "You run a service-based business",
    body: "and you need a better way to manage projects, client delivery, team tasks, billing, and progress monitoring",
  },
  {
    icon: Users,
    tag: "AGENCY / CONSULTANCY",
    title: "You run an agency or consultancy",
    body: "and you want a system for lead tracking, onboarding, approvals, delivery, reports, and renewals",
  },
  {
    icon: HardHat,
    tag: "CONSTRUCTION",
    title: "You run a construction business",
    body: "and you need to monitor materials, manpower, project progress, billing, approvals, and site updates in one place",
  },
  {
    icon: Store,
    tag: "RETAIL / DISTRIBUTION",
    title: "You run a retail, distribution, or franchise business",
    body: "and you want visibility over stocks, collections, branch performance, product movement, and operations",
  },
  {
    icon: FileSpreadsheet,
    tag: "FINANCE / HR / ADMIN",
    title: "You run an accounting, finance, admin, or HR-heavy business",
    body: "and you want your own internal system for records, approvals, workflows, employee access, and reporting",
  },
];

function RevealBlock({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Section2Checklist = () => {
  return (
    <section
      className="relative w-full py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(255,183,0,0.04), transparent 60%)" }} />
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-[1200px] mx-auto">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <RevealBlock delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-[#ffb700] rounded-full animate-pulse" />
              <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">Find Your Industry</span>
            </div>
          </RevealBlock>

          <RevealBlock delay={80}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              This Is For You If…
            </h2>
          </RevealBlock>

          <RevealBlock delay={140}>
            <p className="text-base md:text-lg text-[#8A8A94] max-w-xl mx-auto">
              7 business types already use this system. Find yours below.
            </p>
          </RevealBlock>
        </div>

        {/* ===== INDUSTRY CARDS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {industries.map((card, i) => (
            <RevealBlock key={i} delay={80 + i * 80}>
              <div className="bg-[#13131A] border border-white/[0.06] hover:border-[#ffb700]/40 hover:bg-[#1A1A22] hover:-translate-y-1 rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 group h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-[#ffb700]/10 border border-[#ffb700]/20 rounded-xl flex items-center justify-center group-hover:bg-[#ffb700]/20 transition flex-shrink-0">
                    <card.icon className="w-4 h-4 md:w-5 md:h-5 text-[#ffb700]" />
                  </div>
                  <span className="text-[#ffb700] text-xs uppercase tracking-wider font-bold">{card.tag}</span>
                </div>
                <h3 className="text-white text-base font-bold leading-tight">{card.title}</h3>
                <p className="text-[#8A8A94] text-sm leading-relaxed">{card.body}</p>
              </div>
            </RevealBlock>
          ))}
        </div>

        {/* ===== CATCH-ALL CARD ===== */}
        <RevealBlock delay={80 + industries.length * 80} className="max-w-4xl mx-auto mb-16 mt-4">
          <div className="bg-gradient-to-br from-[#ffb700]/10 via-[#13131A] to-[#13131A] border border-[#ffb700]/30 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(255,183,0,0.08)] flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffb700]/15 border border-[#ffb700]/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <LayoutGrid className="w-6 h-6 md:w-7 md:h-7 text-[#ffb700]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#ffb700] text-xs uppercase tracking-wider font-bold">Or Simply…</span>
              <h3 className="text-white text-lg md:text-xl font-bold leading-tight">You're a business owner who wants out of the chaos</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Or you're simply a business owner who wants to stop depending on{" "}
                <span className="text-[#ffb700] font-semibold">spreadsheets</span>,{" "}
                <span className="text-[#ffb700] font-semibold">scattered tools</span>, and{" "}
                <span className="text-[#ffb700] font-semibold">manual monitoring</span>{" "}
                just to understand what's happening in the business.
              </p>
            </div>
          </div>
        </RevealBlock>

        {/* ===== CLOSING CALLOUT ===== */}
        <RevealBlock delay={200} className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.3] mb-6">
            If you want{" "}
            <span className="text-[#ffb700]">one internal system</span>{" "}
            that matches your operations, connects your departments, and gives you{" "}
            <span className="text-[#ffb700]">real visibility</span>{" "}
            over your business —{" "}
            <span className="text-[#ffb700]">this is for you</span>.
          </p>
          <p className="text-base md:text-lg text-[#8A8A94] leading-relaxed max-w-2xl mx-auto mb-10">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than{" "}
            <span className="text-white font-semibold">you, the owner</span>. And now, with AI, you no longer need to spend{" "}
            <span className="text-[#ffb700] font-semibold">₱500,000+</span>{" "}
            or wait months just to build the first real version of your system.
          </p>

          {/* CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-[#ffb700] text-black font-bold text-base md:text-lg tracking-wide px-10 py-4 rounded-full shadow-[0_10px_40px_rgba(255,183,0,0.4)] hover:bg-[#ffc733] hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(255,183,0,0.5)] transition-all duration-300"
          >
            RESERVE MY SLOT FOR ₱4,886
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust microcopy */}
          <p className="mt-5 text-[#8A8A94] text-xs">
            ✓ 100 slots only  •  ✓ Starts July 2026  •  ✓ Lifetime access
          </p>
        </RevealBlock>
      </div>
    </section>
  );
};

export default Section2Checklist;
