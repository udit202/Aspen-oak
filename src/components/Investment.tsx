export function Investment() {
  return (
    <section id="investment" className="relative overflow-hidden py-40 text-[var(--warm-white)]" style={{ background: "var(--ink)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0%, transparent 40%)",
      }} />

      <div className="relative mx-auto max-w-[1480px] px-8">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="rule-gold mr-4" /> Investment & Trust</p>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
            A quieter measure of <em style={{ color: "var(--gold)" }}>wealth.</em>
          </h2>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-20 lg:grid-cols-4">
          {[
            { v: "$4.2B", l: "Lifetime transaction volume" },
            { v: "98.4%", l: "Average list-to-sale ratio" },
            { v: "37", l: "Sovereign & family-office clients" },
            { v: "11", l: "Countries of active representation" },
          ].map((s, i) => (
            <div key={s.l} className="border-l border-[color-mix(in_oklab,var(--gold)_30%,transparent)] pl-8">
              <div className="text-[10px] tracking-[0.4em] text-[var(--gold)]">0{i + 1}</div>
              <div className="mt-6 font-display text-6xl">{s.v}</div>
              <div className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/55 max-w-[180px]">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-32 hairline-gold overflow-hidden pt-10">
          <div className="flex animate-marquee whitespace-nowrap text-[10px] tracking-[0.5em] uppercase text-white/40">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex shrink-0 items-center gap-16 pr-16">
                {["Architectural Digest", "Forbes Global Properties", "Robb Report", "Financial Times", "Monocle", "Wallpaper*"].map((n) => (
                  <span key={n} className="flex items-center gap-16">
                    {n}
                    <span style={{ color: "var(--gold)" }}>◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
