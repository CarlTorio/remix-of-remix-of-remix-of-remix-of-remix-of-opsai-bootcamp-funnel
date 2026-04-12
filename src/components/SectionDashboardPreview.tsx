const SectionDashboardPreview = () => (
  <section
    className="w-full py-24 px-6 mt-12 relative"
    style={{
      background: "#0A0A0F",
      backgroundImage: "radial-gradient(ellipse at top, rgba(255,183,0,0.05), transparent 60%)",
    }}
  >
    <div className="max-w-5xl mx-auto text-center">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 bg-[#ffb700]/10 border border-[#ffb700]/30 px-4 py-1.5 rounded-full mb-5">
        <span className="w-1.5 h-1.5 bg-[#ffb700] rounded-full animate-pulse" />
        <span className="text-[#ffb700] text-xs uppercase tracking-[0.25em] font-semibold">
          SEE WHAT YOU CAN BUILD
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
        Real Systems, <span className="text-[#ffb700]">Built By Owners</span> Like You
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Click through 4 sample dashboards built inside the bootcamp. This is the kind of system you'll build yourself — no developers, no{" "}
        <span className="text-[#ffb700] font-semibold">₱500,000+</span> software.
      </p>

      {/* Dashboard Frame */}
      <div className="max-w-5xl mx-auto relative rounded-3xl p-2 md:p-3 bg-gradient-to-b from-[#1a1a24] to-[#0f0f16] border border-[#ffb700]/20 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(255,183,0,0.08)]">
        <div className="rounded-2xl bg-[#F8FAFC] min-h-[600px] flex items-center justify-center">
          <span className="text-slate-400 text-sm">Dashboard preview loading...</span>
        </div>
      </div>
    </div>
  </section>
);

export default SectionDashboardPreview;
