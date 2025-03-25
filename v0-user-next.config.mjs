/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'v0.blob.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'vercel-storage.com',
      'public.blob.vercel-storage.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimiza el rendimiento en producción
  swcMinify: true,
  // Mejora la compatibilidad con diferentes navegadores
  transpilePackages: ['framer-motion', 'react-type-animation'],
  // Configuración para mejorar el rendimiento de las imágenes
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;

