import logo from "@/assets/logo2.png";

const navLinks = [
  "About",
  "Residences",
  "Investment",
  "Gallery",
  "Contact",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* subtle line */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#c8a96b]/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-[1550px] flex-col justify-between px-6 pb-10 pt-24 sm:px-10 lg:px-16">

        {/* TOP */}
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT SIDE */}
          <div>

            {/* logo */}
            <div className="flex items-center gap-5">
              <div className="overflow-hidden rounded-[10px] border border-white/10 bg-white/5 p-1">
                <img
                  src={logo}
                  alt="Aspen Oak Realty"
                  className="h-14 w-14 object-cover"
                />
              </div>

              <div>
                <div className="font-display text-[1.5rem] tracking-[0.24em] text-white">
                  ASPEN
                  <span className="ml-2 text-[#c8a96b]">
                    OAK
                  </span>
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.42em] text-white/25">
                  Luxury Real Estate
                </div>
              </div>
            </div>

            {/* massive heading */}
            <div className="mt-16">
              <h2 className="max-w-[850px] text-[clamp(3rem,9vw,9rem)] font-light leading-[0.86] tracking-[-0.07em] text-white">
                Homes
                <br />
                with a
                <span className="ml-4 italic text-[#c8a96b]">
                  presence.
                </span>
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-end lg:items-end">

            <div className="max-w-[360px] border-l border-white/10 pl-8">

              <div className="text-[10px] uppercase tracking-[0.42em] text-[#c8a96b]">
                About
              </div>

              <p className="mt-8 text-[15px] leading-[2] text-white/45">
                Curating architectural residences shaped by emotion,
                atmosphere, privacy, and timeless modern living.
              </p>

              {/* contact */}
              <div className="mt-12 space-y-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                    Email
                  </div>

                  <a

                  target="_blank"
                    href="mailto:aspenoakrealty@gmail.com"
                    className="mt-2 inline-block text-[15px] text-white/70 transition-colors duration-500 hover:text-white"
                  >
                     aspenoakrealty@gmail.com
                  </a>
                  
                  <a
                  target="_blank"
                    href="mailto:info@aspenoakrealty.com"
                    className="mt-2 inline-block text-[15px] text-white/70 transition-colors duration-500 hover:text-white"
                  >
                    info@aspenoakrealty.com
                  </a>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                    Phone
                  </div>

                  <a
                    href="#"
                    className="mt-2 inline-block text-[15px] text-white/70 transition-colors duration-500 hover:text-white"
                  >
                    +91 9560044930
                  </a>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-14 inline-flex items-center gap-5"
              >
                <span className="text-[11px] uppercase tracking-[0.38em] text-white">
                  Schedule Private Inquiry
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96b]/50 transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#c8a96b] group-hover:text-black">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CENTER NAV */}
        <div className="mt-28 border-t border-white/10 pt-10">

          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative overflow-hidden text-[11px] uppercase tracking-[0.38em] text-white/40 transition-colors duration-500 hover:text-white"
              >
                <span className="relative inline-block transition-transform duration-500 group-hover:translate-x-1">
                  {link}
                </span>

                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-[#c8a96b] transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          {/* copyright */}
          <div className="flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.35em] text-white/20">
            <span>
              © {new Date().getFullYear()} Aspen Oak Realty
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/10 md:block" />

            <span>
              All Rights Reserved
            </span>
          </div>

          {/* bottom links */}
          <div className="flex flex-wrap items-center gap-8">
            {[
              "Privacy",
              "Terms",
              "Instagram",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-[0.35em] text-white/25 transition-colors duration-500 hover:text-[#c8a96b]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}