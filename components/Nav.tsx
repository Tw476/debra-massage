"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { business } from "@/components/data";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#contact", label: "Contact" }
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-cream/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <Logo priority imageClassName="h-12 w-12" />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink/75 transition hover:text-eucalyptus">
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-eucalyptus px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink md:inline-flex"
        >
          <MessageCircle size={16} aria-hidden />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-ink/10 bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-base font-medium text-ink">
                {link.label}
              </Link>
            ))}
            <a href={business.whatsapp} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-eucalyptus px-5 py-3 text-center font-semibold text-white">
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
