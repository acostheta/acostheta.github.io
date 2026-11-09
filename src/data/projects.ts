import type { Locale } from '../i18n/ui';

export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  urlLabel: string;
  image?: string;
  technologies: string[];
  highlights: string[];
  live: boolean;
}

export const projects: Record<Locale, Project[]> = {
  es: [
    {
      name: 'Literudo',
      tagline: 'Blog y galería de la Agrupación Estudiantil Literudo',
      description:
        'Plataforma web para publicar artículos, poesía, narrativa y galería de imágenes y videos de la comunidad de la Universidad de Oriente. Incluye autenticación, comentarios, reacciones y un backoffice de administración con roles y moderación de contenido.',
      url: 'https://literudo.online',
      urlLabel: 'literudo.online',
      image: '/img/literudo-screenshot.png',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'MUI', 'Supabase', 'TipTap'],
      highlights: [
        'Publicación de artículos, poesía y ensayos',
        'Galería de imágenes y videos embebidos',
        'Comentarios y reacciones por publicación',
        'Backoffice con roles y moderación',
        'Auth y base de datos con Supabase (RLS)',
      ],
      live: true,
    },
  ],
  en: [
    {
      name: 'Literudo',
      tagline: 'Blog and gallery of the Literudo Student Group',
      description:
        'Web platform to publish articles, poetry, narrative and an image and video gallery from the Universidad de Oriente community. Includes authentication, comments, reactions and an admin backoffice with roles and content moderation.',
      url: 'https://literudo.online',
      urlLabel: 'literudo.online',
      image: '/img/literudo-screenshot.png',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'MUI', 'Supabase', 'TipTap'],
      highlights: [
        'Publishing of articles, poetry and essays',
        'Image and embedded video gallery',
        'Comments and reactions per post',
        'Backoffice with roles and moderation',
        'Auth and database with Supabase (RLS)',
      ],
      live: true,
    },
  ],
};
