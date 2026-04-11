import SectionLabel from "./SectionLabel";
import { CyanCheck, FoodIcon, EcommerceIcon, ServiceIcon, AgencyIcon, ConstructionIcon, RetailIcon, FinanceIcon } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const industries = [
  { icon: FoodIcon, name: "Food & Beverage", desc: "Build a POS-connected system with inventory, sales, orders, and reporting visibility" },
  { icon: EcommerceIcon, name: "E-commerce", desc: "Connect orders, warehouse, fulfillment, logistics, inventory, and accounting flows" },
  { icon: ServiceIcon, name: "Service Businesses", desc: "Organize projects, clients, team tasks, status updates, delivery, and billing" },
  { icon: AgencyIcon, name: "Agencies & Consultancies", desc: "Track leads, onboarding, approvals, delivery, reports, renewals, and client flow" },
  { icon: ConstructionIcon, name: "Construction", desc: "Monitor projects, manpower, materials, site progress, billing, and approvals" },
  { icon: RetailIcon, name: "Retail & Distribution", desc: "See stock, branch movement, collections, sales, operations, and reporting in one place" },
  { icon: FinanceIcon, name: "Accounting, Finance & HR", desc: "Create internal workflow systems, approval flows, records, HRIS-style structures, and visibility dashboards" },
];

const Section11Industries = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20">
      <div ref={ref} className="container max-w-[1100px]">
        <div className="text-center mb-10">
          <SectionLabel>REAL APPLICATION</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl mb-3">
            This Is Not Just <em>'Learning'</em>
          </h2>
          <p className="text-muted-foreground font-body text-base">This is something you can use in actual businesses like:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {industries.slice(0, 6).map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className={`bg-card rounded-2xl border border-border p-5 transition-all duration-500 hover:border-accent/50 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon className="mb-3" />
                <p className="font-heading font-semibold text-foreground text-base mb-2">{ind.name}</p>
                <div className="flex items-start gap-2">
                  <CyanCheck className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{ind.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* 7th card centered */}
        <div className="max-w-[380px] mx-auto mb-10">
          {(() => {
            const ind = industries[6];
            const Icon = ind.icon;
            return (
              <div className={`bg-card rounded-2xl border border-border p-5 transition-all duration-500 hover:border-accent/50 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "560ms" }}>
                <Icon className="mb-3" />
                <p className="font-heading font-semibold text-foreground text-base mb-2">{ind.name}</p>
                <div className="flex items-start gap-2">
                  <CyanCheck className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{ind.desc}</span>
                </div>
              </div>
            );
          })()}
        </div>

        <p className="text-center font-body text-base text-muted-foreground">
          This is why the offer is so strong: you are not buying information — you are buying <span className="text-accent font-semibold" style={{ textShadow: "0 0 15px hsl(217 71% 68% / 0.3)" }}>operational leverage</span>.
        </p>
      </div>
    </section>
  );
};

export default Section11Industries;
