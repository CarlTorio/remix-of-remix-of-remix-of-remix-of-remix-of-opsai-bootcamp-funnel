const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/sign/Bootcamp%20Funnel/Hero%20Section%20Original.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzdlOGIxNi02N2VjLTRlZmItYjRkZi1lYzk4MmI5NmQwNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCb290Y2FtcCBGdW5uZWwvSGVybyBTZWN0aW9uIE9yaWdpbmFsLnBuZyIsImlhdCI6MTc3NTc0ODUwNSwiZXhwIjo0OTI5MzQ4NTA1fQ.JssXUT8vbyYNM2Ax4Zh7AFY98ItQPTi92TtotVbYMuc";
import CTAButton from "./CTAButton";
import SectionLabel from "./SectionLabel";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
    <div className="relative z-10 container text-center py-20 md:py-32">
      <SectionLabel>OpsAI PH Presents</SectionLabel>
      <h1 className="font-heading font-extrabold text-[32px] md:text-[56px] leading-[1.1] mb-6 max-w-4xl mx-auto">
        Build <span className="text-accent">Systems</span> That Scale Your Business —{" "}
        <span className="text-secondary">Without Burning Out</span>
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
