export const profile = {
  name: 'Nicolas Ariza',
  role: 'Frontend Developer',
  location: 'Bogotá, Colombia',
  summary:
    'Desarrollador frontend con 2 años construyendo un SaaS legal en React y TypeScript, más un año como freelance en Shopify. Me gusta dejar interfaces claras, componentes reutilizables y código que el siguiente dev entienda sin pedir ayuda.',
  email: 'niko.esteban.2006@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas-ariza-36830a3b0/',
  github: 'https://github.com/ariza823',
}

export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'TanStack Query',
  'Astro',
  'Tailwind CSS',
  'Atomic Design',
  'Storybook',
  'Vitest + Testing Library',
  'APIs REST',
  'AWS (S3, CloudFront, CodePipeline)',
  'Shopify',
  'Git / GitHub Actions',
]

export const experience = [
  {
    company: 'litigando.com',
    role: 'Frontend Developer',
    period: 'Ene 2025 – Oct 2026',
    points: [
      'Desarrollo de la aplicación web de un SaaS legal con React, TypeScript y Redux Toolkit.',
      'Construcción de componentes reutilizables siguiendo Atomic Design e implementación de modo oscuro.',
      'Participación en la migración del frontend de Vercel a AWS (S3 + CloudFront + CodePipeline).',
      'Integración con APIs REST y trabajo diario con el equipo de backend y producto.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Desarrollador Shopify',
    period: '1 año',
    points: ['Personalización de tiendas Shopify para clientes: temas, secciones y ajustes de diseño.'],
  },
]

export const education = [
  { title: 'Ingeniería de Sistemas (en curso)', place: 'Fundación Universitaria Konrad Lorenz', year: '2026 –' },
  { title: 'Certificado en Inteligencia Artificial', place: 'Konrad Lorenz', year: '2026' },
  { title: 'Técnico en Desarrollo de Software', place: 'SENA', year: '2025' },
]

export const projects = [
  {
    name: 'Dashboard SaaS',
    description:
      'Panel de gestión de casos con KPIs, gráfico, tabla con filtros, orden y paginación, y modo oscuro persistente.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Tailwind', 'Vitest'],
    repo: 'https://github.com/ariza823/saas-dashboard',
    demo: 'https://ariza823.github.io/saas-dashboard/',
  },
  {
    name: 'Countries Explorer',
    description:
      'Buscador de países sobre la API de REST Countries con caché, filtros en la URL, paginación y vista de detalle.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'React Router', 'Tailwind', 'Vitest'],
    repo: 'https://github.com/ariza823/countries-explorer',
    demo: 'https://ariza823.github.io/countries-explorer/',
  },
  {
    name: 'UI Kit',
    description:
      'Librería de componentes accesibles organizada con Atomic Design, documentada en Storybook y con tests.',
    stack: ['React', 'TypeScript', 'Storybook', 'Tailwind', 'Testing Library'],
    repo: 'https://github.com/ariza823/ui-kit',
    demo: 'https://ariza823.github.io/ui-kit/',
  },
]
