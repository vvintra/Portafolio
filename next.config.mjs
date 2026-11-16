const githubPages = process.env.GITHUB_PAGES === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(githubPages ? { output: "export", basePath: "/Portafolio" } : {}),
  images: {
    unoptimized: githubPages,
    remotePatterns: [
      { protocol: "https", hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" },
    ],
  },
}

export default nextConfig
