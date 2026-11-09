import type { Locale } from '../i18n/ui';

export interface Service {
  icon: 'mobile' | 'qa' | 'pm';
  title: string;
  desc: string;
}

export interface Job {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const services: Record<Locale, Service[]> = {
  es: [
    {
      icon: 'mobile',
      title: 'Desarrollo Mobile',
      desc: 'Apps Android, iOS y PWA con Flutter + Dart. Backend con Supabase o Firebase, autenticación y publicación en tiendas.',
    },
    {
      icon: 'qa',
      title: 'QA y Testing',
      desc: 'Casos de prueba funcionales, regresión, integración y UI/UX. Control de calidad end-to-end con reportes en Trello.',
    },
    {
      icon: 'pm',
      title: 'Gestión de Proyectos',
      desc: 'Planificación ágil, coordinación de equipos remotos y comunicación estructurada para entregas predecibles y sin fricción.',
    },
  ],
  en: [
    {
      icon: 'mobile',
      title: 'Mobile Development',
      desc: 'Android, iOS and PWA apps with Flutter + Dart. Supabase or Firebase backend, authentication and store publishing.',
    },
    {
      icon: 'qa',
      title: 'QA & Testing',
      desc: 'Functional, regression, integration and UI/UX test cases. End-to-end quality control with Trello reports.',
    },
    {
      icon: 'pm',
      title: 'Project Management',
      desc: 'Agile planning, remote team coordination and structured communication for predictable, frictionless deliveries.',
    },
  ],
};

export const experience: Record<Locale, Job[]> = {
  es: [
    {
      period: '12/2025 – 07/2026',
      role: 'Desarrollador Flutter',
      company: 'Progrese Asesoría · México (Remoto)',
      bullets: [
        'Apps multiplataforma Android/Web con Flutter, Dart, Riverpod y Supabase.',
        'Orquestación de agentes IA para co-creación de código y debugging.',
        'Auto-QA con casos de prueba detallados previo a releases.',
        'Despliegue de PWAs y builds para Google Play Store.',
      ],
    },
    {
      period: '10/2024 – 12/2025',
      role: 'Desarrollador Web y No-Code',
      company: 'Progrese Asesoría · México (Remoto)',
      bullets: [
        'Soluciones empresariales con Google AppSheet.',
        'Auto-verificación de flujos de trabajo y recolección de datos.',
        'Identificación de oportunidades de mejora técnica continua.',
      ],
    },
    {
      period: '07/2023 – 06/2024',
      role: 'Project Manager',
      company: 'Alaxatech · Remoto',
      bullets: [
        'Gestión de métricas y roadmap: planificación y ejecución, definición de sprints y monitoreo de métricas clave.',
        'Liderazgo ágil y ceremonias Scrum con ClickUp y Parabol.',
        'Gestión de stakeholders: requerimientos del cliente en tareas accionables y priorización de riesgos.',
        'Documentación centralizada en Notion.',
      ],
    },
    {
      period: '02/2023 – 07/2023',
      role: 'Product Owner',
      company: 'Alaxatech · Remoto',
      bullets: [
        'Levantamiento de requerimientos funcionales y definición de la visión del producto.',
        'Liderazgo de proyectos en equipos multidisciplinarios bajo metodologías ágiles.',
        'Seguimiento del avance mediante ClickUp e identificación de oportunidades de valor.',
      ],
    },
    {
      period: '07/2021 – 01/2023',
      role: 'QA Analyst',
      company: 'Alaxatech · Remoto',
      bullets: [
        'Pruebas funcionales, de interfaz y experiencia de usuario (UI/UX) y UAT.',
        'Administración del ciclo de vida de Bug Fixing y trazabilidad de errores en Trello.',
      ],
    },
  ],
  en: [
    {
      period: '12/2025 – 07/2026',
      role: 'Flutter Developer',
      company: 'Progrese Asesoría · Mexico (Remote)',
      bullets: [
        'Cross-platform Android/Web apps with Flutter, Dart, Riverpod and Supabase.',
        'Orchestration of AI agents for code co-creation and debugging.',
        'Self-QA with detailed test cases prior to releases.',
        'PWA deployment and Google Play Store builds.',
      ],
    },
    {
      period: '10/2024 – 12/2025',
      role: 'Web & No-Code Developer',
      company: 'Progrese Asesoría · Mexico (Remote)',
      bullets: [
        'Enterprise solutions with Google AppSheet.',
        'Self-verification of workflows and data collection.',
        'Identification of continuous technical improvement opportunities.',
      ],
    },
    {
      period: '07/2023 – 06/2024',
      role: 'Project Manager',
      company: 'Alaxatech · Remote',
      bullets: [
        'Metrics & roadmap management: planning, execution, sprint definition and key metric monitoring.',
        'Agile leadership and Scrum ceremonies with ClickUp and Parabol.',
        'Stakeholder management: turning client requirements into actionable tasks and risk prioritization.',
        'Centralized documentation in Notion.',
      ],
    },
    {
      period: '02/2023 – 07/2023',
      role: 'Product Owner',
      company: 'Alaxatech · Remote',
      bullets: [
        'Gathering functional requirements and defining the product vision.',
        'Leading projects in multidisciplinary teams under agile methodologies.',
        'Progress tracking via ClickUp and identification of value opportunities.',
      ],
    },
    {
      period: '07/2021 – 01/2023',
      role: 'QA Analyst',
      company: 'Alaxatech · Remote',
      bullets: [
        'Functional, UI/UX and User Acceptance Testing (UAT).',
        'Bug Fixing lifecycle management and bug traceability in Trello.',
      ],
    },
  ],
};

export const stack = [
  'Flutter',
  'Dart',
  'Riverpod',
  'Supabase',
  'Firebase',
  'Google AppSheet',
  'Gemini',
  'DeepSeek',
  'GLM',
  'QA & Testing',
  'Scrum',
  'ClickUp',
  'Trello',
  'Notion',
  'Git / GitHub',
  'Linux',
  'Docker',
];
