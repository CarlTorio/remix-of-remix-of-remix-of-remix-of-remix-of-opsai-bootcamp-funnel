import ScrollStack, { ScrollStackItem } from './ScrollStack';

const problemCards = [
  { num: '01', title: 'No System. Just Chaos.', desc: 'You are doing everything manually. No tracking. No process. One missed follow-up costs you a sale.' },
  { num: '02', title: 'You Rely on Memory and Messenger.', desc: 'Leads fall through the cracks. Follow-ups are forgotten. Your inbox is your CRM and it is failing you.' },
  { num: '03', title: 'Your Team Has No Direction.', desc: 'Everyone is doing something. But nobody knows what everyone else is doing. Meetings fix nothing. Problems keep repeating.' },
  { num: '04', title: 'You Cannot Scale What You Cannot See.', desc: 'No dashboards. No reports. No real-time data. You make decisions based on gut not numbers.' },
  { num: '05', title: 'You Are the Bottleneck.', desc: 'Every decision needs you. Every problem lands on your desk. You built a business that cannot run without you.' },
];

const ScrollStackSection = () => (
  <section style={{ background: '#1A0000', width: '100%', padding: '80px 0' }}>
    <h2 style={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 900,
      fontSize: '3rem',
      color: 'white',
      textAlign: 'center',
      marginBottom: '48px',
      letterSpacing: '-0.02em'
    }}>
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
      {problemCards.map((card) => (
        <ScrollStackItem key={card.num}>
          <div style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', height: '100%',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              gap: '12px', maxWidth: '60%'
            }}>
              <span style={{
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 700, fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>Problem {card.num}</span>
              <h3 style={{
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 900, fontSize: '2rem',
                color: 'white', margin: 0, lineHeight: 1.2
              }}>{card.title}</h3>
              <p style={{
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 400, fontSize: '1rem',
                color: 'rgba(255,255,255,0.75)',
                margin: 0, lineHeight: 1.6
              }}>{card.desc}</p>
            </div>
            <span style={{
              fontFamily: 'Montserrat,sans-serif',
              fontWeight: 900, fontSize: '9rem',
              color: 'rgba(255,255,255,0.07)',
              position: 'absolute', right: '3rem',
              top: '50%', transform: 'translateY(-50%)',
              pointerEvents: 'none', userSelect: 'none',
              lineHeight: 1
            }}>{card.num}</span>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  </section>
);

export default ScrollStackSection;
