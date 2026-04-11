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
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(245,191,51,0.04), transparent 60%)" }} />
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-[1200px] mx-auto">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <RevealBlock delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#f5bf33]/10 border border-[#f5bf33]/30 px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-[#f5bf33] rounded-full animate-pulse" />
              <span className="text-[#f5bf33] text-xs uppercase tracking-[0.25em] font-semibold">Find Your Industry</span>
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
              <div className="bg-[#13131A] border border-white/[0.06] hover:border-[#f5bf33]/40 hover:bg-[#1A1A22] hover:-translate-y-1 rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 group h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-11 md:h-11 bg-[#f5bf33]/10 border border-[#f5bf33]/20 rounded-xl flex items-center justify-center group-hover:bg-[#f5bf33]/20 transition flex-shrink-0">
                    <card.icon className="w-4 h-4 md:w-5 md:h-5 text-[#f5bf33]" />
                  </div>
                  <span className="text-[#f5bf33] text-xs uppercase tracking-wider font-bold">{card.tag}</span>
                </div>
                <h3 className="text-white text-base font-bold leading-tight">{card.title}</h3>
                <p className="text-[#8A8A94] text-sm leading-relaxed">{card.body}</p>
              </div>
            </RevealBlock>
          ))}
        </div>

        {/* ===== CATCH-ALL CARD ===== */}
        <RevealBlock delay={80 + industries.length * 80} className="max-w-4xl mx-auto mb-16 mt-4">
          <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(245,191,51,0.08),transparent_70%)] bg-[#13131A] border border-[#f5bf33]/25 rounded-3xl px-6 py-10 md:px-12 md:py-14 shadow-[0_20px_60px_rgba(245,191,51,0.08)] text-center hover:border-[#f5bf33]/40 transition-all duration-300">
            {/* Subtle dot pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #f5bf33 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            {/* Big icon */}
            <div className="relative mx-auto mb-5 w-14 h-14 md:w-16 md:h-16 bg-[#f5bf33]/10 border border-[#f5bf33]/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,191,51,0.15)]">
              <LayoutGrid className="w-7 h-7 md:w-8 md:h-8 text-[#f5bf33]" />
            </div>

            {/* Eyebrow tag */}
            <div className="relative inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#f5bf33] rounded-full animate-pulse" />
              <span className="text-[#f5bf33] text-xs uppercase tracking-[0.25em] font-bold">Or Simply…</span>
            </div>

            {/* Title */}
            <h3 className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-5">
              You're a business owner who <span className="text-[#f5bf33]">wants out of the chaos</span>.
            </h3>

            {/* Body */}
            <p className="relative text-base md:text-lg text-[#8A8A94] leading-relaxed max-w-2xl mx-auto mb-8">
              You want to stop depending on{" "}
              <span className="bg-[#f5bf33]/10 text-[#f5bf33] px-2 py-0.5 rounded-md text-sm md:text-base font-medium border border-[#f5bf33]/20">spreadsheets</span>,{" "}
              <span className="bg-[#f5bf33]/10 text-[#f5bf33] px-2 py-0.5 rounded-md text-sm md:text-base font-medium border border-[#f5bf33]/20">scattered tools</span>, and{" "}
              <span className="bg-[#f5bf33]/10 text-[#f5bf33] px-2 py-0.5 rounded-md text-sm md:text-base font-medium border border-[#f5bf33]/20">manual monitoring</span>{" "}
              just to understand what's happening in your own business.
            </p>

            {/* Divider */}
            <div className="relative w-12 h-px bg-[#f5bf33]/40 mx-auto mb-6" />

            {/* Emotional close */}
            <p className="relative text-base md:text-lg text-white font-semibold italic max-w-xl mx-auto">
              You just want <span className="text-[#f5bf33]">clarity</span>, <span className="text-[#f5bf33]">control</span>, and a system that actually works for you.
            </p>
          </div>
        </RevealBlock>

        {/* ===== CLOSING CALLOUT ===== */}
        <RevealBlock delay={200} className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.3] mb-6">
            If you want{" "}
            <span className="text-[#f5bf33]">one internal system</span>{" "}
            that matches your operations, connects your departments, and gives you{" "}
            <span className="text-[#f5bf33]">real visibility</span>{" "}
            over your business —{" "}
            <span className="text-[#f5bf33]">this is for you</span>.
          </p>
          <p className="text-base md:text-lg text-[#8A8A94] leading-relaxed max-w-2xl mx-auto mb-10">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than{" "}
            <span className="text-white font-semibold">you, the owner</span>. And now, with AI, you no longer need to spend{" "}
            <span className="text-[#f5bf33] font-semibold">₱500,000+</span>{" "}
            or wait months just to build the first real version of your system.
          </p>

          {/* CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-[#f5bf33] text-black font-bold text-base md:text-lg tracking-wide px-10 py-4 rounded-full shadow-[0_10px_40px_rgba(245,191,51,0.4)] hover:bg-[#f9cc4d] hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(245,191,51,0.5)] transition-all duration-300"
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
