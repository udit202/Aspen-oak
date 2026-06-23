const t = [
  { q: "They didn't show me houses. They listened for two years, then brought me one. It was the right one.", n: "Private Client", r: "Family Office, Noida" },
  { q: "An extraordinary degree of discretion. The transaction closed without a single public note.", n: "H.E. Al-K.", r: "Acquisition, Emirates Hills" },
  { q: "The most considered representation we have encountered in three decades of collecting property.", n: "Anonymous", r: "Repeat Client, Aspen" },
];

export function Testimonials() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-[1480px] px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow"><span className="rule-gold mr-4" /> In Confidence</p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]">
              Voices of our<br /><em style={{ color: "var(--gold)" }}>clientele.</em>
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-3" style={{ background: "color-mix(in oklab, var(--ink) 10%, transparent)" }}>
          {t.map((it, i) => (
            <figure key={i} className="group bg-[var(--background)] p-12 transition-all duration-700 hover:bg-[var(--beige)]">
              <div className="font-display text-7xl leading-none" style={{ color: "var(--gold)" }}>"</div>
              <blockquote className="mt-6 font-display text-2xl leading-[1.4]">{it.q}</blockquote>
              <figcaption className="mt-10 hairline pt-6">
                <div className="text-[12px] tracking-[0.2em] uppercase">{it.n}</div>
                <div className="mt-1 text-[11px] text-[var(--ink)]/55">{it.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
