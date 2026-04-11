import { useScrollReveal } from "@/hooks/useScrollReveal";

const pills = [
  "Google Sheets",
  "Messenger Group Chats",
  "Manual follow-ups",
  "Disconnected Tools",
  "Delayed reports",
];

const Section1Problem = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20">
      <div ref={ref} className="container max-w-[900px] text-center">
        <p
          className={`text-muted-foreground font-body text-lg mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          If your business is still running on
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 mb-6">
          {pills.map((pill, i) => (
            <span
              key={i}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-body font-medium border transition-all duration-500 bg-destructive/10 border-destructive/30 text-destructive ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {pill}
            </span>
          ))}
        </div>
        <p
          className={`text-foreground font-body font-medium text-lg mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
        >
          …then your business is not "organized enough."
        </p>
        <p
          className={`text-destructive font-heading font-semibold text-xl md:text-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "750ms" }}
        >
          It is one problem away from chaos.
        </p>
      </div>
    </section>
  );
};

export default Section1Problem;
