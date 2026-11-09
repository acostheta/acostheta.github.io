import type { Locale } from '../i18n/ui';

export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  urlLabel: string;
  image?: string;
  imageBg?: string;
  technologies: string[];
  highlights: string[];
  badge?: string;
  live: boolean;
}

export const projects: Record<Locale, Project[]> = {
  es: [
    {
      name: 'PoleBarns CRM',
      tagline: 'CRM + ERP para construcción de estructuras Post-Frame',
      description:
        'Plataforma empresarial para contratistas que construyen caballerizas, establos y naves Post-Frame. Cubre el flujo completo: cálculo paramétrico de estructuras, lista de materiales (BOM), presupuestos y facturas en PDF, gestión de clientes, seguimiento de obra, cuentas por pagar y nómina de cuadrillas.',
      url: 'https://polebarns-crm-demo.web.app',
      urlLabel: 'la demo',
      badge: 'DEMO',
      image: '/img/polebarns-screenshot.png',
      imageBg: '#F9FAFB',
      technologies: [
        'Flutter',
        'Dart',
        'Riverpod',
        'Supabase',
        'PostgreSQL',
        'Melos',
        'Firebase',
      ],
      highlights: [
        'Calculador paramétrico de estructuras + BOM',
        'Cotizaciones y facturas en PDF',
        'CRM de clientes y seguimiento de obra',
        'Cuentas por pagar y nómina de cuadrillas',
        'Roles (RBAC) y seguridad RLS en Supabase',
      ],
      live: true,
    },
    {
      name: 'Literudo',
      tagline: 'Blog y galería de la Agrupación Estudiantil Literudo',
      description:
        'Plataforma web para publicar artículos, poesía, narrativa y galería de imágenes y videos de la comunidad de la Universidad de Oriente. Incluye autenticación, comentarios, reacciones y un backoffice de administración con roles y moderación de contenido.',
      url: 'https://literudo.online',
      urlLabel: 'literudo.online',
      image: '/img/literudo-screenshot.png',
      imageBg: '#F5EEE6',
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
      name: 'PoleBarns CRM',
      tagline: 'CRM + ERP for Post-Frame construction',
      description:
        'Enterprise platform for contractors building pole barns, stables and post-frame structures. Covers the full workflow: parametric structural estimation, bill of materials (BOM), PDF quotes and invoices, client management, project tracking, accounts payable and crew payroll.',
      url: 'https://polebarns-crm-demo.web.app',
      urlLabel: 'the live demo',
      badge: 'DEMO',
      image: '/img/polebarns-screenshot.png',
      imageBg: '#F9FAFB',
      technologies: [
        'Flutter',
        'Dart',
        'Riverpod',
        'Supabase',
        'PostgreSQL',
        'Melos',
        'Firebase',
      ],
      highlights: [
        'Parametric structural estimator + BOM',
        'PDF quotes and invoices',
        'Client CRM and project tracking',
        'Accounts payable and crew payroll',
        'Role-based access (RBAC) and Supabase RLS',
      ],
      live: true,
    },
    {
      name: 'Literudo',
      tagline: 'Blog and gallery of the Literudo Student Group',
      description:
        'Web platform to publish articles, poetry, narrative and an image and video gallery from the Universidad de Oriente community. Includes authentication, comments, reactions and an admin backoffice with roles and content moderation.',
      url: 'https://literudo.online',
      urlLabel: 'literudo.online',
      image: '/img/literudo-screenshot.png',
      imageBg: '#F5EEE6',
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
