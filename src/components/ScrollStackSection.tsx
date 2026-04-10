const problemCards = [
  { num: '01', label: 'Problem 01', title: 'No System. Just Chaos.', desc: 'You are doing everything manually. No tracking. No process. One missed follow-up costs you a sale.', bg: '#7B0000' },
  { num: '02', label: 'Problem 02', title: 'You Rely on Memory and Messenger.', desc: 'Leads fall through the cracks. Follow-ups are forgotten. Your inbox is your CRM and it is failing you.', bg: '#8B0000' },
  { num: '03', label: 'Problem 03', title: 'Your Team Has No Direction.', desc: 'Everyone is doing something. But nobody knows what everyone else is doing. Meetings fix nothing. Problems keep repeating.', bg: '#6B0000' },
  { num: '04', label: 'Problem 04', title: 'You Cannot Scale What You Cannot See.', desc: 'No dashboards. No reports. No real-time data. You make decisions based on gut not numbers.', bg: '#9B1111' },
  { num: '05', label: 'Problem 05', title: 'You Are the Bottleneck.', desc: 'Every decision needs you. Every problem lands on your desk. You built a business that cannot run without you.', bg: '#5A0000' },
];

const ScrollStackSection = () => (
  <section style={{ background: '#1A0000', width: '100%', padding: '80px 20px', boxSizing: 'border-box' as const }}>
    <h2 style={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      color: 'white',
      textAlign: 'center' as const,
      marginBottom: '48px',
      letterSpacing: '-0.02em'
    }}>
      Problems We Solve
    </h2>
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '24px'
    }}>
      {problemCards.map((item, i) => (
        <div key={i} style={{
          background: item.bg,
          borderRadius: '32px',
          padding: '3rem',
          position: 'relative' as const,
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'row' as const,
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '180px',
          boxSizing: 'border-box' as const
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '10px',
            maxWidth: '65%',
            position: 'relative' as const,
            zIndex: 2
          }}>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const
            }}>{item.label}</span>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: 'white',
              margin: 0,
              lineHeight: 1.2
            }}>{item.title}</h3>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.7)',
              margin: 0,
              lineHeight: 1.6
            }}>{item.desc}</p>
          </div>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 10vw, 9rem)',
            color: 'rgba(255,255,255,0.06)',
            position: 'absolute' as const,
            right: '2.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none' as const,
            userSelect: 'none' as const,
            lineHeight: 1,
            zIndex: 1
          }}>{item.num}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ScrollStackSection;
