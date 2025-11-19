import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hajatiana Danielson ANDRIANJAKA | Ingénieur Informatique Full Stack",
    template: "%s | Hajatiana ANDRIANJAKA"
  },
  description: "Ingénieur informatique passionné, je transforme les besoins métier en solutions techniques performantes. Expert en développement web/mobile et en architecture logicielle, j'allie compétences techniques pointues et capacité à piloter des projets d'envergure.",
  keywords: [
    "Ingénieur informatique",
    "Développeur Full Stack",
    "Développeur Web",
    "Développeur Mobile",
    "React",
    "Next.js",
    "Flutter",
    "PHP",
    "Laravel",
    "Madagascar",
    "ENI",
    "Architecte logiciel",
    "Responsable technique",
    "CodeIgniter",
    "MySQL",
    "PostgreSQL"
  ],
  authors: [{ name: "Hajatiana Danielson ANDRIANJAKA" }],
  creator: "Hajatiana Danielson ANDRIANJAKA",
  publisher: "Hajatiana Danielson ANDRIANJAKA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hajatiana.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hajatiana Danielson ANDRIANJAKA | Ingénieur Informatique Full Stack",
    description: "Ingénieur informatique passionné, je transforme les besoins métier en solutions techniques performantes. Expert en développement web/mobile et en architecture logicielle.",
    url: 'https://hajatiana.vercel.app',
    siteName: 'Portfolio Hajatiana ANDRIANJAKA',
    images: [
      {
        url: '/images/og-image.jpg', // ⚠️ Créez cette image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Hajatiana Danielson ANDRIANJAKA - Ingénieur Informatique',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hajatiana Danielson ANDRIANJAKA | Ingénieur Informatique Full Stack",
    description: "Ingénieur informatique passionné, expert en développement web/mobile et architecture logicielle.",
    images: ['/images/og-image.jpg'], // ⚠️ Même image que Open Graph
    creator: '@votretwitter', // ⚠️ Si vous avez Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9vsZvAhOKf8t8h1gF9r-d3v5UpamXPCA7GImUAQf0tk',
    // yandex: 'votre-code-yandex',
    // bing: 'votre-code-bing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hajatiana Danielson ANDRIANJAKA",
              "url": "https://hajatiana.vercel.app", // ⚠️ CHANGEZ
              "image": "https://hajatiana.vercel.app/images/profile.jpg", // ⚠️ CHANGEZ
              "sameAs": [
                "https://www.linkedin.com/in/hda04",
                "https://github.com/hajatiana-daji",
                "https://facebook.com/hajatiana.andrianjaka.2025"
              ],
              "jobTitle": "Ingénieur Informatique",
              "worksFor": {
                "@type": "Organization",
                "name": "CELAVI"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "École Nationale d'Informatique (ENI)",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "MG"
                }
              },
              "email": "arias.hajatiana@gmail.com",
              "telephone": "+261346551171",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MG",
                "addressRegion": "Madagascar"
              },
              "description": "Ingénieur informatique passionné, je transforme les besoins métier en solutions techniques performantes.",
              "knowsAbout": [
                "Développement Web",
                "Développement Mobile",
                "React",
                "Next.js",
                "Flutter",
                "PHP",
                "Laravel",
                "Architecture logicielle"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}