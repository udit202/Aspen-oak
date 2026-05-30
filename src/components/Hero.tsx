export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury modern villa"
          className="h-full w-full object-cover object-center scale-[1.06]"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 pt-32 pb-28 sm:px-10 sm:pt-36 sm:pb-32 lg:px-16">

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_380px] lg:gap-20">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center">

              {/* SMALL LABEL */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-14 bg-[#c8a96b]" />

                <span className="text-[10px] uppercase tracking-[0.45em] text-white/55">
                  Private Residences
                </span>
              </div>

              {/* MAIN TEXT */}
              <h1 className="max-w-[720px] text-[clamp(3.6rem,9vw,8.5rem)] font-light leading-[0.88] tracking-[-0.06em] text-white">
                Live
                <br />
                beautifully.
              </h1>

              {/* CTA */}
              <div className="mt-10 sm:mt-14 flex items-center gap-8">
                <a
                  href="#"
                  className="group flex items-center gap-5 text-[11px] uppercase tracking-[0.38em] text-white"
                >
                  Explore Homes

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96b]/60 transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#c8a96b] group-hover:text-black">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex justify-start lg:justify-end">

              <div className="w-full max-w-[340px] border-l border-white/10 pl-6 sm:pl-8">

                <div className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Featured Estate
                </div>

                <h3 className="mt-5 text-3xl sm:text-4xl leading-none tracking-[-0.04em] text-white">
                  VVIP Adresses
                </h3>

                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#c8a96b]">
                  Sec 12 , Greater Noida West
                </p>

                <p className="mt-7 max-w-[260px] text-[14px] leading-[1.9] text-white/60">
                  A secluded architectural residence shaped by shadow, light,
                  and panoramic openness.
                </p>

                {/* STATS */}
                <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-7 sm:gap-10">
                  {[
                    ["2 & 3", "BHK"],
                    ["7", "Suites"],
                    ["₹1.07 cr", "Value"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-xl sm:text-2xl text-white">
                        {v}
                      </div>

                      <div className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/35">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIDE TEXT */}
      <div className="absolute left-7 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.45em] text-white/25">
          Aspen Oak Realty · Since 2010
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 z-20 w-full border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-5 px-6 py-5 sm:px-10 lg:px-16">

          <div className="text-[10px] uppercase tracking-[0.35em] text-white/35">
            Curated Modern Residences
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {[
              "Architecture",
              "Privacy",
              "Wellness",
            ].map((item) => (
              <div
                key={item}
                className="text-[10px] uppercase tracking-[0.35em] text-white/45"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}