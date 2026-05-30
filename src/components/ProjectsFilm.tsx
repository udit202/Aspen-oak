import { useEffect, useRef, useState } from "react";

import ProjectVideo from "@/assets/ProjectVideo.mp4";

import projectplan from "@/assets/ProjectPlan.jpg";
import p2 from "@/assets/experience-2.jpg";

const showcaseItems = [
  {
    id: "01",
    type: "video",

    title: "Aurelia Estate",

    subtitle: "Architectural Film",

    location: "Beverly Hills",

    media: ProjectVideo,

    desc:
      "A cinematic residence shaped through silence, shadow, stone, and natural openness.",

    stats: [
      ["12K", "Sq.ft"],
      ["7", "Suites"],
      ["03", "Pools"],
    ],
  },

  {
    id: "02",
    type: "image",

    title: "Casa Virelle",

    subtitle: "Private Residence",

    location: "Lake Como",

    media: projectplan,

    desc:
      "Mediterranean textures, sculpted light, and restrained luxury designed for calm living.",

    stats: [
      ["9K", "Sq.ft"],
      ["5", "Suites"],
      ["01", "Spa"],
    ],
  },

  {
    id: "03",
    type: "image",

    title: "Noir Pavilion",

    subtitle: "Modern Sanctuary",

    location: "Dubai Hills",

    media: p2,

    desc:
      "A minimal architectural retreat balancing warm materiality with dramatic geometry.",

    stats: [
      ["14K", "Sq.ft"],
      ["8", "Suites"],
      ["02", "Lounges"],
    ],
  },
];

export function ProjectsFilm() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [fullView, setFullView] = useState(false);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const activeItem = showcaseItems[activeIndex];

/* AUTO SWITCH */
useEffect(() => {
  if (fullView) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === showcaseItems.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, [fullView]);

  /* AUTO PLAY / PAUSE VIDEO */
  useEffect(() => {
    const current = showcaseItems[activeIndex];

    const video = videoRef.current;

    if (!video || current.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative overflow-hidden py-28 lg:py-36"
        style={{
          background:
            "linear-gradient(to bottom, var(--warm-white), #eee5d4)",
        }}
      >
        {/* BG GLOW */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, var(--forest) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
          {/* TOP */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-14 bg-[var(--gold)]" />

                <span className="text-[10px] uppercase tracking-[0.42em] text-[var(--ink)]/45">
                  Selected Projects
                </span>
              </div>

              <h2 className="max-w-[760px] font-display text-[clamp(3rem,6vw,7rem)] leading-[0.92] tracking-[-0.06em] text-[var(--ink)]">
                Cinematic
                <br />
                spaces shaped
                <br />
                through{" "}
                <span
                  style={{
                    color: "var(--gold)",
                    fontStyle: "italic",
                  }}
                >
                  atmosphere.
                </span>
              </h2>
            </div>

            <p className="max-w-[420px] text-[15px] leading-[2] text-[var(--ink)]/60">
              Each residence carries its own emotional identity —
              materiality, light, openness, and rhythm translated into
              architectural experiences.
            </p>
          </div>

          {/* MAIN SHOWCASE */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[260px_1fr]">
            {/* LEFT TABS */}
            <div className="space-y-4">
              {showcaseItems.map((item, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full overflow-hidden border px-6 py-6 text-left transition-all duration-700 ${
                      active
                        ? "border-[var(--gold)] bg-white shadow-[0_25px_60px_-25px_rgba(0,0,0,0.16)]"
                        : "border-[var(--ink)]/10 bg-white/40 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.38em] text-[var(--gold)]">
                          {item.subtitle}
                        </div>

                        <div className="mt-4 font-display text-3xl leading-none text-[var(--ink)]">
                          {item.title}
                        </div>

                        <div className="mt-3 text-[10px] uppercase tracking-[0.32em] text-[var(--ink)]/40">
                          {item.location}
                        </div>
                      </div>

                      <div
                        className={`mt-1 text-[11px] tracking-[0.3em] transition-all duration-500 ${
                          active
                            ? "text-[var(--gold)]"
                            : "text-[var(--ink)]/25"
                        }`}
                      >
                        {item.id}
                      </div>
                    </div>

                    <div
                      className={`mt-6 h-px w-full origin-left transition-all duration-700 ${
                        active
                          ? "scale-x-100 bg-[var(--gold)]"
                          : "scale-x-0 bg-[var(--gold)]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* RIGHT MEDIA PANEL */}
            <div className="relative overflow-hidden rounded-[34px] border border-[var(--ink)]/10 bg-black shadow-[0_40px_120px_-35px_rgba(0,0,0,0.28)]">
              {/* MEDIA */}
              <div
                onClick={() => setFullView(true)}
                className="relative h-[72vh] min-h-[520px] overflow-hidden cursor-pointer"
              >
                {activeItem.type === "video" ? (
                  <video
                    key={activeItem.media}
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover animate-fade-in"
                  >
                    <source src={activeItem.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    key={activeItem.media}
                    src={activeItem.media}
                    alt={activeItem.title}
                    className="h-full w-full object-cover animate-fade-in"
                  />
                )}

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

                {/* TOP INFO */}
                <div className="absolute left-0 top-0 z-20 flex w-full items-start justify-between p-6 sm:p-8 lg:p-10">
                  <div className="glass-dark px-5 py-4">
                    <div className="text-[9px] uppercase tracking-[0.38em] text-white/45">
                      {activeItem.subtitle}
                    </div>

                    <div className="mt-3 font-display text-3xl text-white">
                      {activeItem.title}
                    </div>
                  </div>

                  <div className="glass-dark px-5 py-4 text-right">
                    <div className="text-[9px] uppercase tracking-[0.38em] text-white/40">
                      Location
                    </div>

                    <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
                      {activeItem.location}
                    </div>
                  </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 z-20 w-full p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                    {/* TEXT */}
                    <div>
                      <p className="max-w-[620px] text-[16px] leading-[2] text-white/72">
                        {activeItem.desc}
                      </p>
                    </div>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-10 border-t border-white/10 pt-6 lg:border-none lg:pt-0">
                      {activeItem.stats.map(([v, l]) => (
                        <div key={l}>
                          <div className="font-display text-4xl leading-none text-white">
                            {v}
                          </div>

                          <div className="mt-3 text-[9px] uppercase tracking-[0.34em] text-white/35">
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

          {/* QUOTE */}
          <div className="mt-20 border-t border-[var(--ink)]/10 pt-10">
            <p className="max-w-[900px] font-display text-[clamp(1.7rem,3vw,3.4rem)] leading-[1.25] tracking-[-0.03em] text-[var(--ink)]/82">
              “Architecture becomes unforgettable when a space begins to
              shape emotion, not just appearance.”
            </p>
          </div>
        </div>
      </section>

      {/* FULL VIEW */}
      {fullView && (
        <div
          onClick={() => setFullView(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-6"
        >
          <button
            onClick={() => setFullView(false)}
            className="absolute right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl"
          >
            ×
          </button>

          {activeItem.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="max-h-full max-w-full object-contain"
            >
              <source src={activeItem.media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={activeItem.media}
              alt={activeItem.title}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
      )}
    </>
  );
}