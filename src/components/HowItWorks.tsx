import Image from "next/image";

const steps = [
  {
    num: "01",
    img: "/images/step1call.jpg",
    alt: "Call Hashmi Car Recovery for roadside help",
    title: "Call or WhatsApp",
    desc: "Contact us on any of our four numbers — call or WhatsApp us with your breakdown situation anytime.",
    color: "from-blue-600 to-blue-700",
    ring: "ring-blue-500/30",
  },
  {
    num: "02",
    img: "/images/step2.jpg",
    alt: "Share your GPS location via WhatsApp",
    title: "Share Your Location",
    desc: "Drop your live GPS location via WhatsApp or describe your exact position on the road.",
    color: "from-teal-600 to-teal-700",
    ring: "ring-teal-500/30",
  },
  {
    num: "03",
    img: "/images/hero-flatbed-loaded.jpg",
    alt: "Hashmi Car Recovery flatbed truck on the way",
    title: "We Dispatch",
    desc: "Our flatbed truck is dispatched immediately to your location — we move fast so you aren't stranded long.",
    color: "from-orange-600 to-orange-700",
    ring: "ring-orange-500/30",
  },
  {
    num: "04",
    img: "/images/service-recovery.jpg",
    alt: "Car safely loaded and secured on flatbed truck",
    title: "Safe Recovery",
    desc: "Your vehicle is carefully loaded onto our flatbed and securely transported to your chosen destination.",
    color: "from-green-600 to-green-700",
    ring: "ring-green-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0F17] mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            From your call to safe recovery — a clear 4-step process.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] hover:-translate-y-2 transition-all duration-300 ring-4 ring-transparent hover:${step.ring} flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-52 flex-shrink-0 overflow-hidden">
                <Image
                  src={step.img} alt={step.alt} fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Step number */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white font-black text-lg flex items-center justify-center shadow-lg`}>
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-[#0B0F17] text-lg leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
                {/* Progress dot row */}
                <div className="flex gap-1.5 mt-2">
                  {steps.map((_, j) => (
                    <span key={j} className={`h-1.5 rounded-full transition-all ${j === i ? `flex-1 bg-gradient-to-r ${step.color}` : "w-4 bg-slate-200"}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
