import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, ArrowRight } from "lucide-react";

const items = [
  { tag: "FOOD & BEVERAGE", biz: "You run a food & beverage business", rest: <>and you want to build your own <span className="text-white uppercase">POS-Connected System</span> with <span className="text-white uppercase">Inventory</span>, <span className="text-white uppercase">Sales</span>, <span className="text-white uppercase">Orders</span>, and <span className="text-white uppercase">Reporting</span> visibility</> },
  { tag: "E-COMMERCE", biz: "You run an e-commerce business", rest: <>and you want to connect your <span className="text-white uppercase">Warehouse</span>, <span className="text-white uppercase">Orders</span>, <span className="text-white uppercase">Fulfillment</span>, <span className="text-white uppercase">Logistics</span>, <span className="text-white uppercase">Inventory</span>, and <span className="text-white uppercase">Accounting</span> into one clear system</> },
  { tag: "SERVICE-BASED", biz: "You run a service-based business", rest: <>and you need a better way to manage <span className="text-white uppercase">Projects</span>, <span className="text-white uppercase">Client Delivery</span>, <span className="text-white uppercase">Team Tasks</span>, <span className="text-white uppercase">Billing</span>, and <span className="text-white uppercase">Progress Monitoring</span></> },
  { tag: "AGENCY / CONSULTANCY", biz: "You run an agency or consultancy", rest: <>and you want a system for <span className="text-white uppercase">Lead Tracking</span>, <span className="text-white uppercase">Onboarding</span>, <span className="text-white uppercase">Approvals</span>, <span className="text-white uppercase">Delivery</span>, <span className="text-white uppercase">Reports</span>, and <span className="text-white uppercase">Renewals</span></> },
  { tag: "CONSTRUCTION", biz: "You run a construction business", rest: <>and you need to monitor <span className="text-white uppercase">Materials</span>, <span className="text-white uppercase">Manpower</span>, <span className="text-white uppercase">Project Progress</span>, <span className="text-white uppercase">Billing</span>, <span className="text-white uppercase">Approvals</span>, and <span className="text-white uppercase">Site Updates</span> in one place</> },
  { tag: "RETAIL / DISTRIBUTION / FRANCHISE", biz: "You run a retail, distribution, or franchise business", rest: <>and you want visibility over <span className="text-white uppercase">Stocks</span>, <span className="text-white uppercase">Collections</span>, <span className="text-white uppercase">Branch Performance</span>, <span className="text-white uppercase">Product Movement</span>, and <span className="text-white uppercase">Operations</span></> },
  { tag: "FINANCE / HR / ADMIN", biz: "You run an accounting, finance, admin, or HR-heavy business", rest: <>and you want your own internal system for <span className="text-white uppercase">Records</span>, <span className="text-white uppercase">Approvals</span>, <span className="text-white uppercase">Workflows</span>, <span className="text-white uppercase">Employee Access</span>, and <span className="text-white uppercase">Reporting</span></> },
  { tag: "OR SIMPLY...", biz: "Or you're simply a business owner", rest: <>who wants to stop depending on <span className="text-white uppercase">Spreadsheets</span>, <span className="text-white uppercase">Scattered Tools</span>, and <span className="text-white uppercase">Manual Monitoring</span> just to understand what's happening in the business</>, catchAll: true },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="py-12 md:py-16 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,183,0,0.04),transparent_60%)] pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        {/* Bridge Intro */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          {/* Divider */}
          <div className="w-12 h-px bg-[#ffb700]/40 mx-auto mb-4" />

          {/* Bridge line */}
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
            This is exactly the problem the <span className="text-[#ffb700]">SME Systems Bootcamp</span> was built to solve.
          </p>


          {/* Headline */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 mt-6">
            This Is For You If You're In The Business Of...
          </h2>

          {/* Subhead */}
          <p className="text-base text-gray-400">Check the one that sounds like you.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2.5 mb-8 md:mb-10">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-xl p-3.5 md:p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17171F] hover:border-[#ffb700]/40 ${
                item.catchAll
                  ? "bg-gradient-to-br from-[#ffb700]/10 via-[#13131A] to-[#13131A] border border-[#ffb700]/35 shadow-[0_0_40px_rgba(255,183,0,0.06)]"
                  : "bg-[#13131A] border border-white/[0.06]"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`${item.tag}: ${item.biz}`}
            >
              <div className="flex items-start gap-2.5 md:gap-3">
                {/* Check icon */}
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-105 group-hover:bg-[#ffb700]/20 group-hover:border-[#ffb700]/50 ${
                  item.catchAll ? "bg-[#ffb700]/20 border-[#ffb700]/40" : "bg-[#ffb700]/10 border-[#ffb700]/25"
                }`}>
                  <Check className="w-4 h-4 text-[#ffb700]" strokeWidth={2.5} />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col gap-1 md:gap-1.5">
                  <span className="text-[#ffb700] text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">{item.tag}</span>
                  <h3 className="text-white text-[13px] md:text-sm font-bold leading-snug">{item.biz}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{item.rest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] mb-4">
            If you want <span className="text-[#ffb700]">ONE INTERNAL SYSTEM</span> that matches your operations, connects your departments, and gives you <span className="text-[#ffb700]">real visibility</span> over your business <span className="text-[#ffb700]">this is for you</span>.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-5">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than <span className="text-white font-bold">you, the owner</span>.
          </p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto text-primary-foreground md:text-lg">
            And now, with AI, you no longer need to spend <span className="text-[#ffb700] font-semibold">₱500,000+</span> or wait months just to build the first real version of your system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2Checklist;
