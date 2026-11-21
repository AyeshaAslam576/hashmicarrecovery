import Image from "next/image";

const cities = [
  { name: "Islamabad",    img: "/images/city-islamabad-owner.jpg", landmark: "Capital Territory" },
  { name: "Lahore",       img: "/images/city-lahore-owner.jpg",    landmark: "Punjab" },
  { name: "Pindi Bhattian", img: "/images/city-rawalpindi.jpg",    landmark: "Punjab" },
  { name: "Faisalabad",   img: "/images/city-faisalabad.jpg",      landmark: "Punjab" },
  { name: "Sialkot",      img: "/images/city-sialkot.jpg",         landmark: "Punjab" },
  { name: "Sargodha",     img: "/images/city-sargodha.jpg",        landmark: "Punjab" },
  { name: "Sheikhupura",  img: "/images/city-sheikhupura.jpg",     landmark: "Punjab" },
  { name: "Jhang",        img: "/images/city-jhang.jpg",           landmark: "Punjab" },
  { name: "Peshawar",     img: "/images/city-peshawar-owner.jpg",  landmark: "KPK" },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-gradient-to-br from-[#0B0F17] via-[#0F172A] to-[#1E1B4B] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-500/15 border border-blue-500/25 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Coverage
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Service Areas</h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            From Sahianwala Interchange we provide 24/7 flatbed recovery and vehicle transport to major cities across Pakistan.
          </p>
        </div>

        {/* City image cards — all 9 owner-provided images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {cities.map((c) => (
            <div key={c.name} className="group relative h-48 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
              <Image
                src={c.img}
                alt={`${c.name} — ${c.landmark}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-bold text-base leading-tight">{c.name}</p>
                <p className="text-white/60 text-xs">{c.landmark}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          📍 Based at <span className="text-white font-medium">Dar-ul-Ahsan Toll Plaza, Sahianwala Interchange</span> — strategically located on the motorway network
        </p>
      </div>
    </section>
  );
}
