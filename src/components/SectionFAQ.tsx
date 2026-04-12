import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    num: "01",
    question: "Is this really for non-technical business owners?",
    answer: "Yes — that's exactly who it's built for. You don't need to know how to code, build apps, or understand technical jargon. You bring the business knowledge, and we teach you how to use AI and no-code tools to translate that into a real working system. If you can describe how your business works, you can build this."
  },
  {
    num: "02",
    question: "What if I don't have time for live sessions?",
    answer: "Live sessions run 3 times a week (Mon/Wed/Fri) for 2 weeks — that's 6 sessions total. Each session is 2 hours. If you miss one, every session is recorded and you get lifetime access to the replays. Many students rewatch sessions while implementing on their own time."
  },
  {
    num: "03",
    question: "What kind of system will I actually build?",
    answer: "Your own internal business system — tailored to your operations. This could include dashboards, workflows, forms, role-based access, employee logins, reporting views, and approval flows. The exact system depends on your business, but every student walks away with a working build (not a tutorial, not a template)."
  },
  {
    num: "04",
    question: "Do I need to buy any software or tools?",
    answer: "No — most of the tools we use are free or have generous free tiers. We'll guide you through the no-code stack and show you exactly which tools to use for which business type. The bootcamp price covers everything you need to learn and build."
  },
  {
    num: "05",
    question: "What if I miss a session?",
    answer: "Every session is recorded and uploaded to your private replay vault within 24 hours. You'll have lifetime access to rewatch anytime. We also recommend joining live whenever possible because you can ask questions and get real-time help."
  },
  {
    num: "06",
    question: "How is this different from free YouTube tutorials?",
    answer: "YouTube teaches you tools. This bootcamp teaches you how to build a system around your specific business. You'll learn the operator's framework — how to map workflows, design system logic, and use AI as your co-pilot — not just how to use a no-code app. Plus, you get live guidance, a structured curriculum, and bonus resources."
  },
  {
    num: "07",
    question: "What if I'm not happy with the bootcamp?",
    answer: "We offer a 7-day money-back guarantee. If within 7 days of your first session you feel the bootcamp isn't for you, send us one email and we'll refund every peso. No forms, no questions, no hard feelings."
  },
  {
    num: "08",
    question: "When does the next cohort start?",
    answer: "The next cohort starts soon — and we limit it to 100 students per cohort to keep the live sessions intimate and high-quality. Once those slots fill, the next cohort won't be until later. Reserving your slot now locks in the founding cohort price."
  },
];

const SectionFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal(0.05);
  const { ref: supportRef, visible: supportVisible } = useScrollReveal(0.1);

  return (
    <section
      id="faq"
      className="py-20 px-6"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "radial-gradient(ellipse at center, rgba(255,183,0,0.03), transparent 60%)",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-3 py-1 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-[#ffb700] animate-pulse" />
            <span className="text-[#ffb700] text-[10px] uppercase tracking-[0.25em] font-semibold">Common Questions</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3">
            Got Questions? <span className="text-[#ffb700]">We Got Answers.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before joining the cohort.
          </p>
        </div>

        {/* Accordion */}
        <div ref={ref} className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${
                  isOpen
                    ? "bg-[#13131A] border border-[#ffb700]/40 shadow-[0_8px_30px_rgba(255,183,0,0.05)]"
                    : "bg-[#13131A] border border-white/[0.06] hover:border-[#ffb700]/30"
                }`}
                style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-5 p-4 text-left cursor-pointer"
                >
                  <div className="flex-1 flex items-start">
                    <span className="text-[#ffb700] text-[11px] font-mono font-bold mr-3 mt-0.5">{faq.num}</span>
                    <span className="text-sm md:text-base font-semibold text-white leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#ffb700] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-5 pb-5 pl-12 border-t border-white/[0.04] pt-4 mt-1">
                    <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Block */}
        <div
          ref={supportRef}
          className={`mt-12 max-w-2xl mx-auto transition-all duration-700 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="bg-gradient-to-br from-[#13131A] via-[#1A1A22] to-[#13131A] border border-[#ffb700]/20 rounded-2xl p-6 text-center">
            <MessageCircle className="w-8 h-8 text-[#ffb700] mx-auto mb-3" />
            <p className="text-base font-bold text-white mb-2">Still have a question?</p>
            <p className="text-sm text-gray-400 mb-4">Send us a message and we'll get back to you within 24 hours.</p>
            <button
              onClick={() => { window.location.href = "mailto:hello@opsai.ph"; }}
              className="inline-flex items-center gap-2 bg-[#ffb700]/10 hover:bg-[#ffb700]/20 border border-[#ffb700]/40 px-5 py-2.5 rounded-full text-[#ffb700] text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
            >
              Message Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
