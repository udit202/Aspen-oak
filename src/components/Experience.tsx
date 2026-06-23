import { useEffect, useState } from "react";

import gallery1 from "@/assets/Gallery-1.jpeg";
import gallery2 from "@/assets/Gallery-2.jpeg";
import gallery3 from "@/assets/Gallery-3.jpeg";
import gallery4 from "@/assets/Gallery-4.jpeg";

const galleryItems = [
  {
    image: gallery1,
    title: "Aurelia House",
    location: "Beverly Hills",
    quote:
      "A residence is not measured in rooms, but in the moments it gives back to its owner.",
  },

  {
    image: gallery2,
    title: "Casa Soléa",
    location: "Ibiza",
    quote:
      "Architecture becomes unforgettable when silence feels designed into every corner.",
  },

  {
    image: gallery3,
    title: "Veloura Estate",
    location: "Malibu",
    quote:
      "The rarest homes are not loud — they leave a feeling that lingers long after departure.",
  },

  {
    image: gallery4,
    title: "Maison Élan",
    location: "Saint-Tropez",
    quote:
      "Luxury begins where proportion, light, and emotion quietly align.",
  },
];

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [previewIndex, setPreviewIndex] = useState(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  /* FULL VIEW NAVIGATION */
  const nextPreview = () => {
    setPreviewIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevPreview = () => {
    setPreviewIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  /* CURRENT */
  const current = galleryItems[activeIndex];

  /* RIGHT PREVIEW */
  const nextItemIndex =
    activeIndex === galleryItems.length - 1
      ? 0
      : activeIndex + 1;

  const nextItem = galleryItems[nextItemIndex];

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden py-40"
      >
        <div className="mx-auto max-w-[1480px] px-8">

          <div className="grid grid-cols-12 gap-8">

            {/* LEFT TEXT */}
            <div className="col-span-12 lg:col-span-5 lg:pt-32">

              <p className="eyebrow">
                <span className="rule-gold mr-4" />
                The Experience
              </p>

              <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
                Light. Stone.
                <br />
                Olive.{" "}
                <em style={{ color: "var(--gold)" }}>
                  Silence.
                </em>
              </h2>

              <p className="mt-10 max-w-md text-[15px] leading-[1.9] text-[var(--ink)]/65">
                Beyond square footage and skyline views — a vocabulary of
                materials, proportion, and atmosphere that defines how a
                true residence should feel.
              </p>
            </div>

            {/* GALLERY */}
            <div className="col-span-12 lg:col-span-7">

              <div className="grid grid-cols-12 gap-6">

                {/* MAIN IMAGE */}
                <div className="col-span-7 overflow-hidden">

                  <div className="group relative h-[560px] overflow-hidden bg-black">

                    {/* IMAGE */}
                    <img
                      key={current.image}
                      src={current.image}
                      alt={current.title}
                      className="h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] animate-[fadeScale_1.2s_ease]"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-all duration-500 group-hover:bg-black/35 group-hover:opacity-100">

                      <button
                        onClick={() => setPreviewIndex(activeIndex)}
                        className="translate-y-5 border border-white/30 bg-white/10 px-7 py-4 text-[11px] uppercase tracking-[0.35em] text-white backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 hover:bg-white hover:text-black"
                      >
                        Full View
                      </button>
                    </div>

                    {/* TEXT */}
                    <div className="absolute bottom-0 left-0 w-full p-8">

                      <div className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                        {current.location}
                      </div>

                      <h3 className="mt-4 font-display text-4xl text-white">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-span-5 mt-24 space-y-6">

                  {/* NEXT IMAGE */}
                  <button
                    onClick={nextSlide}
                    className="group relative block h-[360px] w-full overflow-hidden text-left"
                  >
                    <img
                      key={nextItem.image}
                      src={nextItem.image}
                      alt={nextItem.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/15" />

                    {/* FULL VIEW BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewIndex(nextItemIndex);
                        }}
                        className="translate-y-5 border border-white/30 bg-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 hover:bg-white hover:text-black"
                      >
                        Full View
                      </button>
                    </div>

                    {/* FLOAT LABEL */}
                    <div className="absolute bottom-5 left-5">

                      <div className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                        Next Residence
                      </div>

                      <div className="mt-2 font-display text-2xl text-white">
                        {nextItem.title}
                      </div>
                    </div>

                    {/* ARROW */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-500 group-hover:translate-x-1">
                      →
                    </div>
                  </button>

                  {/* DYNAMIC QUOTE */}
                  <div className="px-2">

                    <div
                      className="font-display text-3xl italic"
                      style={{ color: "var(--forest)" }}
                    >
                      "
                    </div>

                    <p
                      key={current.quote}
                      className="mt-2 text-[13px] leading-[1.8] text-[var(--ink)]/70 animate-[fadeText_0.7s_ease]"
                    >
                      {current.quote}
                    </p>
                  </div>

                  {/* CONTROLS */}
                  <div className="flex items-center gap-3 px-2 pt-2">

                    <button
                      onClick={prevSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all duration-500 hover:-translate-x-1 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    >
                      ←
                    </button>

                    <button
                      onClick={nextSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all duration-500 hover:translate-x-1 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLARS */}
          <div
            className="mt-24 grid grid-cols-2 gap-px lg:grid-cols-4"
            style={{
              background:
                "color-mix(in oklab, var(--ink) 12%, transparent)",
            }}
          >
            {[
              {
                n: "01",
                t: "Architecture",
                d: "Signed projects, museum-grade detailing.",
              },
              {
                n: "02",
                t: "Provenance",
                d: "Verified title, lineage, and conservation.",
              },
              {
                n: "03",
                t: "Wellness",
                d: "Private spas, hydrotherapy, longevity studios.",
              },
              {
                n: "04",
                t: "Discretion",
                d: "Off-market introductions, NDA representation.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="group bg-[var(--background)] p-10 transition-colors duration-700 hover:bg-[var(--beige)]"
              >
                <div className="text-[10px] tracking-[0.4em] text-[var(--gold)]">
                  {p.n}
                </div>

                <div className="mt-6 font-display text-3xl">
                  {p.t}
                </div>

                <p className="mt-4 text-[13px] leading-[1.8] text-[var(--ink)]/60">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FULL IMAGE MODAL */}
        {previewIndex !== null && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 p-6 backdrop-blur-md animate-[fadeModal_0.4s_ease]"
          >

            {/* CLOSE */}
            <button
              onClick={() => setPreviewIndex(null)}
              className="absolute right-8 top-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-xl transition-all duration-500 hover:rotate-90 hover:bg-white hover:text-black"
            >
              ✕
            </button>

            {/* LEFT BUTTON */}
            <button
              onClick={prevPreview}
              className="absolute left-6 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl transition-all duration-500 hover:-translate-x-1 hover:bg-white hover:text-black"
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextPreview}
              className="absolute right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl transition-all duration-500 hover:translate-x-1 hover:bg-white hover:text-black"
            >
              →
            </button>

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                key={galleryItems[previewIndex].image}
                src={galleryItems[previewIndex].image}
                alt="Preview"
                className="max-h-[92vh] w-auto max-w-[92vw] object-contain animate-[imageReveal_0.6s_cubic-bezier(0.22,1,0.36,1)]"
              />

              {/* INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-8">

                <div className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                  {galleryItems[previewIndex].location}
                </div>

                <h3 className="mt-3 font-display text-5xl text-white">
                  {galleryItems[previewIndex].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(1.05);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeText {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeModal {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: scale(0.92);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}