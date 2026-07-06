import type { Metadata } from "next";
import { business } from "@/components/data";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";

const siteUrl = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Debra Bailey Massage Therapy | Relaxation, Recovery & Wellness",
    template: "%s | Debra Bailey Massage Therapy"
  },
  description:
    "Professional massage therapy for relaxation, recovery, and wellness, including Swedish, deep tissue, sports, prenatal, hot stone, and relaxation massage.",
  keywords: ["massage therapy", "Debra Bailey", "Swedish massage", "deep tissue massage", "sports massage", "prenatal massage"],
  openGraph: {
    title: "Debra Bailey Massage Therapy",
    description: "Professional Massage Therapy for Relaxation, Recovery & Wellness",
    type: "website",
    images: [
      {
        url: business.mainImage,
        alt: business.mainImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Debra Bailey Massage Therapy",
    description: "Professional Massage Therapy for Relaxation, Recovery & Wellness",
    images: [business.mainImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: business.name,
    email: business.email,
    telephone: business.phone,
    image: business.mainImage,
    url: siteUrl,
    priceRange: "$$",
    sameAs: []
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
