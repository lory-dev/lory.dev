import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'lory.dev',
    short_name: 'Lory',
    description: 'game developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/ico',
      },
      {
        src: '/favicon.ico',
        sizes: '512x512',
        type: 'image/ico',
      },
    ],
  }
}
