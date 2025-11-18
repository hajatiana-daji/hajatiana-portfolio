import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Si vous avez des routes API privées
    },
    sitemap: 'https://hajatiana.vercel.app/sitemap.xml',
  };
}