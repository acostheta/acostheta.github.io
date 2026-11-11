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
        'Un taller de vehículos pesados pagaba mes a mes una plataforma de terceros que no terminaba de encajar y no dejaba de subir de precio. Construimos Truck Manager y ahora tienen su propio sistema, adaptado a su operación, que reúne órdenes de trabajo, facturación, inventario, clientes y control de accesos en un solo lugar; nunca más pagaron una mensualidad. En cuanto a la implementación, es una app Flutter Web y Móvil para ser consultada en cualquier dispositivo. Lo que verás es una réplica en forma de demo, sin datos reales.',
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
        'Una constructora de caballerizas (estructuras post-frame) pagaba una plataforma para gestionar sus proyectos, otra para facturar y otra para nómina: tres pagos diferentes todos los meses. Construimos PoleBarns y ahora tienen un CRM/ERP hecho a medida: cálculo de materiales para estimación, invoicing, seguimiento del progreso en tiempo real, registro de pago de nómina y destajos; todo en un solo lugar. A nivel técnico, está hecho en Flutter para ser accesible en multiplataforma: web para los dueños y contadores en oficina, y apps Android e iOS para los trabajadores en campo.',
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
        'Literudo es una agrupación estudiantil nueva que quería darse a conocer en la Universidad de Oriente y mostrarse como un espacio para promover la literatura en el campus. Así nació Literudo Online: un blog donde los escritores publican y muestran su talento, con cuentas, comentarios, reacciones y un panel de administración con moderación. En cuanto a su arquitectura, está hecho con Next.js y React (TypeScript), y Supabase para autenticación y base de datos. Cuenta con un backoffice donde los autores publican sus escritos y reciben comentarios y reacciones que, al aprobarse por la editorial, se publican en la página principal.',
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
        'A heavy-vehicle workshop was paying a third-party platform month after month; it never quite fit and the price kept going up. We built Truck Manager and now they have their own system, tailored to their operation, that brings together work orders, invoicing, inventory, clients and access control in one place—they never paid a monthly fee again. On the implementation side, it is a Flutter Web and Mobile app built to be used on any device. What you see here is a demo replica with no real data.',
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
        'A barn construction company (post-frame structures) was paying for one platform to manage its projects, another to invoice and another for payroll: three different payments every month. We built PoleBarns and now they have a custom CRM/ERP: material estimation, invoicing, real-time progress tracking, payroll and piece-rate payments—all in one place. On the technical side, it is built in Flutter to be cross-platform: web for owners and accountants in the office, and Android and iOS apps for field workers.',
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
        'Literudo is a new student group that wanted to make itself known at the Universidad de Oriente and present itself as a space to promote literature on campus. That is how Literudo Online was born: a blog where writers publish and showcase their talent, with accounts, comments, reactions and an admin panel with moderation. In terms of architecture, it is built with Next.js and React (TypeScript), and Supabase for authentication and database. It has a backoffice where authors publish their writings and receive comments and reactions that, once approved by the editorial team, are published on the main page.',
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
