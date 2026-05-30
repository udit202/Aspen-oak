import { useState } from "react";

export function Brochure() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FIXED BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed right-0 top-1/2 z-[120] -translate-y-1/2 transition-all duration-700 ${
          open
            ? "translate-x-[120%] opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <div
          className="
            group relative overflow-hidden
            rounded-l-[18px]
            border border-r-0
            px-3 py-5
            shadow-[0_18px_50px_-18px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            transition-all duration-500
            hover:px-4
          "
          style={{
            background:
              "color-mix(in oklab, var(--warm-white) 88%, transparent)",
            borderColor:
              "color-mix(in oklab, var(--gold) 26%, transparent)",
          }}
        >
          {/* GOLD SIDE LINE */}
          <div
            className="absolute left-0 top-0 h-full w-[2px]"
            style={{
              background: "var(--gold)",
            }}
          />

          {/* TEXT */}
          <div
            className="
              flex flex-col items-center gap-2
              text-[9px]
              font-medium
              uppercase
              tracking-[0.32em]
            "
            style={{
              color: "var(--ink)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Download Brochure
          </div>
        </div>
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[130] bg-black/35 backdrop-blur-sm transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* FORM PANEL */}
      <div
        className={`fixed right-0 top-0 z-[140] h-screen w-full max-w-[440px] transition-all duration-700 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="
            relative flex h-full flex-col overflow-hidden
            border-l
            shadow-[-20px_0_80px_-25px_rgba(0,0,0,0.25)]
          "
          style={{
            background:
              "linear-gradient(to bottom, var(--warm-white), var(--beige))",
            borderColor:
              "color-mix(in oklab, var(--gold) 18%, transparent)",
          }}
        >
          {/* SCROLLABLE CONTENT */}
          <div className="h-full overflow-y-auto">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 pt-6">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.38em]"
                  style={{
                    color: "var(--gold)",
                  }}
                >
                  Private Access
                </div>

                <h3
                  className="mt-3 font-display text-[2rem] leading-none"
                  style={{
                    color: "var(--ink)",
                  }}
                >
                  Brochure
                </h3>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border
                  text-xl transition-all duration-500
                  hover:rotate-90
                "
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--ink) 10%, transparent)",
                  background:
                    "color-mix(in oklab, var(--warm-white) 70%, transparent)",
                  color: "var(--ink)",
                }}
              >
                ×
              </button>
            </div>

            {/* SMALL TEXT */}
            <div className="px-6 pt-5">
              <p
                className="max-w-[320px] text-[13px] leading-[1.9]"
                style={{
                  color:
                    "color-mix(in oklab, var(--ink) 65%, transparent)",
                }}
              >
                Share your details and our advisory team will personally
                connect with you to provide the complete project
                brochure and investment information.
              </p>
            </div>

            {/* FORM */}
            <div className="px-6 pb-8 pt-7">
              <form className="space-y-5">
                {/* INPUTS */}
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                ].map((field) => (
                  <div key={field}>
                    <label
                      className="mb-2 block text-[10px] uppercase tracking-[0.3em]"
                      style={{
                        color:
                          "color-mix(in oklab, var(--ink) 45%, transparent)",
                      }}
                    >
                      {field}
                    </label>

                    <input
                      type="text"
                      placeholder={`Enter ${field.toLowerCase()}`}
                      className="
                        h-[54px] w-full rounded-[18px]
                        border px-5 text-[14px]
                        outline-none transition-all duration-500
                        focus:border-[var(--gold)]
                      "
                      style={{
                        background:
                          "color-mix(in oklab, var(--warm-white) 85%, transparent)",
                        borderColor:
                          "color-mix(in oklab, var(--ink) 10%, transparent)",
                        color: "var(--ink)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="mb-2 block text-[10px] uppercase tracking-[0.3em]"
                    style={{
                      color:
                        "color-mix(in oklab, var(--ink) 45%, transparent)",
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="
                      w-full resize-none rounded-[18px]
                      border p-5 text-[14px]
                      outline-none transition-all duration-500
                      focus:border-[var(--gold)]
                    "
                    style={{
                      background:
                        "color-mix(in oklab, var(--warm-white) 85%, transparent)",
                      borderColor:
                        "color-mix(in oklab, var(--ink) 10%, transparent)",
                      color: "var(--ink)",
                    }}
                  />
                </div>

                {/* BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="
                      relative flex h-[56px] w-full items-center
                      justify-center overflow-hidden rounded-[18px]
                      border text-[11px] uppercase tracking-[0.34em]
                      transition-all duration-700
                      hover:scale-[1.01]
                    "
                    style={{
                      borderColor: "var(--gold)",
                      background: "var(--gold)",
                      color: "var(--ink)",
                    }}
                  >
                    Request Brochure
                  </button>

                  <p
                    className="mt-4 text-center text-[11px] leading-[1.8]"
                    style={{
                      color:
                        "color-mix(in oklab, var(--ink) 42%, transparent)",
                    }}
                  >
                    Your information remains completely private and is
                    reviewed only by our internal advisory team.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* SOFT GLOW */}
          <div
            className="
              pointer-events-none absolute
              right-[-120px] top-[20%]
              h-[280px] w-[280px]
              rounded-full opacity-[0.08]
            "
            style={{
              background:
                "radial-gradient(circle, var(--gold) 0%, transparent 72%)",
            }}
          />
        </div>
      </div>
    </>
  );
}