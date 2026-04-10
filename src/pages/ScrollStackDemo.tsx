import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

const cards = [
  { title: 'Creative Design', desc: 'Beautiful interfaces that captivate users.', bg: '#5BA4D9' },
  { title: 'Bold Ideas', desc: 'Innovative solutions for modern problems.', bg: '#FF6B6B' },
  { title: 'Premium Quality', desc: 'Crafted with attention to every detail.', bg: '#FFD700' },
  { title: 'Dark Elegance', desc: 'Sophisticated and sleek experiences.', bg: '#1F2937' },
  { title: 'Sky High', desc: 'Reaching new heights of excellence.', bg: '#87CEEB' },
];

const ScrollStackDemo = () => {
  return (
    <div style={{ height: '100vh', background: '#0F172A', fontFamily: 'Montserrat, sans-serif' }}>
      <ScrollStack
        useWindowScroll={false}
        itemDistance={500}
        itemScale={0.04}
        itemStackDistance={25}
        rotationAmount={0}
        blurAmount={2}
      >
        {cards.map((card, i) => (
          <ScrollStackItem key={i} style={{ background: card.bg }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, margin: 0 }}>
              {card.title}
            </h2>
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginTop: '1rem' }}>
              {card.desc}
            </p>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default ScrollStackDemo;
