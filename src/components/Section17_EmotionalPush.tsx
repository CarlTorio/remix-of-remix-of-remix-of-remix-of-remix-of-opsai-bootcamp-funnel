import { XCircle } from "./icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const negatives = ["more spreadsheets", "more apps", "more follow-ups", "more confusion", "more dependency on the owner", "more backend stress hidden behind front-end sales"];

const Section17EmotionalPush = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 section-divider">
      <div ref={ref} className={`container max-w-[850px] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-6">
          At Some Point, Every Growing Business Has To Decide
        </h2>

        <p className="text-muted-foreground font-body text-base mb-6">You can keep going the way most businesses do:</p>

        <div className="inline-flex flex-col items-start gap-2 mb-8">
          {negatives.map((n, i) => (
            <div key={i} className="flex items-center gap-3">
              <XCircle className="shrink-0" />
              <span className="text-muted-foreground font-body text-base">{n}</span>
            </div>
          ))}
        </div>

        <p className="font-body text-base text-muted-foreground mb-6">
          Or… you can <span className="text-accent font-semibold">finally build the system</span> your business has needed for a long time.
        </p>

        <p className="font-body text-base text-muted-foreground mb-6">
          Because here's the truth: <span className="text-foreground font-semibold">disorder gets more expensive</span> as your business grows.
        </p>

        <p className="font-body text-base text-muted-foreground mb-8">
          That cost shows up as: <span className="text-accent">delays • mistakes • weak accountability • poor visibility • slower growth • and more pressure on you</span>
        </p>

        <p className="font-heading font-bold text-xl md:text-2xl mb-6">
          You don't need more hustle. You need <span className="text-accent" style={{ textShadow: "0 0 20px hsl(217 71% 68% / 0.4)" }}>better infrastructure</span>.
        </p>

        <p className="font-body text-base text-muted-foreground">
          And now, because of AI, you no longer need to wait until you have a huge budget, a huge tech team, or huge patience. <span className="text-foreground font-semibold">You can start now.</span>
        </p>
      </div>
    </section>
  );
};

export default Section17EmotionalPush;
