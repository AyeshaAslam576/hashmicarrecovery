import Image from "next/image";

const reasons = [
  {
    image: "/images/response.jpg",
    alt: "Rapid recovery response truck on the road",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    iconBg: "bg-orange-500",
    headline: "Rapid Response, Day or Night",
    copy: "Breakdowns don't follow a schedule. Our local fleet is on standby 24/7 to reach your location fast and get you off the roadside safely.",
  },
  {
    image: "/images/hondacar.jpg",
    alt: "Car securely loaded on flatbed recovery truck with straps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    iconBg: "bg-teal-600",
    headline: "100% Safe & Damage-Free",
    copy: "We use modern flatbed trucks and specialized recovery gear to protect your car's suspension, bumper, and paintwork from start to finish.",
  },
  {
    image: "/images/qutation.jpg",
    alt: "Clear price quotation for car recovery service",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    iconBg: "bg-blue-600",
    headline: "Transparent, Fixed Quotes",
    copy: "No hidden fees or surprise charges when the truck arrives. Get a clear, competitive price before we dispatch so you stay in control.",
  },
  {
    image: "/images/trusted.jpg",
    alt: "Trusted professional car recovery specialist",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    iconBg: "bg-green-600",
    headline: "Trusted & Fully Insured",
    copy: "Your vehicle is covered by comprehensive transit insurance and handled by trained, courteous recovery specialists from pickup to drop-off.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0F17] leading-tight mb-4">
            Why Choose{" "}
            <span className="text-blue-700">Hashmi Car Recovery?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We are not just a towing service — we are a professional recovery
            team committed to getting you back on the road safely and quickly.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.headline}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating icon badge */}
                <div
                  className={`absolute bottom-0 left-6 translate-y-1/2 ${r.iconBg} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}
                >
                  {r.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-9">
                <h3 className="font-bold text-[#0B0F17] text-lg mb-2 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                  {r.headline}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {r.copy}
                </p>
              </div>

              {/* Bottom accent line — animates on hover */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
