import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

const items = [
  { img: p1, name: "Villa Maréa", place: "Cap Ferrat, France", price: "€38,500,000", spec: "6 BR · 1,420 m² · Cliffside" },
  { img: p2, name: "The Burj Residence", place: "Downtown Dubai", price: "$22,000,000", spec: "5 BR · 980 m² · Sky Penthouse" },
  { img: p3, name: "Aspen Pinegrove Estate", place: "Aspen, Colorado", price: "$54,000,000", spec: "8 BR · 2,310 m² · Forest" },
];

export function Residences() {
  return (
    <section id="residences" className="relative py-32" style={{ background: "var(--beige)" }}>
      <div className="mx-auto max-w-[1480px] px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow"><span className="rule-gold mr-4" /> Featured Collection</p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]">
              Residences of <em style={{ color: "var(--gold)" }}>consequence.</em>
            </h2>
          </div>
          <a href="#" className="text-[11px] tracking-[0.3em] uppercase text-[var(--ink)]/70 hover:text-[var(--gold)] transition-colors">
            View all 24 residences →
          </a>
        </div>

        <div className="mt-20 space-y-28">
          {items.map((it, i) => (
            <article key={it.name} className={`group grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-8 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={it.img} alt={it.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover img-luxe" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    <span className="glass-dark px-5 py-2 text-[10px] tracking-[0.32em] uppercase text-white">View residence</span>
                    <span className="font-display text-3xl text-white">{it.price}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--ink)]/50">No. 0{i + 1}</div>
                <h3 className="mt-4 font-display text-5xl leading-[1.05]">{it.name}</h3>
                <p className="mt-3 text-[13px] tracking-[0.2em] uppercase text-[var(--gold)]">{it.place}</p>
                <div className="hairline mt-8 pt-6 text-[14px] leading-[1.8] text-[var(--ink)]/65">
                  {it.spec}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
