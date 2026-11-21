import Link from "next/link";
import { IconWhatsApp } from "./Icons";

export default function TopBar() {
  return (
    <div className="bg-[#1D4ED8] text-white text-sm h-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        <span className="text-white/90 hidden sm:block text-xs font-medium tracking-wide">
          🚛 Fast Flatbed Recovery at Sahianwala Interchange &amp; Across Punjab — 24/7
        </span>
        <Link
          href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white font-semibold hover:opacity-85 transition-opacity ml-auto text-xs"
        >
          <IconWhatsApp className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </Link>
      </div>
    </div>
  );
}
