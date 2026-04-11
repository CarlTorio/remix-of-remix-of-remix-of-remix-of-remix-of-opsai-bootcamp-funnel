import SectionLabel from "./SectionLabel";
import { XCircle } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Section7Trust = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20">
      <div ref={ref} className={`container max-w-[850px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-10">
          <SectionLabel>THE METHOD</SectionLabel>
          <h2 className="font-heading font-bold text-2xl md:text-4xl">Why Trust This Method?</h2>
        </div>

        <div className="space-y-6 font-body text-base leading-relaxed">
          <p className="text-muted-foreground">
            Because this approach was built from actual internal system creation used in real business operations.
          </p>

          <div className="space-y-2">
            {["Not from theory alone.", "Not from generic software advice.", "Not from surface-level content."].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <XCircle className="shrink-0" />
                <span className="text-muted-foreground line-through">{t}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            This comes from <span className="text-foreground font-semibold">real-world use</span>: building systems for departments, workflows, monitoring, visibility, and internal business operations.
          </p>

          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl p-5 space-y-2">
            <p className="text-muted-foreground">But the biggest reason this works is not because of the trainer alone. It works because the logic already lives with you.</p>
            <p className="text-accent font-semibold">You are the owner.</p>
            <p className="text-foreground font-semibold">You already know the operation better than any outsider.</p>
          </div>

          <p className="text-muted-foreground">
            What most owners lack is not understanding. What they lack is <span className="text-accent font-bold">translation</span>: how to turn <span className="text-foreground font-semibold">business logic into software logic</span>. That's what you'll learn here.
          </p>

          <p className="text-muted-foreground">
            And because AI now makes that translation dramatically easier, cheaper, and faster… something that used to require a tech team is now <span className="text-foreground font-semibold">finally possible for non-technical business owners</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7Trust;
