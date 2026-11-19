import Link from "next/link";
import { IconWhatsApp } from "./Icons";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] flex md:hidden h-16 border-t border-white/10 bg-[#0B0F17]">
      {/* Call Now */}
      <Link
        href="tel:03001658231"
        className="flex-1 flex items-center justify-center gap-2 bg-[#15803D] text-white font-bold text-sm no-underline hover:bg-[#166534] transition-colors border-r border-white/15 min-h-[64px]"
      >
        📞 Call Now
      </Link>

      {/* WhatsApp */}
      <Link
        href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-[#15803D] text-[#4ADE80] font-bold text-sm no-underline hover:bg-[#15803D] hover:text-white transition-colors min-h-[64px]"
      >
        <IconWhatsApp className="w-5 h-5" />
        WhatsApp
      </Link>
    </div>
  );
}
