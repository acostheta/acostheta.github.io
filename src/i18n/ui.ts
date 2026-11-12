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
    'hero.title': 'Desarrollador de Software',
    'hero.shortBio':
      'Ayudo a empresas a digitalizar sus operaciones con software que se adapta 100% a la forma en que trabajan.',
    'hero.tagline': 'Desarrollador Mobile • QA • Gestión de proyectos',
    'hero.bio':
      'Como desarrollador y gestor de proyectos, me encargo del ciclo completo: diseño e implemento aplicaciones web y móviles a medida, listas para producción y enfocadas en resolver las necesidades reales de tu negocio.',
    'hero.cta': 'Contacto',

    'about.title': 'Sobre mí',
    'about.body1':
      'Desarrollador Móvil especializado en Flutter con sólida experiencia en metodologías de desarrollo acelerado asistido por Inteligencia Artificial Generativa. Dirijo agentes avanzados de IA (Gemini, DeepSeek, GLM) para la co-creación rápida de código, arquitectura de sistemas, refactorización y diagnóstico de errores en tiempo real.',
    'about.body2':
      'Complementado con un trasfondo como QA Analyst y mi especialidad como Project Manager. Me desenvuelvo en el planteamiento de objetivos y pasos a seguir para llevar una forma de trabajo con estructura y trazabilidad, fácil de adaptar a imprevistos y nuevas solicitudes.',
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
    'contact.whatsapp.me': 'o escríbeme por WhatsApp',
    'contact.whatsapp': 'Abrir chat',
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
    'hero.title': 'Software Developer',
    'hero.shortBio':
      'I help companies digitize their operations with software that adapts 100% to the way they work.',
    'hero.tagline': 'Mobile Developer • QA • Project Management',
    'hero.bio':
      'As a developer and project manager, I handle the full cycle: I design and build custom web and mobile applications, production-ready and focused on solving real business needs.',
    'hero.cta': 'Contact',

    'about.title': 'About me',
    'about.body1':
      'Mobile Developer specialized in Flutter with solid experience in accelerated development methodologies assisted by Generative AI. I direct advanced AI agents (Gemini, DeepSeek, GLM) for rapid code co-creation, system architecture, refactoring and real-time bug diagnosis.',
    'about.body2':
      'Complemented by a background as QA Analyst and my specialization as Project Manager. I focus on defining goals and the steps to follow to build a structured, traceable way of working that is easy to adapt to unforeseen events and new requests.',
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
    'contact.whatsapp.me': 'or message me on WhatsApp',
    'contact.whatsapp': 'Open chat',
    'contact.location': 'Maturín, Monagas, Venezuela',

    'footer.note': 'Made with love by',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function t(lang: Locale, key: UIKey): string {
  return ui[lang][key];
}
