import { User, Quote, Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beliefs = [
  "SME owners deserve real systems, not bloated software they can't control.",
  "AI should give business owners back their time, not replace their judgment.",
  "The best business system is the one you can build, change, and own forever.",
];

const SectionAboutCreator = () => {
  const photoReveal = useScrollReveal(0.15);
  const quoteReveal = useScrollReveal(0.15);
  const p1Reveal = useScrollReveal(0.15);
  const p2Reveal = useScrollReveal(0.15);
  const p3Reveal = useScrollReveal(0.15);
  const valuesReveal = useScrollReveal(0.15);
  const ctaReveal = useScrollReveal(0.15);

  return (
    <section
      id="about"
      className="w-full py-20 px-6"
      style={{
        background: "#0A0A0F",
        backgroundImage:
          "radial-gradient(ellipse at right, rgba(255,183,0,0.04), transparent 60%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">
              MEET YOUR INSTRUCTOR
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            The Person <span className="text-[#ffb700]">Building This With You</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Not a guru. Not a course-seller. An operator who built this method out of frustration with how SMEs are being failed by traditional software.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column — Photo */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div
              ref={photoReveal.ref}
              className={`relative rounded-2xl bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/25 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(255,183,0,0.08)] transition-all duration-700 ${photoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[4/5] max-md:aspect-square rounded-xl relative overflow-hidden">
                <img
                  src="https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/mobile%20-%20poster.png"
                  alt="John Carl Torio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name card */}
              <div className="bg-[#0F0F14] border-t border-[#ffb700]/15 px-4 py-3 rounded-b-xl mt-0">
                <p className="text-base font-bold text-white tracking-tight">John Carl Torio</p>
                <p className="text-[11px] text-[#ffb700] font-semibold mt-0.5">
                  Founder, SME Systems Bootcamp
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Filipino Operator", "Systems Builder"].map((pill) => (
                    <span
                      key={pill}
                      className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[9px] text-gray-400 uppercase tracking-wider font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Bio */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Quote */}
            <div
              ref={quoteReveal.ref}
              className={`relative pl-6 mb-2 transition-all duration-700 ${quoteReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <Quote className="absolute -top-2 -left-1 w-8 h-8 text-[#ffb700]/30 rotate-180" />
              <p className="text-base md:text-lg text-white font-semibold italic leading-snug border-l-2 border-[#ffb700]/40 pl-4">
                "I built this because no developer will ever understand your business better than you."
              </p>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <p
                ref={p1Reveal.ref}
                className={`text-sm md:text-base text-gray-300 leading-relaxed transition-all duration-700 ${p1Reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "450ms" }}
              >
                I'm [Founder Name], and I built this bootcamp because I watched too many SME owners burn ₱500,000+ on custom software that didn't fit their business — only to end up still running on spreadsheets a year later.
              </p>
              <p
                ref={p2Reveal.ref}
                className={`text-sm md:text-base text-gray-300 leading-relaxed transition-all duration-700 ${p2Reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "600ms" }}
              >
                I realized the problem wasn't the tools. It was that no outsourced developer would ever understand a business as deeply as the owner who lives in it every day. The owner doesn't need to learn how to code. They need a method to translate what's already in their head into a real, working system.
              </p>
              <p
                ref={p3Reveal.ref}
                className={`text-sm md:text-base text-gray-300 leading-relaxed transition-all duration-700 ${p3Reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "750ms" }}
              >
                So I built a method that puts the building back in your hands — using AI as your technical co-pilot, no-code as your foundation, and{" "}
                <span className="text-[#ffb700] font-semibold">your own business knowledge</span>{" "}
                as the edge no developer can replicate.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#ffb700]/30 mt-4" />

            {/* Values */}
            <div
              ref={valuesReveal.ref}
              className={`flex flex-col gap-3 mt-4 transition-all duration-700 ${valuesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "900ms" }}
            >
              <span className="text-[#ffb700] text-[10px] uppercase tracking-widest font-bold mb-1">
                WHAT I BELIEVE
              </span>
              <div className="flex flex-col gap-2">
                {beliefs.map((belief, i) => (
                  <div key={i} className="flex items-start gap-2.5 group hover:translate-x-1 transition-transform duration-200">
                    <Check className="w-3.5 h-3.5 text-[#ffb700] mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-300 leading-snug">{belief}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaReveal.ref}
          className={`mt-12 max-w-2xl mx-auto text-center transition-all duration-700 ${ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-lg md:text-xl font-bold text-white tracking-tight mb-5">
            This is your invitation to{" "}
            <span className="text-[#ffb700]">build it with me</span>.
          </p>
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-[#ffb700] hover:bg-[#ffc733] text-black font-bold text-sm px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(255,183,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,183,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Join the Next Cohort
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutCreator;
