import type { Metadata } from "next";
import { Award, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Debra Bailey's professional massage therapy approach, experience, qualifications, and wellness mission."
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-linen">
        <div className="section py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">About</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ink md:text-7xl">Professional massage therapy centered on trust, comfort, and results.</h1>
        </div>
      </section>
      <section className="section grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[8px] bg-white p-7 shadow-soft">
          <h2 className="font-serif text-3xl font-semibold">Debra Bailey</h2>
          <p className="mt-4 leading-8 text-ink/66">
            Debra Bailey offers massage therapy for clients seeking relief from tension, recovery support, and a consistently calming wellness experience. Her approach combines professionalism, attentive intake, and session plans that respect each client&apos;s needs.
          </p>
        </div>
        <div className="space-y-6 leading-8 text-ink/68">
          <p>
            Each session is designed around clear communication. Debra reviews your goals, preferred pressure, comfort considerations, and areas of focus before beginning. The result is bodywork that feels intentional, composed, and personal.
          </p>
          <p>
            Qualifications include professional training in relaxation massage, therapeutic pressure techniques, body mechanics, client draping standards, and wellness-focused session planning. Continuing education and client feedback guide an evolving, client-centered practice.
          </p>
          <p>
            Mission: to help clients feel more comfortable in their bodies through massage therapy that is respectful, restorative, and grounded in excellent care.
          </p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { icon: Award, title: "Experienced care", text: "Skilled techniques selected for relaxation, relief, and recovery goals." },
            { icon: ShieldCheck, title: "Professional standards", text: "Clean, private, respectful sessions with clear boundaries and communication." },
            { icon: HeartHandshake, title: "Client-first approach", text: "Pressure, pacing, and focus areas are adapted to your comfort." },
            { icon: Leaf, title: "Wellness mission", text: "Restorative care that supports everyday balance and long-term well-being." }
          ].map((item) => (
            <article key={item.title} className="rounded-[8px] bg-white p-6 shadow-soft">
              <item.icon className="text-eucalyptus" size={26} />
              <h3 className="mt-5 font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
