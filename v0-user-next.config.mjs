/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Necesario para GitHub Pages
  images: {
    unoptimized: true,  // Requerido para exportación estática
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
  // Descomenta y modifica la siguiente línea si tu repositorio no se llama username.github.io
  // basePath: '/Portafolio',
};

export default nextConfig;

