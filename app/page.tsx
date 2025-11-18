import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Ingénieur informatique Full Stack spécialisé en développement web et mobile.",
  openGraph: {
    title: "Hajatiana ANDRIANJAKA | Ingénieur Informatique",
    description: "Portfolio professionnel - Projets web et mobile.",
    url: "https://hajatiana.vercel.app",
    images: ["/images/og-image.jpg"],
  },
};

import Home from "./HomeClient";

export default function Page() {
  return <Home />;
}
