import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import { UtensilsCrossed, ShoppingCart, Briefcase, Users, HardHat, Store, FileSpreadsheet, LayoutGrid, ArrowRight, type LucideIcon } from "lucide-react";

const items: { tag: string; biz: string; rest: string; catchAll?: boolean; icon: LucideIcon }[] = [
  { tag: "FOOD & BEVERAGE", biz: "You run a food & beverage business", rest: "and you want to build your own POS-connected system with inventory, sales, orders, and reporting visibility", icon: UtensilsCrossed },
  { tag: "E-COMMERCE", biz: "You run an e-commerce business", rest: "and you want to connect your warehouse, orders, fulfillment, logistics, inventory, and accounting into one clear system", icon: ShoppingCart },
  { tag: "SERVICE-BASED", biz: "You run a service-based business", rest: "and you need a better way to manage projects, client delivery, team tasks, billing, and progress monitoring", icon: Briefcase },
  { tag: "AGENCY / CONSULTANCY", biz: "You run an agency or consultancy", rest: "and you want a system for lead tracking, onboarding, approvals, delivery, reports, and renewals", icon: Users },
  { tag: "CONSTRUCTION", biz: "You run a construction business", rest: "and you need to monitor materials, manpower, project progress, billing, approvals, and site updates in one place", icon: HardHat },
  { tag: "RETAIL / DISTRIBUTION / FRANCHISE", biz: "You run a retail, distribution, or franchise business", rest: "and you want visibility over stocks, collections, branch performance, product movement, and operations", icon: Store },
  { tag: "FINANCE / HR / ADMIN", biz: "You run an accounting, finance, admin, or HR-heavy business", rest: "and you want your own internal system for records, approvals, workflows, employee access, and reporting", icon: FileSpreadsheet },
  { tag: "OR SIMPLY...", biz: "Or you're simply a business owner", rest: "who wants to stop depending on spreadsheets, scattered tools, and manual monitoring just to understand what's happening in the business", catchAll: true, icon: LayoutGrid },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0F" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb700]"></span>
            </span>
            <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">FIND YOUR INDUSTRY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            This Is For You If…
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17171F] hover:border-[#ffb700]/40 ${
                item.catchAll
                  ? "bg-gradient-to-br from-[#ffb700]/[0.08] via-[#13131A] to-[#13131A] border border-[#ffb700]/30"
                  : "bg-[#13131A] border border-white/5"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`${item.tag}: ${item.biz}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:bg-[#ffb700]/20 group-hover:border-[#ffb700]/40 ${
                  item.catchAll ? "bg-[#ffb700]/15 border-[#ffb700]/20" : "bg-[#ffb700]/10 border-[#ffb700]/20"
                }`}>
                  <item.icon className="w-5 h-5 text-[#ffb700]" />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-[#ffb700] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-0.5">{item.tag}</span>
                  <h3 className="text-white text-base md:text-[17px] font-bold leading-snug">{item.biz}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{item.rest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-8">
            If you want <span className="text-[#ffb700]">one internal system</span> that matches your operations, connects your departments, and gives you <span className="text-[#ffb700]">real visibility</span> over your business — this is for you.
          </h3>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than <span className="text-white font-semibold">you, the owner</span>. And now, with AI, you no longer need to spend <span className="text-[#ffb700] font-semibold">₱500,000+</span> or wait months just to build the first real version of your system.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-[#ffb700] text-black font-bold text-base md:text-lg tracking-wide px-10 py-4 rounded-full shadow-[0_10px_40px_rgba(255,183,0,0.4)] hover:bg-[#ffc733] hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(255,183,0,0.5)] transition-all duration-300"
          >
            RESERVE MY SLOT FOR ₱4,886
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section2Checklist;
