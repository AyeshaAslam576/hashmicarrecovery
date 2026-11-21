import Link from "next/link";
import Image from "next/image";
import { IconPhone, IconWhatsApp, IconMapPin } from "./Icons";

const quickLinks = [
  { label: "Home",          href: "#home" },
  { label: "Services",      href: "#services" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact",       href: "#contact" },
];

const services = [
  "Car Recovery",
  "Flatbed Vehicle Transport",
  "Accident Recovery",
  "Breakdown Recovery",
  "Long Distance Transport",
];

const serviceAreas = [
  "Peshawar", "Islamabad", "Lahore", "Karachi",
  "Sialkot", "Faisalabad", "Multan", "Sukkur", "Sargodha",
];

const phones = [
  { name: "M. Imran", number: "0300 1658231", tel: "03001658231", wa: "https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services" },
  { name: "M. Imran", number: "0345 0096028", tel: "03450096028", wa: "https://wa.me/923450096028?text=Hello%2C%20I%20need%20car%20recovery%20services" },
  { name: "M. Ashiq", number: "0301 4012700", tel: "03014012700", wa: null },
  { name: "M. Imran", number: "0371 4451352", tel: "03714451352", wa: null },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Main footer body ── */}
      <div className="bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 py-12">

          {/* Brand row */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/15">
            <Image
              src="/images/mylogo.jpg"
              alt="Hashmi Car Recovery Logo"
              width={72}
              height={72}
              className="rounded-full object-contain flex-shrink-0 logo-spin"
            />
            <div>
              <span className="font-bold text-white text-lg block leading-tight">
                Hashmi Car Recovery &amp; Vehicle Transport
              </span>
              <span className="text-sm text-white/50">
                Dar-ul-Ahsan Toll Plaza, Sahianwala Interchange
              </span>
            </div>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Quick Links */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5 text-[#60A5FA]">
                Quick Links
              </p>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 no-underline hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5 text-[#60A5FA]">
                Services
              </p>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href="#services"
                      className="text-sm text-white/70 no-underline hover:text-white transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5 text-[#60A5FA]">
                Service Areas
              </p>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {serviceAreas.map((city) => (
                  <li key={city} className="text-sm text-white/70">
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5 text-[#60A5FA]">
                Contact
              </p>
              <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
                {phones.map((p) => (
                  <li key={p.tel} className="flex items-start gap-2">
                    <span className="text-[#60A5FA] mt-0.5 flex-shrink-0">
                      {p.wa
                        ? <IconWhatsApp className="w-4 h-4" />
                        : <IconPhone className="w-4 h-4" />}
                    </span>
                    <div>
                      <Link
                        href={`tel:${p.tel}`}
                        className="text-sm font-semibold text-white no-underline hover:text-[#60A5FA] transition-colors block"
                      >
                        {p.number}
                      </Link>
                      <span className="text-xs text-white/40">{p.name}</span>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-2 mt-1">
                  <span className="text-[#60A5FA] mt-0.5 flex-shrink-0">
                    <IconMapPin className="w-4 h-4" />
                  </span>
                  <span className="text-xs text-white/60 leading-relaxed">
                    Dar-ul-Ahsan Toll Plaza,<br />Sahianwala Interchange
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col sm:flex-row min-h-[44px] border-t border-white/10 bg-black/40">
        <div className="flex-1 flex items-center justify-center sm:justify-start px-6 py-3 bg-[#0B0F17]">
          <span className="text-xs text-white/60 font-medium">
            Developed by{" "}
            <span className="font-bold text-[#60A5FA]">Altushexagon</span>
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center sm:justify-end px-6 py-3 bg-[#0B0F17]">
          <span className="text-xs text-white/60">
            © 2026 Hashmi Car Recovery &amp; Vehicle Transport. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
