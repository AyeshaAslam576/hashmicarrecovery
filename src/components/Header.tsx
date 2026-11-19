"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconClose } from "./Icons";

const NAV_LINKS = [
  { label: "Home",          href: "#home" },
  { label: "Services",      href: "#services" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact",       href: "#contact" },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setOpen(false);

  return (
    <header
      className={`bg-[#0B0F17] sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link
            href="#home"
            onClick={closeNav}
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
          >
            <Image
              src="/images/mylogo.jpg"
              alt="Hashmi Car Recovery Logo"
              width={64}
              height={64}
              className="rounded-full object-contain logo-spin"
              priority
            />
            <span className="font-bold text-white text-lg leading-tight">
              Hashmi Car Recovery
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/85 text-sm font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors block no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="tel:03001658231"
            className="hidden lg:flex items-center gap-2 bg-[#15803D] text-white font-semibold px-5 py-3 rounded-lg min-h-[48px] hover:bg-[#166534] transition-colors no-underline flex-shrink-0 text-sm"
          >
            📞 Call 0300 1658231
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden border-t border-white/10 pb-4">
            <ul className="list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-white/5">
                  <Link
                    href={link.href}
                    onClick={closeNav}
                    className="text-white/85 text-base font-medium px-2 py-3 hover:text-white hover:bg-white/5 transition-colors block no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2">
              <Link
                href="tel:03001658231"
                onClick={closeNav}
                className="flex items-center justify-center gap-2 bg-[#15803D] text-white font-semibold px-5 py-3 rounded-lg min-h-[48px] hover:bg-[#166534] transition-colors no-underline w-full text-center"
              >
                📞 Call 0300 1658231
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
