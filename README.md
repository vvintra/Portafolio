# Lucas Lisandro Arroyo · Portafolio

Portafolio personal de desarrollo, ingeniería y comunidad. Construido con Next.js, TypeScript, Tailwind CSS y Framer Motion, con una identidad visual inspirada en Bauhaus.

## Sitios

- Vercel: https://lucas-arroyo-portafolio.vercel.app
- GitHub Pages: https://vvintra.github.io/Portafolio/

## Desarrollo

Requiere Node.js 24 y npm.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm start
```

## Publicación

Vercel compila con la configuración predeterminada de Next.js. GitHub Actions genera una exportación estática con `GITHUB_PAGES=true` y el prefijo `/Portafolio`, y la publica en GitHub Pages en cada push a `main`.

`NEXT_PUBLIC_SITE_URL` permite cambiar la URL canónica. Por defecto, los metadatos y el sitemap apuntan al sitio principal en Vercel.

## Funciones

- Proyectos con enlaces públicos (Sizoft, tumostrador, ortografin), trayectoria, certificaciones y galería navegable con botones y teclado.
- Tema claro/oscuro y navegación adaptable a celulares.
- Formulario de contacto que prepara un borrador en la aplicación de correo del visitante. El visitante debe enviarlo desde allí; no requiere un servicio de correo externo.
- Metadatos para compartir, imagen Open Graph, favicon, robots y sitemap.
