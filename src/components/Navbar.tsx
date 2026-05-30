import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo2.png";

const links = [
  "About",
  "Residences",
  // "Experience",
  "Investment",
  "Gallery",
  "Contact",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "glass py-4" : "py-7"
        }`}
      >
        <nav className="mx-auto flex max-w-[1480px] items-center justify-between px-6 sm:px-8 lg:px-10">
          {/* LOGO */}
          <a href="/" className="relative z-50 flex items-center gap-4">
            <div
              className={`overflow-hidden rounded-[6px] transition-all duration-700 ${
                scrolled ? "h-9 w-9" : "h-11 w-11"
              }`}
            >
              <img
                src={logo}
                alt="Aspen Oak Realty"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-none">
              <div
                className={`font-display text-[15px] tracking-[0.18em] transition-colors duration-700 ${
                  scrolled ? "text-ink" : "text-warm-white"
                }`}
                style={{
                  color: scrolled
                    ? "var(--ink)"
                    : "var(--warm-white)",
                }}
              >
                ASPEN
                <span style={{ color: "var(--gold)" }}> OAK</span>
              </div>

              <div
                className="mt-1 text-[9px] tracking-[0.42em]"
                style={{
                  color: scrolled
                    ? "color-mix(in oklab, var(--ink) 55%, transparent)"
                    : "color-mix(in oklab, var(--warm-white) 70%, transparent)",
                }}
              >
                REALTY
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden items-center gap-8 lg:gap-10 md:flex">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="group relative text-[11px] uppercase tracking-[0.28em] transition-colors duration-500"
                  style={{
                    color: scrolled
                      ? "var(--ink)"
                      : "var(--warm-white)",
                  }}
                >
                  {link}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT BALANCER */}
          <div className="hidden w-[110px] md:block" />

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 md:hidden ${
              scrolled
                ? "border-black/10 bg-white/80 text-black backdrop-blur-xl"
                : "border-white/10 bg-white/10 text-white backdrop-blur-xl"
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-full overflow-hidden transition-all duration-700 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-10 opacity-0"
        }`}
      >
        {/* BACKDROP */}
        <div className="absolute inset-0 bg-black/92 backdrop-blur-2xl" />

        {/* GOLD GLOW */}
        <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#c8a96b]/10 blur-[90px]" />

        {/* MENU BOX */}
        <div className="relative mx-auto mt-[110px] flex h-[calc(100vh-130px)] w-[92%] max-w-[520px] flex-col rounded-[28px] border border-white/10 bg-white/[0.03] px-7 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {/* LINKS */}
          <div className="flex flex-1 flex-col">
            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/6 py-5 last:border-none"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {/* LEFT */}
                <div className="flex items-center gap-5">
                  <span className="text-[10px] tracking-[0.3em] text-white/25">
                    0{index + 1}
                  </span>

                  <span className="font-display text-[1.15rem] tracking-[0.12em] uppercase text-white transition-all duration-500 group-hover:text-[#c8a96b]">
                    {link}
                  </span>
                </div>

                {/* ARROW */}
                <span className="translate-x-0 text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c8a96b]">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <div className="text-[9px] uppercase tracking-[0.38em] text-white/25">
              Aspen Oak Realty
            </div>

            {/* <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8a96b]" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Luxury Estates
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}