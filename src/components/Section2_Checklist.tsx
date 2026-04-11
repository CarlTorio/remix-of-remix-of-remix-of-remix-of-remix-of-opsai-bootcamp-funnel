import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import { UtensilsCrossed, ShoppingCart, Briefcase, Users, HardHat, Store, FileSpreadsheet, LayoutDashboard, type LucideIcon } from "lucide-react";

const items: { biz: string; rest: string; catchAll?: boolean; icon: LucideIcon }[] = [
  { biz: "You run a food & beverage business", rest: "and you want to build your own POS-connected system with inventory, sales, orders, and reporting visibility", icon: UtensilsCrossed },
  { biz: "You run an e-commerce business", rest: "and you want to connect your warehouse, orders, fulfillment, logistics, inventory, and accounting into one clear system", icon: ShoppingCart },
  { biz: "You run a service-based business", rest: "and you need a better way to manage projects, client delivery, team tasks, billing, and progress monitoring", icon: Briefcase },
  { biz: "You run an agency or consultancy", rest: "and you want a system for lead tracking, onboarding, approvals, delivery, reports, and renewals", icon: Users },
  { biz: "You run a construction business", rest: "and you need to monitor materials, manpower, project progress, billing, approvals, and site updates in one place", icon: HardHat },
  { biz: "You run a retail, distribution, or franchise business", rest: "and you want visibility over stocks, collections, branch performance, product movement, and operations", icon: Store },
  { biz: "You run an accounting, finance, admin, or HR-heavy business", rest: "and you want your own internal system for records, approvals, workflows, employee access, and reporting", icon: FileSpreadsheet },
  { biz: "Or you're simply a business owner who wants to stop depending on spreadsheets, scattered tools, and manual monitoring", rest: "just to understand what's happening in the business", catchAll: true, icon: LayoutDashboard },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#06070e" }}>
      {/* Yellow/amber gradient glow below cards */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: "50%",
          width: "900px",
          height: "900px",
          background: "radial-gradient(ellipse at center, rgba(251,189,35,0.25) 0%, rgba(233,195,7,0.15) 25%, rgba(251,189,35,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute left-1/3 -translate-x-1/2 pointer-events-none"
        style={{
          top: "45%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute left-2/3 -translate-x-1/2 pointer-events-none"
        style={{
          top: "48%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div ref={ref} className="container max-w-[1000px] relative z-10">
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-10">
          This is for you if…
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-white/[0.04] backdrop-blur-md rounded-xl p-3.5 border flex items-start gap-3 transition-all duration-500 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(251,189,35,0.15)] ${item.catchAll ? "border-accent/30 shadow-[0_0_15px_rgba(251,189,35,0.1)]" : "border-white/[0.08]"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <item.icon className="shrink-0 mt-0.5 w-5 h-5 text-secondary" />
              <p className="font-body text-sm leading-relaxed">
                <span className="text-foreground font-medium">{item.biz}</span>{" "}
                <span className="text-muted-foreground">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[850px] mx-auto text-center space-y-4 mb-10">
          <p className="font-heading font-bold text-3xl md:text-4xl leading-relaxed text-secondary">
            If you want one internal system that matches your operations, connects your departments, and gives you real visibility over your business this is for you.
          </p>
          <p className="font-body text-base leading-relaxed text-primary-foreground">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than you, the owner. And now, with AI, you no longer need to spend <span className="text-accent">₱500,000+</span> or wait months just to build the first real version of your system.
          </p>
        </div>

        <div className="text-center">
          <CTAButton href="#pricing">RESERVE MY SLOT FOR ₱4,886</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Section2Checklist;
