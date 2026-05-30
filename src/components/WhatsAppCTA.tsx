import { MessageCircleMore } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/+919560044930"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-[999]"
    >
      <div
        className="
          relative flex h-[62px] w-[62px] items-center overflow-hidden
          rounded-full transition-all duration-700
          hover:w-[230px]
        "
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--ink) 90%, transparent), color-mix(in oklab, var(--forest) 58%, transparent))",
          border:
            "1px solid color-mix(in oklab, var(--gold) 14%, transparent)",
          boxShadow:
            "0 18px 55px -22px rgba(0,0,0,0.45)",
        }}
      >
        {/* ANIMATED GLOW RING */}
        <div
          className="
            absolute inset-0 rounded-full
            animate-[pulseRing_2.8s_ease-in-out_infinite]
          "
          style={{
            border:
              "1px solid color-mix(in oklab, var(--gold) 18%, transparent)",
          }}
        />

        {/* FLOATING GLOW */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[120px] w-[120px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-3xl
            animate-[floatGlow_4s_ease-in-out_infinite]
          "
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 72%)",
          }}
        />

        {/* HOVER GOLD LINE */}
        <div
          className="
            absolute bottom-0 left-0 h-[2px]
            w-0 transition-all duration-700
            group-hover:w-full
          "
          style={{
            background: "var(--gold)",
          }}
        />

        {/* ICON */}
        <div className="relative flex min-w-[62px] items-center justify-center">
          <div
            className="
              relative flex h-[46px] w-[46px]
              items-center justify-center
              rounded-full
            "
            style={{
              background:
                "linear-gradient(135deg, #25D366 0%, #1fb95b 100%)",
              boxShadow:
                "0 12px 30px rgba(37,211,102,0.22)",
            }}
          >
            {/* ICON PING */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/25 animate-ping" />

            <MessageCircleMore
              size={19}
              className="relative text-white"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex items-center justify-between
            whitespace-nowrap pl-1 pr-5
            opacity-0 transition-all duration-500
            group-hover:opacity-100
          "
        >
          <div>
            <div
              className="text-[9px] uppercase tracking-[0.34em]"
              style={{
                color:
                  "color-mix(in oklab, var(--warm-white) 32%, transparent)",
              }}
            >
              WhatsApp
            </div>

            <div
              className="mt-1 text-[13px] font-medium"
              style={{
                color: "var(--warm-white)",
              }}
            >
              Start Conversation
            </div>
          </div>

          <div
            className="
              ml-5 flex h-8 w-8 items-center justify-center
              rounded-full transition-all duration-500
              group-hover:translate-x-1
            "
            style={{
              background:
                "color-mix(in oklab, var(--warm-white) 8%, transparent)",
              color: "var(--gold)",
            }}
          >
            →
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes pulseRing {
          0%,100%{
            transform:scale(1);
            opacity:.55;
          }

          50%{
            transform:scale(1.08);
            opacity:.15;
          }
        }

        @keyframes floatGlow {
          0%,100%{
            transform:translate(-50%,-50%) scale(1);
          }

          50%{
            transform:translate(-50%,-50%) scale(1.12);
          }
        }
      `}</style>
    </a>
  );
}