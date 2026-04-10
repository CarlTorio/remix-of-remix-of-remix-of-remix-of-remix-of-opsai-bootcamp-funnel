const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import CTAButton from "./CTAButton";

const problems = [
  { num: '01', label: 'Problem #1', title: 'No System. Just Chaos.', desc: 'You are doing everything manually. No tracking. No process. One missed follow-up costs you a sale.', bg: '#7B0000' },
  { num: '02', label: 'Problem #2', title: 'You Rely on Memory and Messenger.', desc: 'Leads fall through the cracks. Follow-ups are forgotten. Your inbox is your CRM and it is failing you.', bg: '#8B0000' },
  { num: '03', label: 'Problem #3', title: 'Your Team Has No Direction.', desc: 'Everyone is doing something. But nobody knows what everyone else is doing. Meetings fix nothing. Problems keep repeating.', bg: '#6B0000' },
  { num: '04', label: 'Problem #4', title: 'You Cannot Scale What You Cannot See.', desc: 'No dashboards. No reports. No real-time data. You make decisions based on gut not numbers.', bg: '#9B1111' },
  { num: '05', label: 'Problem #5', title: 'You Are the Bottleneck.', desc: 'Every decision needs you. Every problem lands on your desk. You built a business that cannot run without you.', bg: '#5A0000' },
];

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center overflow-hidden bg-background">
        {/* Image area */}
        <div className="relative w-full">
          <div className="relative w-full">
            <img src={heroBg} alt="" className="w-full h-auto" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
          </div>
        </div>
        {/* Text content */}
        <div className="relative z-10 container text-center -mt-16 md:-mt-24 pb-16 md:pb-24">
          <h1 className="font-heading font-extrabold text-[26px] md:text-[44px] leading-[1.1] mb-3 max-w-4xl mx-auto">
            Build Your Own <span className="text-accent">Internal Business System</span> with{" "}
            <span style={{ color: "#fbbd23" }}>A.I.</span> in Less Than <span style={{ color: "#fbbd23" }}>2 Weeks</span>
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Without Hiring Developers, Without Coding,<br />and Without Spending ₱500,000+ on Custom Software.
          </p>
          <CTAButton>Enroll Now — Limited Slots</CTAButton>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Live Cohort</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> 6-Week Program</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success inline-block" /> Lifetime Access</span>
          </div>
        </div>
      </section>

      {/* Problems We Solve - CSS Sticky Stack */}
      <section style={{ background: '#1A0000', width: '100%', padding: '80px 20px', boxSizing: 'border-box' as const }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'white', textAlign: 'center' as const, marginBottom: '48px', letterSpacing: '-0.02em' }}>
          Problems We Solve
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' as const }}>
          {problems.map((item, i) => (
            <div key={i} style={{ position: 'sticky' as const, top: `${i * 20}px`, background: item.bg, borderRadius: '28px', padding: 'clamp(1.5rem, 3vw, 3rem)', marginBottom: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'row' as const, justifyContent: 'space-between', alignItems: 'center', minHeight: 'clamp(140px, 20vw, 200px)', boxSizing: 'border-box' as const, zIndex: i + 1, transition: 'transform 0.1s ease' }}>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px', maxWidth: '65%', position: 'relative' as const, zIndex: 2 }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' as const }}>{item.label}</span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', color: 'white', margin: 0, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'rgba(255,255,255,0.06)', position: 'absolute' as const, right: 'clamp(1rem, 3vw, 2.5rem)', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' as const, userSelect: 'none' as const, lineHeight: 1, zIndex: 1 }}>{item.num}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;