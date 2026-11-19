export default function StatsStrip() {
  const stats = [
    {
      emoji: "📞",
      label: "4 Contact Numbers",
      sub: "Always reachable",
    },
    {
      emoji: "🚛",
      label: "Flatbed Transport",
      sub: "Safe & Secure Loading",
    },
    {
      emoji: "📍",
      label: "Sahiwal Interchange",
      sub: "Centrally Located",
    },
  ];

  return (
    <section className="bg-[#F1F5F9] py-10 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 bg-white rounded-xl px-5 py-5 shadow-sm border border-slate-100"
            >
              <span className="text-3xl flex-shrink-0">{s.emoji}</span>
              <div>
                <p className="font-bold text-[#0B0F17] text-base leading-snug">
                  {s.label}
                </p>
                <p className="text-sm text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
