export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'nav.main': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',

    'hero.name': 'Luis Alberto Acosta Jiménez',
    'hero.title': 'Servicios de TI',
    'hero.tagline': 'Desarrollador Mobile • QA • Gestión de proyectos',
    'hero.bio':
      'Ayudo a empresas, startups y emprendedores a transformar sus ideas en aplicaciones móviles y web (PWA) funcionales, escalables y listas para producción en tiempos récord.',
    'hero.cta': 'Contacto',

    'about.title': 'Sobre mí',
    'about.body1':
      'Desarrollador Móvil especializado en Flutter con sólida experiencia en metodologías de desarrollo acelerado asistido por Inteligencia Artificial Generativa. Dirijo agentes avanzados de IA (Gemini, DeepSeek, GLM) para la co-creación rápida de código, arquitectura de sistemas, refactorización y diagnóstico de errores en tiempo real.',
    'about.body2':
      'Complementado con un trasfondo en QA Analyst (Alaxatech) y Project Management (Platzi Specialist), aplico rigurosos casos de prueba para verificar y autoevaluar mi propio código, entregando productos altamente estables, escalables y con mínimos errores a producción.',
    'about.stack': 'Stack tecnológico',

    'services.title': 'Servicios',
    'services.subtitle': 'Lo que puedo hacer por tu proyecto',

    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Cosas que he construido',
    'portfolio.see': 'Ver en',
    'project.live': 'En vivo',

    'experience.title': 'Experiencia',
    'experience.subtitle': 'Trayectoria profesional',

    'contact.title': 'Contacto',
    'contact.pitch': '¿Tienes un proyecto en mente? Hablemos.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando…',
    'contact.sent': 'Mensaje enviado. ¡Gracias!',
    'contact.error': 'Error al enviar. Intenta de nuevo.',
    'contact.social': 'o encuéntrame en',
    'contact.email.me': 'o escríbeme a',
    'contact.location': 'Maturín, Monagas, Venezuela',

    'footer.note': 'Hecho con cariño por',
  },
  en: {
    'nav.main': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.name': 'Luis Alberto Acosta Jiménez',
    'hero.title': 'IT Services',
    'hero.tagline': 'Mobile Developer • QA • Project Management',
    'hero.bio':
      'I help companies, startups and entrepreneurs turn their ideas into functional, scalable, production-ready mobile and web (PWA) apps in record time.',
    'hero.cta': 'Contact',

    'about.title': 'About me',
    'about.body1':
      'Mobile Developer specialized in Flutter with solid experience in accelerated development methodologies assisted by Generative AI. I direct advanced AI agents (Gemini, DeepSeek, GLM) for rapid code co-creation, system architecture, refactoring and real-time bug diagnosis.',
    'about.body2':
      'Complemented by a background as QA Analyst (Alaxatech) and Project Management (Platzi Specialist), I apply rigorous test cases to verify and self-evaluate my own code, delivering highly stable, scalable products with minimal errors to production.',
    'about.stack': 'Tech stack',

    'services.title': 'Services',
    'services.subtitle': 'What I can do for your project',

    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Things I have built',
    'portfolio.see': 'Visit',
    'project.live': 'Live',

    'experience.title': 'Experience',
    'experience.subtitle': 'Professional background',

    'contact.title': 'Contact',
    'contact.pitch': 'Got a project in mind? Let\'s talk.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending…',
    'contact.sent': 'Message sent. Thank you!',
    'contact.error': 'Failed to send. Please try again.',
    'contact.social': 'or find me on',
    'contact.email.me': 'or email me at',
    'contact.location': 'Maturín, Monagas, Venezuela',

    'footer.note': 'Made with love by',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function t(lang: Locale, key: UIKey): string {
  return ui[lang][key];
}
