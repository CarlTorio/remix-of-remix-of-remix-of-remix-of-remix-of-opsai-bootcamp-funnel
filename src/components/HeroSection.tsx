const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import CTAButton from "./CTAButton";
import SectionLabel from "./SectionLabel";

const HeroSection = () => (
  <section className="relative flex flex-col items-center overflow-hidden bg-background">
    {/* Image area - upper portion */}
    <div className="relative w-full">
      <div className="relative w-full">
        <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>
    </div>
    {/* Text content - below image */}
    <div className="relative z-10 container text-center -mt-16 md:-mt-24 pb-16 md:pb-24">
      
      <h1 className="font-heading font-extrabold text-[26px] md:text-[44px] leading-[1.1] mb-6 max-w-4xl mx-auto">
        Build Your Own <span className="text-accent">Internal Business System</span> with{" "}
        <span className="text-secondary">AI</span> in Less Than <span className="text-accent">2 Weeks</span>
      </h1>
      <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        The only bootcamp designed for Filipino SME owners who want to stop firefighting and start building
        a business that runs like a machine.
      </p>
      <CTAButton>Enroll Now — Limited Slots</CTAButton>
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Live Cohort</span>
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> 6-Week Program</span>
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Lifetime Access</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
