import story from "@/assets/About.jpeg";

export function Story() {
  return (
    <section id="about" className="relative py-40">
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-16 px-8 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <p className="eyebrow"><span className="rule-gold mr-4" /> The Philosophy</p>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
            We do not<br />
            <em className="not-italic" style={{ color: "var(--gold)" }}>sell</em> homes.<br />
            We compose<br />a way of living.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="overflow-hidden">
            <img src={story} alt="Editorial interior architecture" loading="lazy" width={1280} height={1600} className="h-[680px] w-full object-cover img-luxe" />
          </div>
          <div className="mt-12 space-y-8 text-[15px] leading-[1.95] text-[color-mix(in_oklab,var(--ink)_75%,transparent)]">
            <p>
              Founded on a single conviction — that architecture, when given room
              to breathe, becomes a quiet luxury — Aspen Oak represents the rarest
              residences across Noida .
            </p>
            <p>
              Each property in our portfolio is hand-selected. Each client, personally
              known. We move slowly, on purpose.
            </p>
            <div className="hairline-gold pt-8">
              <div className="font-display text-2xl italic">— Founder of Aspen Oak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
