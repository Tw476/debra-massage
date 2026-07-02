import Link from "next/link";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  priority?: boolean;
};

export function Logo({ className = "", imageClassName = "h-12 w-12", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 text-left ${className}`} aria-label="Debra Bailey Massage Therapy home">
      <span className={`flex shrink-0 items-center justify-center rounded-full bg-eucalyptus font-serif font-semibold text-white ring-1 ring-clay/25 ${imageClassName}`}>
        DB
      </span>
      {showText ? (
        <span className="leading-tight">
          <span className="block font-serif text-xl font-semibold text-ink">Debra Bailey</span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-clay">Massage Therapy</span>
        </span>
      ) : null}
    </Link>
  );
}
