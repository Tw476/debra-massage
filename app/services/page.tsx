import type { Metadata } from "next";
import { serviceCards } from "@/components/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Swedish, deep tissue, sports, prenatal, hot stone, and relaxation massage therapy services."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-linen">
        <div className="section py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Services</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-tight md:text-7xl">Massage therapy tailored to your body and your goals.</h1>
          <p className="mt-6 max-w-2xl leading-8 text-ink/66">Explore massage therapy services tailored for relaxation, recovery, and whole-body wellness.</p>
        </div>
      </section>
      <section className="section">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="flex min-h-[340px] flex-col rounded-[8px] bg-white p-6 shadow-soft">
              <h2 className="font-serif text-3xl font-semibold">{service.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-ink/65">{service.description}</p>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between gap-4 border-t border-ink/10 pt-4">
                  <dt className="font-semibold">Duration</dt>
                  <dd className="text-right text-ink/65">{service.duration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold">Price</dt>
                  <dd className="text-right text-ink/65">{service.price}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
