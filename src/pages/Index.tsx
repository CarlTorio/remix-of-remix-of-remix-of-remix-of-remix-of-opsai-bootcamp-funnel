import HeroSection from "@/components/HeroSection";

import Section2Checklist from "@/components/Section2_Checklist";
import Section3Intro from "@/components/Section3_Intro";
import CircularGallery from "@/components/CircularGallery";
import Section4WhatThisIs from "@/components/Section4_WhatThisIs";
import Section5BeforeAfter from "@/components/Section5_BeforeAfter";
import Section6Relevant from "@/components/Section6_Relevant";
import Section7Trust from "@/components/Section7_Trust";
import Section8Timing from "@/components/Section8_Timing";
import Section9HowItWorks from "@/components/Section9_HowItWorks";
import Section10Curriculum from "@/components/Section10_Curriculum";
import Section11Industries from "@/components/Section11_Industries";
import Section12Smarter from "@/components/Section12_Smarter";
import Section13Pricing from "@/components/Section13_Pricing";
import Section14Bonuses from "@/components/Section14_Bonuses";
import Section15FAQ from "@/components/Section15_FAQ";
import Section16Guarantee from "@/components/Section16_Guarantee";
import Section17EmotionalPush from "@/components/Section17_EmotionalPush";
import Section18FinalCTA from "@/components/Section18_FinalCTA";
import NewFooter from "@/components/NewFooter";

const Index = () => (
  <main>
    <HeroSection />
    
    <Section2Checklist />
    <Section3Intro />
    <section style={{
      width: '100%',
      background: '#060608',
      padding: '20px 0 60px 0',
      marginTop: '-140px'
    }}>
      <div style={{ 
        height: '520px',
        position: 'relative',
        width: '100%'
      }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          items={[
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/1.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/2.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/3.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/4.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/5.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/6.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/7.png', text: '' },
            { image: 'https://prrjyforguhxcouhkzqs.supabase.co/storage/v1/object/public/Video%20-%20Image%20Hosting/8.png', text: '' },
          ]}
        />
      </div>
    </section>
    <Section4WhatThisIs />
    <Section5BeforeAfter />
    <Section6Relevant />
    <Section7Trust />
    <Section8Timing />
    <Section9HowItWorks />
    <Section10Curriculum />
    <Section11Industries />
    <Section12Smarter />
    <Section13Pricing />
    <Section14Bonuses />
    <Section15FAQ />
    <Section16Guarantee />
    <Section17EmotionalPush />
    <Section18FinalCTA />
    <NewFooter />
  </main>
);

export default Index;
