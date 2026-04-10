import ScrollStack, { ScrollStackItem } from './ScrollStack';

const problems = [
  {
    num: '01',
    label: 'Problem #1',
    title: 'No System. Just Chaos.',
    desc: 'You are doing everything manually.\nNo tracking. No process.\nOne missed follow-up costs you a sale.',
    bg: '#7B0000',
  },
  {
    num: '02',
    label: 'Problem #2',
    title: 'You Rely on Memory and Messenger.',
    desc: 'Leads fall through the cracks.\nFollow-ups are forgotten.\nYour inbox is your CRM and it is failing you.',
    bg: '#8B0000',
  },
  {
    num: '03',
    label: 'Problem #3',
    title: 'Your Team Has No Direction.',
    desc: 'Everyone is doing something.\nBut nobody knows what everyone else is doing.\nMeetings fix nothing. Problems keep repeating.',
    bg: '#6B0000',
  },
  {
    num: '04',
    label: 'Problem #4',
    title: 'You Cannot Scale What You Cannot See.',
    desc: 'No dashboards. No reports.\nNo real-time data.\nYou make decisions based on gut.\nNot numbers.',
    bg: '#9B1111',
  },
  {
    num: '05',
    label: 'Problem #5',
    title: 'You Are the Bottleneck.',
    desc: 'Every decision needs you.\nEvery problem lands on your desk.\nYou built a business that cannot run without you.',
    bg: '#5A0000',
  },
];

const ProblemsSection = () => (
  <section style={{ background: '#1A0000', width: '100%', padding: '80px 0' }}>
    <h2
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 800,
        fontSize: '3rem',
        color: 'white',
        textAlign: 'center',
        marginBottom: '48px',
      }}
    >
      Problems We Solve
    </h2>

    <ScrollStack
      itemDistance={100}
      itemScale={0.03}
      itemStackDistance={30}
      stackPosition="20%"
      baseScale={0.85}
      useWindowScroll={false}
    >
      {problems.map((p) => (
        <ScrollStackItem
          key={p.num}
          itemClassName=""
        >
          <div
            style={{
              background: p.bg,
              borderRadius: '40px',
              padding: '3rem',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '60%', zIndex: 1 }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {p.label}
              </span>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'white',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6,
                  margin: 0,
                  whiteSpace: 'pre-line',
                }}
              >
                {p.desc}
              </p>
            </div>

            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: '9rem',
                color: 'rgba(255,255,255,0.07)',
                position: 'absolute',
                right: '3rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                userSelect: 'none',
                lineHeight: 1,
              }}
            >
              {p.num}
            </span>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  </section>
);

export default ProblemsSection;