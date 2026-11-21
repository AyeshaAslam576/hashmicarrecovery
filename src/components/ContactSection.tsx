import Link from "next/link";
import { IconPhone, IconWhatsApp, IconMapPin } from "./Icons";

const phones = [
  {
    name: "M. Imran",
    number: "0300 1658231",
    tel: "03001658231",
    wa: "https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services",
  },
  {
    name: "M. Imran",
    number: "0345 0096028",
    tel: "03450096028",
    wa: "https://wa.me/923450096028?text=Hello%2C%20I%20need%20car%20recovery%20services",
  },
  {
    name: "M. Ashiq",
    number: "0301 4012700",
    tel: "03014012700",
    wa: null,
  },
  {
    name: "M. Imran",
    number: "0371 4451352",
    tel: "03714451352",
    wa: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0F17] mb-3">
            Contact Us
          </h2>
          <p className="text-slate-500 text-lg">
            Reach us any time on any of our four numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-[#0B0F17] text-lg">Contact Details</h3>

            {/* Phone list */}
            <div className="flex flex-col gap-3">
              {phones.map((p) => (
                <div
                  key={p.tel}
                  className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] px-4 py-3"
                >
                  <div className="text-[#1D4ED8] flex-shrink-0">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 mb-0.5">{p.name}</p>
                    <Link
                      href={`tel:${p.tel}`}
                      className="font-bold text-[#0B0F17] text-base no-underline hover:text-[#1D4ED8] transition-colors block"
                    >
                      {p.number}
                    </Link>
                  </div>
                  {p.wa ? (
                    <Link
                      href={p.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-green-50 text-[#15803D] text-xs font-semibold px-2.5 py-1 rounded-full no-underline hover:bg-green-100 transition-colors flex-shrink-0"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5" />
                      WhatsApp
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400 flex-shrink-0">Call only</span>
                  )}
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)] px-4 py-4 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Location
              </p>
              <div className="flex items-start gap-2">
                <IconMapPin className="w-5 h-5 text-[#1D4ED8] mt-0.5 flex-shrink-0" />
                <p className="text-[#0B0F17] font-medium text-sm">
                  Dar-ul-Ahsan Toll Plaza, Sahianwala Interchange
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">
                Working Hours
              </p>
              <p className="text-sm font-semibold text-green-700">24/7 — Always Available</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="tel:03001658231"
                className="inline-flex items-center gap-2 bg-[#15803D] text-white font-semibold px-5 py-3 rounded-lg min-h-[52px] hover:bg-[#166534] transition-colors no-underline text-sm"
              >
                <IconPhone className="w-4 h-4" />
                Call 0300 1658231
              </Link>
              <Link
                href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#15803D] text-white font-semibold px-5 py-3 rounded-lg min-h-[52px] hover:bg-[#166534] transition-colors no-underline text-sm"
              >
                <IconWhatsApp className="w-4 h-4" />
                WhatsApp 0300 1658231
              </Link>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.0!2d73.1!3d30.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b4e0c00f7a0d%3A0x7a0d7a0d7a0d7a0d!2sSahianwala%2C+Pakistan!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sahianwala Interchange map"
              className="shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Dar-ul-Ahsan+Toll+Plaza+Sahianwala+Interchange"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1D4ED8] text-white font-semibold px-5 py-3 rounded-lg min-h-[52px] hover:bg-[#1E40AF] transition-colors no-underline text-sm text-center"
            >
              🗺️ Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
