import Image from "next/image";
import Link from "next/link";
import { IconMapPin, IconWhatsApp, IconPhone } from "./Icons";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[680px] flex items-center overflow-hidden">
      {/* Background image — owner's flatbed truck with car loaded */}
      <Image
        src="/images/hero-flatbed-loaded.jpg"
        alt="Flatbed recovery truck loaded with a car at Hashmi Car Recovery"
        fill priority quality={90}
        className="object-cover object-center scale-105"
      />
      {/* Left-to-right dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-[#0B0F17]/40" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F17] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-28 relative z-10 w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            🚨 24/7 Recovery Service · Pakistan
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-5">
            Hashmi Car Recovery<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              &amp; Vehicle Transport
            </span>
          </h1>

          <p className="urdu text-white/50 text-sm mb-4 leading-loose">
            ہاشمی کار ریکوری اینڈ وہیکل ٹرانسپورٹ
          </p>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
            Professional flatbed recovery &amp; vehicle transport from
            Sahianwala Interchange — across all major cities of Pakistan.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="tel:03001658231"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-4 rounded-xl min-h-[52px] transition-all hover:-translate-y-0.5 shadow-lg shadow-green-900/40 no-underline">
              <IconPhone className="w-5 h-5" /> Call Now
            </Link>
            <Link href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-400 hover:bg-green-700 hover:text-white hover:border-green-700 font-bold px-7 py-4 rounded-xl min-h-[52px] transition-all hover:-translate-y-0.5 no-underline">
              <IconWhatsApp className="w-5 h-5" /> WhatsApp Us
            </Link>
            <Link href="https://www.google.com/maps/dir/?api=1&destination=Dar-ul-Ahsan+Toll+Plaza+Sahianwala+Interchange"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-4 rounded-xl min-h-[52px] transition-all hover:-translate-y-0.5 no-underline">
              🗺️ Directions
            </Link>
          </div>

          <p className="flex items-center gap-2 text-white/50 text-sm">
            <IconMapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            Dar-ul-Ahsan Toll Plaza, Sahianwala Interchange
          </p>
        </div>

        {/* Right — streamlined contact card */}
        <div className="hidden lg:flex flex-col gap-4 items-end animate-fade-up delay-200">
          <div className="bg-[rgba(15,23,42,0.85)] backdrop-blur-md border border-white/10 rounded-2xl p-6 w-80 shadow-2xl">
            {/* Primary dispatch number — large and prominent */}
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">
              24/7 Dispatch Line
            </p>
            <Link
              href="tel:03001658231"
              className="flex items-center gap-3 no-underline group mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-green-700 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                <IconPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-extrabold text-2xl block leading-tight group-hover:text-green-400 transition-colors">
                  0300 1658231
                </span>
                <span className="text-white/40 text-xs">M. Imran · Tap to call</span>
              </div>
            </Link>

            {/* WhatsApp quick action */}
            <Link
              href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-700/20 border border-green-600/30 rounded-xl px-4 py-3 no-underline hover:bg-green-700/30 transition-colors mb-5"
            >
              <IconWhatsApp className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div>
                <span className="text-green-400 font-semibold text-sm block">WhatsApp Us</span>
                <span className="text-white/40 text-xs">Send location for faster pickup</span>
              </div>
            </Link>

            {/* Divider */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
                Backup Lines
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { n: "0345 0096028", label: "M. Imran", wa: true },
                  { n: "0301 4012700", label: "M. Ashiq", wa: false },
                  { n: "0371 4451352", label: "M. Imran", wa: false },
                ].map(p => (
                  <div key={p.n} className="flex items-center justify-between">
                    <Link href={`tel:${p.n.replace(/\s/g,"")}`}
                      className="text-white/70 hover:text-white font-medium text-sm no-underline transition-colors">
                      {p.n}
                    </Link>
                    <span className="text-white/30 text-xs">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="mt-4 flex items-center gap-2 text-white/50 text-xs pt-3 border-t border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
