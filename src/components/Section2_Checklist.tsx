import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "./icons";
import CTAButton from "./CTAButton";

const items = [
  { biz: "You run a food & beverage business", rest: "and you want to build your own POS-connected system with inventory, sales, orders, and reporting visibility" },
  { biz: "You run an e-commerce business", rest: "and you want to connect your warehouse, orders, fulfillment, logistics, inventory, and accounting into one clear system" },
  { biz: "You run a service-based business", rest: "and you need a better way to manage projects, client delivery, team tasks, billing, and progress monitoring" },
  { biz: "You run an agency or consultancy", rest: "and you want a system for lead tracking, onboarding, approvals, delivery, reports, and renewals" },
  { biz: "You run a construction business", rest: "and you need to monitor materials, manpower, project progress, billing, approvals, and site updates in one place" },
  { biz: "You run a retail, distribution, or franchise business", rest: "and you want visibility over stocks, collections, branch performance, product movement, and operations" },
  { biz: "You run an accounting, finance, admin, or HR-heavy business", rest: "and you want your own internal system for records, approvals, workflows, employee access, and reporting" },
  { biz: "Or you're simply a business owner who wants to stop depending on spreadsheets, scattered tools, and manual monitoring", rest: "just to understand what's happening in the business", catchAll: true },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#06070e" }}>
      <div ref={ref} className="container max-w-[1000px]">
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
              <CheckCircle className="shrink-0 mt-0.5 w-4 h-4" />
              <p className="font-body text-sm leading-relaxed">
                <span className="text-foreground font-medium">{item.biz}</span>{" "}
                <span className="text-muted-foreground">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[680px] mx-auto text-center pt-3 pb-10">
          <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-white">
            If you want{" "}
            <span className="font-bold" style={{ color: "#fbbd23" }}>one internal system</span>{" "}
            that truly matches how your business runs —{" "}
            <span className="font-bold" style={{ color: "#fbbd23" }}>this is for you</span>.{" "}
            No developer or outsourced team will ever understand your business logic faster than{" "}
            <span className="font-bold text-white">you, the owner</span>.{" "}
            And now with{" "}
            <span className="font-bold" style={{ color: "#fbbd23" }}>AI</span>,{" "}
            you no longer need to spend{" "}
            <span className="font-bold" style={{ color: "#fbbd23" }}>₱500,000+</span>{" "}
            or{" "}
            <span className="font-bold" style={{ color: "#fbbd23" }}>wait months</span>{" "}
            to build it.
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
