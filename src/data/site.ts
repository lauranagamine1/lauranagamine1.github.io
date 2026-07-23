/**
 * Site-wide content. Everything a non-developer would want to change lives
 * here — copy, links, projects, skills. Components read from this file only.
 */
import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLeetcode,
  SiCodeforces,
  SiGoogledrive,
} from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa6'
import type {
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  TimelineEntry,
} from '@/types'

export const PERSON = {
  name: 'Laura Nagamine',
  role: 'Computer Science Student',
  location: 'Lima, Peru',
  email: 'lauranagamine18@gmail.com',
  university: 'University of Engineering and Technology (UTEC)',
  intro:
    'Computer Science student passionate about software engineering, artificial intelligence, data science, and building applications that create real impact.',
  /** Replace with your own resume PDF in /public. */
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Laura-Nagamine-Resume.pdf',
} as const

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

/** Small stat strip under the hero. */
export const HERO_STATS = [
  { value: 'UTEC', label: 'Computer Science' },
  { value: '2027', label: 'Expected graduation' },
  { value: 'Lima', label: 'Peru · open to relocate' },
] as const

// --- About -----------------------------------------------------------------

/** Placeholder copy — edit freely. */
export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a Computer Science undergraduate at UTEC in Lima, Peru, with a solid analytical foundation and a record of academic dedication. I like turning complex, messy problems into software that is clear, scalable, and genuinely useful to the people using it.",
  'My interests sit at the intersection of software engineering, artificial intelligence, and data science — from designing full stack applications and cloud architectures to training and evaluating machine learning models. I care about writing code that is maintainable, well tested, and pleasant for the next person to read.',
  "Outside of coursework I'm an active member of ACM-W and the Open Source Software Club, where I help organize events that make tech a more welcoming space. I'm always learning something new, and I do my best work on teams that share ideas openly and push each other to improve.",
]

export const ABOUT_INTERESTS: string[] = [
  'Software Engineering',
  'Artificial Intelligence',
  'Full Stack Development',
  'Data Science',
  'Learning New Technologies',
  'Continuous Improvement',
  'Team Work',
]

// --- Skills ----------------------------------------------------------------

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: SiCplusplus,
    accent: 'blush',
    skills: ['C++', 'C', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: SiReact,
    accent: 'sky',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: SiSpringboot,
    accent: 'mint',
    skills: ['Spring Boot', 'FastAPI'],
  },
  {
    title: 'Databases',
    icon: SiPostgresql,
    accent: 'butter',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: SiGit,
    accent: 'blush',
    skills: ['Git', 'GitHub', 'Docker', 'Linux'],
  },
  {
    title: 'Data & AI',
    icon: SiPython,
    accent: 'sky',
    skills: ['Machine Learning', 'Data Structures & Algorithms', 'AWS'],
  },
]

// --- Projects --------------------------------------------------------------

/**
 * Six project cards. Swap `github` / `demo` for real URLs, or set either to
 * `null` to hide that button.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Multitenancy Ecommerce System',
    description:
      'A scalable grocery store platform built on AWS with a serverless multitenant architecture, using Lambda for backend logic and Elasticsearch for fast, relevant product search.',
    tag: 'Cloud Computing',
    tech: ['AWS Lambda', 'Elasticsearch', 'React', 'Serverless'],
    accent: 'blush',
    github: 'https://github.com/lauranagamine1',
    demo: null,
  },
  {
    title: 'Lumi — AI Teaching Assistant',
    description:
      'An AI-driven educational platform with a specialized chatbot and gamified quizzes, featuring separate teacher and student portals plus safety filters designed for children.',
    tag: 'Software Engineering',
    tech: ['React', 'Python', 'LLM APIs', 'PostgreSQL'],
    accent: 'sky',
    github: 'https://github.com/lauranagamine1',
    demo: '#',
  },
  {
    title: 'Handwritten Text OCR',
    description:
      'A character recognition system reaching over 96% accuracy, comparing Random Forest, Decision Trees and Logistic Regression, with a custom visualizer built to validate model performance.',
    tag: 'Machine Learning',
    tech: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib'],
    accent: 'mint',
    github: 'https://github.com/lauranagamine1',
    demo: null,
  },
  {
    title: 'Project Title Four',
    description:
      'Short description of the project — what problem it solves, what you built, and the part you are most proud of. Replace this placeholder with your own copy.',
    tag: 'Full Stack',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    accent: 'butter',
    github: 'https://github.com/lauranagamine1',
    demo: '#',
  },
  {
    title: 'Project Title Five',
    description:
      'Short description of the project — what problem it solves, what you built, and the part you are most proud of. Replace this placeholder with your own copy.',
    tag: 'Data Science',
    tech: ['Python', 'FastAPI', 'Pandas'],
    accent: 'blush',
    github: 'https://github.com/lauranagamine1',
    demo: null,
  },
  {
    title: 'Project Title Six',
    description:
      'Short description of the project — what problem it solves, what you built, and the part you are most proud of. Replace this placeholder with your own copy.',
    tag: 'Algorithms',
    tech: ['C++', 'Data Structures', 'CMake'],
    accent: 'sky',
    github: 'https://github.com/lauranagamine1',
    demo: null,
  },
]

// --- Resume ----------------------------------------------------------------

export const EDUCATION: TimelineEntry[] = [
  {
    title: 'B.Sc. in Computer Science',
    organization: 'University of Engineering and Technology (UTEC)',
    period: 'Mar 2023 — Dec 2027',
    location: 'Lima, Peru',
    points: [],
  },
  {
    title: 'International Baccalaureate — Bilingual Diploma',
    organization: 'Peruvian North American Abraham Lincoln School',
    period: 'Mar 2021 — Nov 2022',
    location: 'Lima, Peru',
    points: [],
  },
]

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: 'Active Member — ACM-W & Open Source Software Club',
    organization: 'UTEC Student Organizations',
    period: '2025',
    location: 'Lima, Peru',
    points: [
      'Helped establish the first university chapter dedicated to supporting women in tech, organizing networking events and research conferences.',
      'Collaborated on multidisciplinary research and technical workshops promoting open-source culture.',
    ],
  },
  {
    title: 'English Teacher for Children with Limited Resources',
    organization: 'Hacedores (PROA) — Volunteering',
    period: 'Aug 2023 — Oct 2023',
    location: 'Lima, Peru',
    points: [
      'Designed and taught twice-weekly grammar and communication lessons for children in vulnerable communities — 48 hours served.',
    ],
  },
]

export const LANGUAGES = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'Mandarin Chinese', level: 'A1' },
] as const

// --- Contact ---------------------------------------------------------------

/** Placeholder links — swap in your real profiles. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/lauranagamine1',
    icon: SiGithub,
    accent: 'blush',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-profile',
    icon: FaLinkedinIn,
    accent: 'sky',
  },
  {
    label: 'Email',
    href: `mailto:${PERSON.email}`,
    icon: HiOutlineMail,
    accent: 'mint',
  },
  {
    label: 'GitLab',
    href: 'https://gitlab.com/your-username',
    icon: SiGitlab,
    accent: 'butter',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/your-username',
    icon: SiLeetcode,
    accent: 'blush',
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/your-username',
    icon: SiCodeforces,
    accent: 'sky',
  },
  {
    label: 'Certificates',
    href: 'https://drive.google.com/your-folder-link',
    icon: SiGoogledrive,
    accent: 'mint',
  },
]
