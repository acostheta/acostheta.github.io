# acostheta.github.io

Portafolio profesional de **Luis Alberto Acosta Jiménez** (acostheta), construido con
[Astro](https://astro.build), TypeScript y [Tailwind CSS](https://tailwindcss.com).

> Desarrollador Mobile (Flutter) · QA · Gestión de Proyectos

## Características

- 🌐 Bilingüe (ES/EN) con selector de idioma: `/es/` y `/en/`.
- ⚡ Sitio estático, rápido y sin JavaScript innecesario.
- 🎨 Estilo plano con paleta propia (Cloud Dancer, azul rey, grafito, negro suave).
- 🧩 Secciones: Hero, Sobre mí (con stack), Servicios, Experiencia, Portafolio y Contacto.
- ✉️ Formulario de contacto conectado a Formspree.
- 🚀 Despliegue automático a GitHub Pages con GitHub Actions.

## Paleta

| Color | Hex |
| --- | --- |
| Cloud Dancer (fondo) | `#F0EEE9` |
| Azul rey (acento) | `#4169E1` |
| Negro suave (oscuros) | `#1B1B1B` |
| Grafito (texto secundario) | `#555555` |
| Gris claro (bordes) | `#DED9D0` |

## Desarrollo

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo (http://localhost:4321)
npm run build   # compila a dist/
npm run preview # previsualiza la build
```

## Estructura

```
src/
├── components/    # Header, Hero, About, Services, Experience, Contact, Footer...
├── data/          # servicios, experiencia y proyectos (contenido bilingüe)
├── i18n/ui.ts     # textos de interfaz en ES/EN
├── layouts/       # BaseLayout (SEO + Open Graph)
├── pages/         # rutas (/, /es/, /en/, 404)
└── styles/        # paleta y estilos base (Tailwind)
public/            # imágenes (afoto.jpg) y favicon
```

## Despliegue

El push a la rama `master` dispara el workflow `.github/workflows/deploy.yml`, que compila y publica a GitHub Pages.

> ⚠️ En los ajustes del repositorio (`Settings → Pages`), el *Source* debe estar en **GitHub Actions**.

## Contacto

El formulario usa Formspree (`https://formspree.io/f/xvzenarj`). Si cambias de cuenta o formulario,
actualiza `FORM_ENDPOINT` en `src/components/Contact.astro`.
