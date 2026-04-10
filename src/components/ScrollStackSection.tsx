import ScrollStack, { ScrollStackItem } from './ScrollStack';

const cards = [
  {
    icon: '🙌',
    title: 'Hands-Free Feeding',
    subtitle: 'Put it down. Walk away. Baby feeds alone.',
    bg: '#5BA4D9',
  },
  {
    icon: '💨',
    title: 'Anti-Colic System',
    subtitle: 'No air. No gas. No crying after feeding.',
    bg: '#1F4E79',
  },
  {
    icon: '🔄',
    title: '360° Gravity Ball',
    subtitle: 'Any angle. Any position. Milk always flows.',
    bg: '#FF6B6B',
  },
  {
    icon: '✅',
    title: 'BPA-Free and Safe',
    subtitle: 'Food-grade silicone. Safe from day one.',
    bg: '#1F2937',
  },
  {
    icon: '😴',
    title: 'Better Sleep for Everyone',
    subtitle: 'Baby feeds. You rest. Finally.',
    bg: '#2D6A4F',
  },
];

const ScrollStackSection = () => {
  return (
    <section
      style={{
        background: '#0A0F1E',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ScrollStack
        itemDistance={100}
        itemScale={0.03}
        itemStackDistance={30}
        stackPosition="20%"
        baseScale={0.85}
        useWindowScroll={false}
      >
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '40px',
          }}
        >
          Why Parents Love Bebelle
        </h2>

        {cards.map((card, i) => (
          <ScrollStackItem
            key={i}
            itemClassName=""
          >
            <div
              style={{
                background: card.bg,
                height: '100%',
                width: '100%',
                borderRadius: '40px',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                boxShadow: '0 0 40px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>
                  {card.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                  }}
                >
                  {card.subtitle}
                </p>
              </div>

              <div
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '20px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginLeft: '2rem',
                  background: 'rgba(255,255,255,0.1)',
                }}
              >
                <span style={{ fontSize: '4rem' }}>{card.icon}</span>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default ScrollStackSection;