import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/components/data";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo className="[&_*]:text-white" imageClassName="h-14 w-14" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Premium massage therapy for relaxation, recovery, and whole-body wellness.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="rounded-full border border-white/15 p-3 text-white/80 hover:text-white" href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a className="rounded-full border border-white/15 p-3 text-white/80 hover:text-white" href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <a href={`mailto:${business.email}`} className="flex items-center gap-2">
              <Mail size={16} /> {business.email}
            </a>
            <a href={`tel:${business.tel}`} className="flex items-center gap-2">
              <Phone size={16} /> {business.phone}
            </a>
            <a href={business.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Houston area
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/55">
        Copyright {new Date().getFullYear()} Debra Bailey Massage Therapy. All rights reserved.
      </div>
    </footer>
  );
}
