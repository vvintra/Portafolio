/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages
  output: 'export',  // Genera archivos estáticos
  // Establece el path base para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Miira-web-portfolio' : '',
  // Deshabilita la optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
  },
  // Permite usar imágenes externas
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'v0.blob.com'],
    unoptimized: true,
  },
  // GitHub Pages no soporta rutas sin extensión, así que cambiamos esto
  trailingSlash: true,
};

export default nextConfig;

