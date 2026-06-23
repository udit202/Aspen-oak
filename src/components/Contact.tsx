export function Contact() {
  return (
    <section id="contact" className="relative py-40" style={{ background: "var(--beige)" }}>
      <div className="mx-auto max-w-[1480px] px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow"><span className="rule-gold mr-4" /> Private Consultation</p>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.0]">
              Begin a quiet<br />
              <em style={{ color: "var(--gold)" }}>conversation.</em>
            </h2>
            <p className="mt-10 max-w-md text-[15px] leading-[1.9] text-[var(--ink)]/70">
              All inquiries are received personally by a founding principal and answered within 24 hours.
              Your details remain entirely confidential.
            </p>

            <div className="mt-16 space-y-6 text-[13px] tracking-[0.15em] uppercase">
              <div>
                <div className="text-[10px] text-[var(--ink)]/45 tracking-[0.4em]">Noida · Greater Noida</div>
                <div className="mt-2">Yamuna expressway</div>
              </div>
              <div>
                <div className="text-[10px] text-[var(--ink)]/45 tracking-[0.4em]">Contact Number</div>
                <div className="mt-2">+91 9560044930</div>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 space-y-10" onSubmit={(e) => e.preventDefault()}>
            {[
              { l: "Your name", t: "text" },
              { l: "Email address", t: "email" },
              { l: "Region of interest", t: "text" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--ink)]/55">{f.l}</span>
                <input
                  type={f.t}
                  className="mt-3 w-full border-b border-[var(--ink)]/20 bg-transparent py-4 font-display text-2xl outline-none transition-colors focus:border-[var(--gold)]"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--ink)]/55">A note (optional)</span>
              <textarea
                rows={3}
                className="mt-3 w-full resize-none border-b border-[var(--ink)]/20 bg-transparent py-4 text-[15px] leading-[1.7] outline-none transition-colors focus:border-[var(--gold)]"
              />
            </label>
            <button type="submit" className="btn-gold">
              <span>Request consultation</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
