import Link from "next/link";
import { IconPhone } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="bg-slate-800 py-24 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 65%, rgba(251,146,60,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/25 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          🕐 Available 24/7 Across Pakistan
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Stuck on the{" "}
          <span className="text-orange-400 underline decoration-orange-500/40 underline-offset-4">
            Road?
          </span>{" "}
          We Are One Call Away.
        </h2>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Wherever you are in Pakistan, our flatbed recovery truck is ready.
          Call or WhatsApp us and we will get back to you promptly.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="tel:03001658231"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full min-h-[56px] text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30 no-underline"
          >
            <IconPhone className="w-5 h-5" />
            CALL NOW
          </Link>
          <Link
            href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold px-10 py-4 rounded-full min-h-[56px] text-lg transition-all hover:-translate-y-0.5 no-underline"
          >
            💬 WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
