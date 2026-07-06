import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Star } from "lucide-react";
import { benefits, business, serviceCards, testimonials, wellnessPoints } from "@/components/data";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-cream">
        <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section flex flex-col justify-center py-14 lg:py-20">
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.28em] text-clay">Luxury wellness care</p>
            <h1 className="mt-5 animate-rise font-serif text-5xl font-semibold leading-[0.98] text-ink md:text-7xl">
              {business.name}
            </h1>
            <p className="mt-6 max-w-2xl animate-rise text-2xl font-medium leading-snug text-eucalyptus">
              Professional Massage Therapy for Relaxation, Recovery & Wellness
            </p>
            <p className="mt-5 max-w-xl animate-rise text-base leading-8 text-ink/68">
              Thoughtful, client-centered massage therapy designed to ease tension, support recovery, and create a calm reset for body and mind.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={business.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-eucalyptus px-7 py-3.5 font-semibold text-white shadow-soft transition hover:bg-ink">
                <MessageCircle size={18} /> WhatsApp Debra
              </a>
              <a href={`tel:${business.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 font-semibold text-ink transition hover:bg-white">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          <div className="relative flex min-h-[560px] items-center justify-center bg-[#efe4d9] px-5 py-8 lg:min-h-full lg:px-10">
            <Image
              src={business.mainImage}
              alt={business.mainImageAlt}
              width={720}
              height={1280}
              priority
              className="h-full max-h-[calc(100vh-112px)] w-auto max-w-full rounded-[8px] object-contain shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center" id="about">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">About Debra</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-5xl">Care that feels refined, personal, and restorative.</h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-ink/68">
          <p>
            Debra Bailey provides professional massage therapy rooted in careful listening, skilled touch, and respect for each client&apos;s comfort. Every session is tailored to your goals, whether you need deep muscular relief, quiet relaxation, or support for ongoing wellness.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {wellnessPoints.map((point) => (
              <div key={point.title} className="rounded-[8px] border border-ink/10 bg-white p-5">
                <point.icon className="text-eucalyptus" size={24} />
                <h3 className="mt-4 font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/62">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55">
        <div className="section">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Services</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-5xl">Therapeutic sessions for every wellness goal.</h2>
            </div>
            <Link href="/services" className="font-semibold text-eucalyptus hover:text-ink">View all services</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceCards.slice(0, 3).map((service) => (
              <article key={service.title} className="rounded-[8px] bg-cream p-6 shadow-soft">
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-ink/65">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-eucalyptus">{service.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-5 md:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[8px] border border-ink/10 bg-white p-6">
              <benefit.icon className="text-clay" size={26} />
              <h3 className="mt-5 font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-eucalyptus text-white">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Testimonials</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Trusted by clients who value excellent care.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[8px] bg-white/10 p-6 ring-1 ring-white/15">
                <div className="flex gap-1 text-[#f4d28f]">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-white/82">&quot;{testimonial.text}&quot;</p>
                <p className="mt-5 font-semibold">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55" id="contact">
        <div className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Contact</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Questions about massage therapy?</h2>
            <div className="mt-8 space-y-4 text-ink/70">
              <a className="flex items-center gap-3" href={`mailto:${business.email}`}><Mail size={20} className="text-eucalyptus" /> {business.email}</a>
              <a className="flex items-center gap-3" href={business.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} className="text-eucalyptus" /> WhatsApp Debra</a>
              <a className="flex items-center gap-3" href={`tel:${business.tel}`}><Phone size={20} className="text-eucalyptus" /> {business.phone}</a>
            </div>
            <div className="mt-8 rounded-[8px] border border-ink/10 bg-cream p-5">
              <h3 className="font-semibold">Business Hours</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">Monday-Friday: 9:00 AM-6:00 PM<br />Saturday: 10:00 AM-3:00 PM<br />Sunday: Contact for availability</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Direct Contact</p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ink">Speak with Debra</h3>
            <p className="mt-4 leading-7 text-ink/66">
              Message Debra on WhatsApp or call directly with questions about services and wellness goals.
            </p>
            <a href={business.whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-eucalyptus px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-ink sm:w-auto">
              <MessageCircle size={18} />
              WhatsApp Debra
            </a>
            <div className="mt-6 rounded-[8px] bg-linen p-5">
              <p className="text-sm font-semibold text-ink">Prefer to call?</p>
              <a href={`tel:${business.tel}`} className="mt-2 flex items-center gap-2 text-ink/70">
                <Phone size={18} className="text-eucalyptus" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
