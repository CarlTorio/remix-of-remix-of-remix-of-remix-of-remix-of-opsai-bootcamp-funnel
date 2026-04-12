import HeroSection from "@/components/HeroSection";

import Section2Checklist from "@/components/Section2_Checklist";
import Section3Intro from "@/components/Section3_Intro";
import CircularGallery from "@/components/CircularGallery";
import Section4WhatThisIs from "@/components/Section4_WhatThisIs";
import SectionDashboardPreview from "@/components/SectionDashboardPreview";
import Section5BeforeAfter from "@/components/Section5_BeforeAfter";
import SectionWhyThisWorks from "@/components/SectionWhyThisWorks";
import SectionRoadmap from "@/components/SectionRoadmap";
import Section11Industries from "@/components/Section11_Industries";
import SectionAboutCreator from "@/components/SectionAboutCreator";
import SectionOfferZone from "@/components/SectionOfferZone";
import SectionFAQ from "@/components/SectionFAQ";
import SectionFinalCTA from "@/components/SectionFinalCTA";
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
    <SectionDashboardPreview />
    <Section5BeforeAfter />
    <Section11Industries />
    <SectionWhyThisWorks />
    <SectionRoadmap />
    <SectionAboutCreator />
    <SectionOfferZone />
    <SectionFAQ />
    <SectionFinalCTA />
    <NewFooter />
  </main>
);

export default Index;
