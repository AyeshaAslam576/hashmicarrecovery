export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/923001658231?text=Hello%2C%20I%20need%20car%20recovery%20assistance."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl focus:outline-none group"
      style={{ background: "#25D366" }}
    >
      {/* Outer ping ring */}
      <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ background: "#25D366" }} />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="relative w-9 h-9 drop-shadow group-hover:scale-110 transition-transform duration-200"
        fill="white"
      >
        <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 10L4 44l10.3-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.1 1.6 1.6-5.9-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.3-2.4-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.7-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5.1 8 7.1 1.1.5 2 .8 2.7 1 1.1.4 2.2.3 3 .2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z" />
      </svg>

      {/* Tooltip label */}
      <span className="absolute right-20 bg-white text-green-700 font-semibold text-sm px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
