/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Necesario para GitHub Pages
  basePath: '/Portafolio',  // Ajusta esto al nombre exacto de tu repositorio
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
  // Configuración experimental corregida
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
    // Eliminado 'images' de aquí, ya que debe estar en el nivel superior
  },
};

export default nextConfig;

