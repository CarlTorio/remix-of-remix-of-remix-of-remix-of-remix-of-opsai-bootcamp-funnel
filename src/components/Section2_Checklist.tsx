import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, ArrowRight } from "lucide-react";

const items = [
  { tag: "FOOD & BEVERAGE", biz: "You run a food & beverage business", rest: "and you want to build your own POS-connected system with inventory, sales, orders, and reporting visibility" },
  { tag: "E-COMMERCE", biz: "You run an e-commerce business", rest: "and you want to connect your warehouse, orders, fulfillment, logistics, inventory, and accounting into one clear system" },
  { tag: "SERVICE-BASED", biz: "You run a service-based business", rest: "and you need a better way to manage projects, client delivery, team tasks, billing, and progress monitoring" },
  { tag: "AGENCY / CONSULTANCY", biz: "You run an agency or consultancy", rest: "and you want a system for lead tracking, onboarding, approvals, delivery, reports, and renewals" },
  { tag: "CONSTRUCTION", biz: "You run a construction business", rest: "and you need to monitor materials, manpower, project progress, billing, approvals, and site updates in one place" },
  { tag: "RETAIL / DISTRIBUTION / FRANCHISE", biz: "You run a retail, distribution, or franchise business", rest: "and you want visibility over stocks, collections, branch performance, product movement, and operations" },
  { tag: "FINANCE / HR / ADMIN", biz: "You run an accounting, finance, admin, or HR-heavy business", rest: "and you want your own internal system for records, approvals, workflows, employee access, and reporting" },
  { tag: "OR SIMPLY...", biz: "Or you're simply a business owner", rest: "who wants to stop depending on spreadsheets, scattered tools, and manual monitoring just to understand what's happening in the business", catchAll: true },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="py-16 md:py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,183,0,0.04),transparent_60%)] pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        {/* Bridge Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Divider */}
          <div className="w-12 h-px bg-[#ffb700]/40 mx-auto mb-6" />

          {/* Bridge line */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
            This is exactly the problem the <span className="text-[#ffb700]">SME Systems Bootcamp</span> was built to solve.
          </p>

          {/* Eyebrow pill */}
          <div className="mt-10 mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#ffb700] rounded-full animate-pulse" />
              <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">FIND YOUR INDUSTRY</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            This Is For You If…
          </h2>

          {/* Subhead */}
          <p className="text-base text-gray-400">Check the one that sounds like you.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17171F] hover:border-[#ffb700]/40 ${
                item.catchAll
                  ? "bg-gradient-to-br from-[#ffb700]/10 via-[#13131A] to-[#13131A] border border-[#ffb700]/35 shadow-[0_0_40px_rgba(255,183,0,0.06)]"
                  : "bg-[#13131A] border border-white/[0.06]"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`${item.tag}: ${item.biz}`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* Check icon */}
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-105 group-hover:bg-[#ffb700]/20 group-hover:border-[#ffb700]/50 ${
                  item.catchAll ? "bg-[#ffb700]/20 border-[#ffb700]/40" : "bg-[#ffb700]/10 border-[#ffb700]/25"
                }`}>
                  <Check className="w-5 h-5 text-[#ffb700]" strokeWidth={2.5} />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col gap-1.5 md:gap-2">
                  <span className="text-[#ffb700] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-0.5">{item.tag}</span>
                  <h3 className="text-white text-[15px] md:text-base font-bold leading-snug">{item.biz}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1 md:mt-1.5">{item.rest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-8">
            If you want <span className="text-[#ffb700]">one internal system</span> that matches your operations, connects your departments, and gives you <span className="text-[#ffb700]">real visibility</span> over your business — <span className="text-[#ffb700]">this is for you</span>.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-5">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than <span className="text-white font-bold">you, the owner</span>.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            And now, with AI, you no longer need to spend <span className="text-[#ffb700] font-semibold">₱500,000+</span> or wait months just to build the first real version of your system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2Checklist;
