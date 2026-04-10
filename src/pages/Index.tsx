import HeroSection from "@/components/HeroSection";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

import Section2Checklist from "@/components/Section2_Checklist";
import Section3Intro from "@/components/Section3_Intro";
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
        <ScrollStackItem>
          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'100%', position:'relative' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'60%' }}>
              <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Problem 01</span>
              <h3 style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'2rem', color:'white', margin:0, lineHeight:1.2 }}>No System. Just Chaos.</h3>
              <p style={{ fontFamily:'Montserrat,sans-serif', fontWeight:400, fontSize:'1rem', color:'rgba(255,255,255,0.75)', margin:0, lineHeight:1.6 }}>
                You are doing everything manually. No tracking. No process. One missed follow-up costs you a sale.
              </p>
            </div>
            <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'9rem', color:'rgba(255,255,255,0.07)', position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', userSelect:'none', lineHeight:1 }}>01</span>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'100%', position:'relative' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'60%' }}>
              <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Problem 02</span>
              <h3 style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'2rem', color:'white', margin:0, lineHeight:1.2 }}>You Rely on Memory and Messenger.</h3>
              <p style={{ fontFamily:'Montserrat,sans-serif', fontWeight:400, fontSize:'1rem', color:'rgba(255,255,255,0.75)', margin:0, lineHeight:1.6 }}>
                Leads fall through the cracks. Follow-ups are forgotten. Your inbox is your CRM and it is failing you.
              </p>
            </div>
            <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'9rem', color:'rgba(255,255,255,0.07)', position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', userSelect:'none', lineHeight:1 }}>02</span>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'100%', position:'relative' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'60%' }}>
              <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Problem 03</span>
              <h3 style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'2rem', color:'white', margin:0, lineHeight:1.2 }}>Your Team Has No Direction.</h3>
              <p style={{ fontFamily:'Montserrat,sans-serif', fontWeight:400, fontSize:'1rem', color:'rgba(255,255,255,0.75)', margin:0, lineHeight:1.6 }}>
                Everyone is doing something. But nobody knows what everyone else is doing. Meetings fix nothing. Problems keep repeating.
              </p>
            </div>
            <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'9rem', color:'rgba(255,255,255,0.07)', position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', userSelect:'none', lineHeight:1 }}>03</span>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'100%', position:'relative' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'60%' }}>
              <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Problem 04</span>
              <h3 style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'2rem', color:'white', margin:0, lineHeight:1.2 }}>You Cannot Scale What You Cannot See.</h3>
              <p style={{ fontFamily:'Montserrat,sans-serif', fontWeight:400, fontSize:'1rem', color:'rgba(255,255,255,0.75)', margin:0, lineHeight:1.6 }}>
                No dashboards. No reports. No real-time data. You make decisions based on gut not numbers.
              </p>
            </div>
            <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'9rem', color:'rgba(255,255,255,0.07)', position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', userSelect:'none', lineHeight:1 }}>04</span>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'100%', position:'relative' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'60%' }}>
              <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:'0.75rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Problem 05</span>
              <h3 style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'2rem', color:'white', margin:0, lineHeight:1.2 }}>You Are the Bottleneck.</h3>
              <p style={{ fontFamily:'Montserrat,sans-serif', fontWeight:400, fontSize:'1rem', color:'rgba(255,255,255,0.75)', margin:0, lineHeight:1.6 }}>
                Every decision needs you. Every problem lands on your desk. You built a business that cannot run without you.
              </p>
            </div>
            <span style={{ fontFamily:'Montserrat,sans-serif', fontWeight:900, fontSize:'9rem', color:'rgba(255,255,255,0.07)', position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', userSelect:'none', lineHeight:1 }}>05</span>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>

    
    <Section2Checklist />
    <Section3Intro />
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
