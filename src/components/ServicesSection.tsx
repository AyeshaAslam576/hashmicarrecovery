import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "/images/svc-car-recovery.jpg",
    alt: "Flatbed recovery truck loading a car for roadside recovery",
    tag: "Service 01",
    tagColor: "bg-orange-100 text-orange-700",
    title: "Car Recovery",
    desc: "Broken down on the roadside? Our experienced team responds fast to safely recover and move your vehicle, no matter where you are on the road.",
    bullets: ["Rapid response", "Safe vehicle handling", "Any roadside location"],
    accent: "border-orange-400",
    btnColor: "bg-orange-600 hover:bg-orange-700",
    align: "right",
  },
  {
    img: "/images/svc-mechanical-work.jpg",
    alt: "Mechanic performing electrical and mechanical work after accident",
    tag: "Service 02",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Accident & Breakdown Recovery",
    desc: "Post-accident recovery handled with care and professionalism. We safely extract and transport your vehicle from the scene to any destination you choose.",
    bullets: ["Accident scene clearance", "Damage-free extraction", "Any destination"],
    accent: "border-blue-500",
    btnColor: "bg-blue-700 hover:bg-blue-800",
    align: "left",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0F17] mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Professional recovery and transport — whenever and wherever you need us.
          </p>
        </div>

        {/* Alternating service rows */}
        <div className="flex flex-col gap-24">
          {services.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col ${s.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image block */}
              <div className={`w-full lg:w-1/2 relative group`}>
                <div className={`relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl img-shine border-b-4 ${s.accent}`}>
                  <Image
                    src={s.img} alt={s.alt} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Tag badge on image */}
                  <span className={`absolute top-5 left-5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${s.tagColor} shadow-lg`}>
                    {s.tag}
                  </span>
                </div>
                {/* Decorative dot behind image */}
                <div className={`absolute -z-10 ${s.align === "left" ? "-right-6 -bottom-6" : "-left-6 -bottom-6"} w-40 h-40 rounded-full bg-blue-50 opacity-70`} />
              </div>

              {/* Text block */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit ${s.tagColor}`}>
                  {s.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="#contact"
                  className={`inline-flex items-center gap-2 ${s.btnColor} text-white font-bold px-7 py-3.5 rounded-xl min-h-[52px] no-underline transition-all hover:-translate-y-0.5 shadow-lg w-fit mt-2`}>
                  Get Help Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
