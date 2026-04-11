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
  { biz: "Or you're simply a business owner who wants to stop depending on spreadsheets, scattered tools, and manual monitoring", rest: "just to understand what's happening in the business" },
];

const Section2Checklist = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-background">
      <div ref={ref} className="container max-w-[1000px]">
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-10">
          This is for you if…
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-5 flex items-start gap-4 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md bg-white/[0.04] border border-white/[0.08] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-accent/30 hover:shadow-[0_0_30px_rgba(251,189,35,0.08)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <CheckCircle className="shrink-0 mt-0.5" />
              <p className="font-body text-base leading-relaxed">
                <span className="text-foreground font-medium">{item.biz}</span>{" "}
                <span className="text-muted-foreground">{item.rest}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[850px] mx-auto text-center space-y-4 mb-10">
          <p className="text-foreground font-body font-medium text-lg leading-relaxed">
            If you want one internal system that matches your operations, connects your departments, and gives you real visibility over your business — this is for you.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Because no developer, no software company, and no outsourced team will ever understand your business logic faster than you, the owner.
          </p>
          <p className="text-foreground font-body font-medium text-[17px] leading-relaxed">
            And now, with AI, you no longer need to spend <span className="text-accent">₱500,000+</span> or wait months just to build the first real version of your system.
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
