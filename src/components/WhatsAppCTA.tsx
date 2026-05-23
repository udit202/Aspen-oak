import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
    return (
        <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-5 right-5 z-[999]"
        >
            <div
                className="
          relative flex h-14 w-14 items-center overflow-hidden
          rounded-full border border-white/10 bg-black/75
          backdrop-blur-2xl transition-all duration-700
          hover:w-[260px] hover:border-[#c8a96b]/40
        "
            >

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#c8a96b]/10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex min-w-[56px] items-center justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.35)]">
                        <MessageCircle size={20} />
                    </div>
                </div>

                {/* Content */}
                <div
                    className="
            flex items-center justify-between
            whitespace-nowrap pl-1 pr-5
            opacity-0 transition-all duration-500
            group-hover:opacity-100
          "
                >
                    <div>
                        <div className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                            WhatsApp
                        </div>

                        <div className="mt-1 text-[13px] text-white">
                            Private Inquiry
                        </div>
                    </div>

                    <span className="ml-6 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c8a96b]">
                        →
                    </span>
                </div>
            </div>
        </a>
    );
}