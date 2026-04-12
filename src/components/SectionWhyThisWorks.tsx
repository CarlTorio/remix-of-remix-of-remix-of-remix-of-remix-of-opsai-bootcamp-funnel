import { Target, Wrench, Zap, Clock, DollarSign, User, Lock, RefreshCw, Check, ArrowRight, Brain } from "lucide-react";
import StarBorder from "./StarBorder";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const whyReason01 = "https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/1111.png";
const whyReason02 = "https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/2222.png";
const whyReason03 = "https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/3333.png";

const reasons = [
  {
    num: "01",
    Icon: Target,
    title: "Why This Is So Relevant To Real SME Owners?",
    body: "This isn't a 'learn tech for fun' offer. It's for business owners who keep saying things like 'ang dami naming tools pero ang gulo pa rin' or 'pag wala ako, bumabagal lahat.' If that sounds familiar, this wasn't built for everyone — it was built for you.",
    objectionLabel: "Sounds like:",
    objection: "Is this really for me?",
    image: whyReason01,
    imagePosition: "right" as const,
  },
  {
    num: "02",
    Icon: Wrench,
    title: "Why Trust This Method?",
    body: "This method wasn't pulled from generic software advice. It comes from real internal systems built for real business operations — workflows, monitoring, departments, visibility. And the reason it actually works isn't the trainer. It's that the business logic already lives with you. AI just makes the translation finally possible.",
    objectionLabel: "Sounds like:",
    objection: "How do I know this works?",
    image: whyReason02,
    imagePosition: "left" as const,
  },
  {
    num: "03",
    Icon: Zap,
    title: "Why This Matters Right Now?",
    body: "A few years ago, building a real internal system meant ₱500K+ on developers and months of waiting. Today, AI changed the game. If you know how your business runs, you can build the first version faster and cheaper than ever. The owners who move on this now will operate better than the ones still stuck in manual mode.",
    objectionLabel: "Sounds like:",
    objection: "I'll figure it out later.",
    image: whyReason03,
    imagePosition: "right" as const,
  },
];
const comparisonRows = [
  { label: "TIMELINE", traditional: "6+ months", ours: "2 weeks", Icon: Clock },
  { label: "COST", traditional: "₱500,000+", ours: "₱4,886", Icon: DollarSign },
  
  { label: "UNDERSTANDING", traditional: "Generic templates", ours: "Your business logic", Icon: Brain },
  { label: "OWNERSHIP", traditional: "Vendor-locked", ours: "Owned forever", Icon: Lock },
  { label: "CHANGES LATER", traditional: "Costs more $$$", ours: "Free, anytime", Icon: RefreshCw },
];

const SectionWhyThisWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="why"
      className="w-full py-16 md:py-20 px-4 md:px-6"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.05), transparent 60%)",
      }}
    >
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              WHY THIS WORKS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            Why This <span className="text-[#ffb700]">Actually Works</span> for Real SME Owners
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            You don't need to know how to code. You need to know your business — which you already do.
          </p>
        </div>

        {/* 3 Reason Cards */}
        <div className="flex flex-col gap-10 md:gap-14 mb-16">
          {reasons.map((r, i) => {
            const isImageRight = r.imagePosition === "right";
            return (
              <div
                key={i}
                className={`flex flex-col ${isImageRight ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-10 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Text Side */}
                <div className="flex-1 w-full">
                  <div className="group relative bg-[#13131A] border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col gap-3 hover:border-[#ffb700]/40 hover:shadow-[0_10px_40px_rgba(255,183,0,0.08)] transition-all duration-300">
                    <span className="absolute top-4 right-4 text-5xl font-bold text-[#ffb700]/15 group-hover:text-[#ffb700]/30 transition-colors font-mono">
                      {r.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#ffb700]/10 border border-[#ffb700]/25 flex items-center justify-center mb-2 group-hover:bg-[#ffb700]/15 transition-colors">
                      <r.Icon className="w-5 h-5 text-[#ffb700]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{r.body}</p>
                    <div className="mt-3 pt-3 border-t border-white/[0.05]">
                      <p className="text-xs text-gray-500 italic">
                        {r.objectionLabel}{" "}
                        <span className="text-[#ffb700]/80 not-italic font-semibold">"{r.objection}"</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full max-w-[300px] md:max-w-[320px]">
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>




        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-bold text-white tracking-tight mb-5">
            This isn't theory. It's <span className="text-[#ffb700]">a different way to build</span>.
          </p>
          <StarBorder
            as="button"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            color="hsl(43, 96%, 56%)"
            speed="5s"
            className="animate-slow-pulse"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary via-[hsl(45,100%,75%)] to-secondary bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite] text-secondary-foreground font-heading font-bold text-sm md:text-lg uppercase px-6 py-3 md:px-10 md:py-4 tracking-wide">
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </span>
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyThisWorks;
