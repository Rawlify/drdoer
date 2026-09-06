import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Expert Academic, Assignment & Software Development Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "assignment help",
    "academic writing services",
    "website development Sri Lanka",
    "software development Rawlify",
    "custom admin panels",
    "domain mapping",
    "CV writing",
    "professional cover letters",
    "graphic design services",
    "Sinhala typing",
    "Sinhala translation",
    "Sri Lanka assignment services",
    "business management assignments",
    "HR assignment help",
    "plagiarism-free assignment writing",
  ],
  authors: [{ name: "DrDoer", url: siteConfig.url }],
  creator: "DrDoer",
  publisher: "DrDoer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Expert Assignment & Software Development Services`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/LandingHome.jpg",
        width: 1200,
        height: 630,
        alt: "DrDoer Academic & Software Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Expert Assignment & Web Services`,
    description: siteConfig.description,
    images: ["/assets/LandingHome.jpg"],
    creator: "@drdoer",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for LocalBusiness / ProfessionalService
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Sri Lanka",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DrDoer Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website & Software Development",
            description:
              "Static and full-stack web applications with admin panels, backend APIs, and custom domain mapping in collaboration with Rawlify starting from 20,000 LKR ($70 USD).",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assignment Services",
            description:
              "Custom plagiarism-free assignment writing in Management, HR, Logistics, Marketing, and Business Studies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design Services",
            description:
              "Advertisements, social media graphics, and business cards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional CV & Cover Letters",
            description:
              "Resume and cover letter creation tailored to career goals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sinhala Typing and Translation",
            description:
              "Accurate Sinhala typing and bilingual translation services.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FCFF] text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
