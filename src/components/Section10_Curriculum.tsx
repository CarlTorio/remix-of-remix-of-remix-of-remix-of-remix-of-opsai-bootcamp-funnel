import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import { CyanArrow } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const week1 = [
  "what is slowing down your operations",
  "what manual tasks need to disappear",
  "what each department should track",
  "what reports and approvals matter most",
  "what data should appear on your dashboard",
  "what kind of system best fits your business",
  "what tools make the most sense for your setup",
];

const week2 = [
  "dashboards",
  "forms and data flow",
  "back-end workflows",
  "approvals",
  "usernames and passwords",
  "employee access",
  "user roles and permissions",
  "process logic",
  "and the first usable structure of your internal web app",
];

const Section10Curriculum = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-section-alt section-divider">
      <div ref={ref} className={`container max-w-[1000px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>INSIDE THE BOOTCAMP</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">What You'll Learn Inside</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Week 1 */}
          <div className="bg-card rounded-2xl border border-accent/30 p-6">
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1 mb-4">WEEK 1</span>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Map Your Business Before You Build</h3>
            <p className="text-muted-foreground font-body text-sm mb-4">Before you build anything, you need clarity. In Week 1, you'll identify:</p>
            <div className="space-y-2 mb-4">
              {week1.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CyanArrow className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-3">
              <p className="font-body text-sm text-muted-foreground">By the end of Week 1, you'll stop guessing. You'll have a clear system blueprint.</p>
            </div>
          </div>

          {/* Week 2 */}
          <div className="bg-card rounded-2xl border border-accent/30 p-6">
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1 mb-4">WEEK 2</span>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Build Your Real Working Business System</h3>
            <p className="text-muted-foreground font-body text-sm mb-4">In Week 2, you'll start building. Using AI, prompts, and guided implementation, you'll learn how to create:</p>
            <div className="space-y-2 mb-4">
              {week2.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CyanArrow className="shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-3">
              <p className="font-body text-sm text-muted-foreground">By the end of Week 2, you can have the first working version of your internal system.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="font-body text-base text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
            Something that used to take months of back-and-forth, expensive custom development, and endless waiting… can now begin taking shape in <span className="text-accent font-semibold" style={{ textShadow: "0 0 15px hsl(223 85% 70% / 0.3)" }}>less than 2 weeks</span>.
          </p>
          <CTAButton href="#pricing">SAVE MY FREE SPOT</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Section10Curriculum;
