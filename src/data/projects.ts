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
      name: 'Truck Manager',
      tagline: 'Sistema de gestión para talleres de vehículos pesados',
      description:
        'El taller de camiones y flotas usaba una plataforma externa de pago y me encargaron una hecha a su medida. Hoy tiene su propio software que centraliza órdenes de trabajo, facturas e inventario, sin mensualidades. Hecho en Flutter con Riverpod y Supabase; la versión pública es una demo con datos ficticios.',
      url: 'https://truck-manager-demo.web.app',
      urlLabel: 'la demo',
      badge: 'DEMO',
      image: '/img/truck-manager-screenshot.png',
      imageBg: '#FFFFFF',
      technologies: [
        'Flutter',
        'Dart',
        'Riverpod',
        'GoRouter',
        'Supabase',
        'PDF',
        'fl_chart',
        'Firebase',
      ],
      highlights: [
        'Dashboard con ventas, gastos, margen y gráficos',
        'Clientes, flotas y órdenes de trabajo (kanban)',
        'Estimaciones y facturas en PDF',
        'Inventario, técnicos y control de accesos',
        'Demo sin backend con datos ficticios',
      ],
      live: true,
    },
    {
      name: 'PoleBarns CRM',
      tagline: 'CRM + ERP para construcción de estructuras Post-Frame',
      description:
        'El mismo caso: usaban una plataforma de pago y construyeron la suya propia. Además, gestionaban proyectos, facturas y nómina en plataformas distintas; ahora lo tienen todo en una sola app. Hecho en Flutter con Riverpod y Supabase, organizado como monorepo con Melos.',
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
        'Literudo es una agrupación estudiantil recién creada que quería darse a conocer en la universidad y mostrarse como un espacio para promover la literatura: un poco de arte en una universidad científica. El blog es el punto de encuentro donde los escritores muestran su talento. Hecho con Next.js, React y Supabase (auth y base de datos con RLS).',
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
      name: 'Truck Manager',
      tagline: 'Management system for heavy-vehicle workshops',
      description:
        'The truck and fleet workshop used a paid third-party platform and asked me to build one tailored to them. Today they have their own software that centralizes work orders, invoices and inventory, with no monthly fees. Built with Flutter, Riverpod and Supabase; the public version is a demo with fictional data.',
      url: 'https://truck-manager-demo.web.app',
      urlLabel: 'the live demo',
      badge: 'DEMO',
      image: '/img/truck-manager-screenshot.png',
      imageBg: '#FFFFFF',
      technologies: [
        'Flutter',
        'Dart',
        'Riverpod',
        'GoRouter',
        'Supabase',
        'PDF',
        'fl_chart',
        'Firebase',
      ],
      highlights: [
        'Dashboard with sales, expenses, margin and charts',
        'Clients, fleets and kanban work orders',
        'PDF estimates and invoices',
        'Inventory, technicians and access control',
        'Backend-free demo with fictional data',
      ],
      live: true,
    },
    {
      name: 'PoleBarns CRM',
      tagline: 'CRM + ERP for Post-Frame construction',
      description:
        'Same story: they used a paid platform and built their own. On top of that, they managed projects, invoices and payroll across separate tools; now it is all in one app. Built with Flutter, Riverpod and Supabase in a Melos monorepo.',
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
        'Literudo is a newly formed student group that wanted to make itself known at the university and present itself as a space to promote literature: a bit of art in a science-driven university. The blog is where writers meet to showcase their talent. Built with Next.js, React and Supabase (auth and database with RLS).',
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
