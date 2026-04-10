const heroBg = "https://fhgovsymhevqsjtxhiui.supabase.co/storage/v1/object/public/Bootcamp%20Funnel/Hero%20Section%20Original%20V5.png";
import CTAButton from "./CTAButton";
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const problems = [
  { num: '01', label: 'Problem #1', title: 'No System. Just Chaos.', desc: 'You are doing everything manually.\nNo tracking. No process.\nOne missed follow-up costs you a sale.', bg: '#7B0000' },
  { num: '02', label: 'Problem #2', title: 'You Rely on Memory and Messenger.', desc: 'Leads fall through the cracks.\nFollow-ups are forgotten.\nYour inbox is your CRM and it is failing you.', bg: '#8B0000' },
  { num: '03', label: 'Problem #3', title: 'Your Team Has No Direction.', desc: 'Everyone is doing something.\nBut nobody knows what everyone else is doing.\nMeetings fix nothing. Problems keep repeating.', bg: '#6B0000' },
  { num: '04', label: 'Problem #4', title: 'You Cannot Scale What You Cannot See.', desc: 'No dashboards. No reports.\nNo real-time data.\nYou make decisions based on gut.\nNot numbers.', bg: '#9B1111' },
  { num: '05', label: 'Problem #5', title: 'You Are the Bottleneck.', desc: 'Every decision needs you.\nEvery problem lands on your desk.\nYou built a business that cannot run without you.', bg: '#5A0000' },
];

const HeroSection = () => {
  return (
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

      {/* ScrollStack Problems */}
      <div className="w-full" style={{ padding: '40px 0' }}>
        <ScrollStack
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="50%"
          baseScale={0.85}
          useWindowScroll={true}
        >
          {problems.map((p) => (
            <ScrollStackItem key={p.num}>
              <div
                style={{
                  background: p.bg,
                  borderRadius: '24px',
                  padding: '2rem',
                  height: '14rem',
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 0 40px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '60%', zIndex: 1 }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {p.label}
                  </span>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: 'white', lineHeight: 1.2, margin: 0 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                    {p.desc}
                  </p>
                </div>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '7rem', color: 'rgba(255,255,255,0.07)', position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
                  {p.num}
                </span>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default HeroSection;