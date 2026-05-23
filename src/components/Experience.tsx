import e1 from "@/assets/experience-1.jpg";
import e2 from "@/assets/experience-2.jpg";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-40">
      <div className="mx-auto max-w-[1480px] px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 lg:pt-32">
            <p className="eyebrow"><span className="rule-gold mr-4" /> The Experience</p>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
              Light. Stone.<br />Olive. <em style={{ color: "var(--gold)" }}>Silence.</em>
            </h2>
            <p className="mt-10 max-w-md text-[15px] leading-[1.9] text-[var(--ink)]/65">
              Beyond square footage and skyline views — a vocabulary of materials,
              proportion, and atmosphere that defines how a true residence should feel.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7 overflow-hidden">
                <img src={e1} alt="Arched window over olive grove" loading="lazy" className="h-[560px] w-full object-cover img-luxe" />
              </div>
              <div className="col-span-5 mt-24 space-y-6">
                <div className="overflow-hidden">
                  <img src={e2} alt="Private spa" loading="lazy" className="h-[360px] w-full object-cover img-luxe" />
                </div>
                <div className="px-2">
                  <div className="font-display text-3xl italic" style={{ color: "var(--forest)" }}>"</div>
                  <p className="text-[13px] leading-[1.8] text-[var(--ink)]/70">
                    A residence is not measured in rooms, but in the moments it gives back to its owner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-32 grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: "color-mix(in oklab, var(--ink) 12%, transparent)" }}>
          {[
            { n: "01", t: "Architecture", d: "Signed projects, museum-grade detailing." },
            { n: "02", t: "Provenance", d: "Verified title, lineage, and conservation." },
            { n: "03", t: "Wellness", d: "Private spas, hydrotherapy, longevity studios." },
            { n: "04", t: "Discretion", d: "Off-market introductions, NDA representation." },
          ].map((p) => (
            <div key={p.n} className="group bg-[var(--background)] p-10 transition-colors duration-700 hover:bg-[var(--beige)]">
              <div className="text-[10px] tracking-[0.4em] text-[var(--gold)]">{p.n}</div>
              <div className="mt-6 font-display text-3xl">{p.t}</div>
              <p className="mt-4 text-[13px] leading-[1.8] text-[var(--ink)]/60">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
