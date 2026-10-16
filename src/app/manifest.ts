import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bubona | Heritage Meets Tomorrow',
    short_name: 'Bubona',
    description: 'Solana-funded clothing brand. Wear your story.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#14b8a6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
}