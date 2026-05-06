import type { T } from './types'

export const en: T = {
  lang: 'en',

  nav: {
    about:    'About',
    skills:   'Skills',
    projects: 'Projects',
    contact:  'Contact',
  },

  hero: {
    label:        'Frontend Developer',
    greeting:     "Hi, I'm",
    sub:          'I build modern, performant interfaces with Angular, React and Astro.',
    cta_projects: '[ View Projects ]',
    cta_contact:  '[ Contact Me ]',
    scroll:       'SCROLL',
  },

  about: {
    sectionNum: '01.',
    title: 'About',
    p1: "I'm a Frontend Developer passionate about crafted interfaces and clean code. I mainly work with Angular, React and Astro.",
    p2: 'I love building fast, accessible and enjoyable web experiences, paying close attention to detail at both the visual and performance levels.',
    p3: "When I'm not writing code, I explore new tools, design systems and everything that revolves around the modern web.",
    stats: {
      years:    { count: 7,  suffix: '+', label: 'Years exp.'  },
      projects: { count: 10, suffix: '+', label: 'Projects'    },
      stack:    { count: 5,  label: 'Tech stack' },
    },
    profile: {
      filename:      'profile.json',
      locationLabel: 'location',
      locationValue: '"Italy"',
      availLabel:    'availability',
      availValue:    '"open to work"',
      focusLabel:    'focus',
      focusValue:    '"Frontend / UI"',
      emailLabel:    'email',
    },
  },

  skills: {
    sectionNum: '02.',
    title: 'Skills',
    categories: {
      framework: 'Framework',
      languages: 'Languages',
      styling:   'Styling',
      tools:     'Tools',
    },
  },

  projects: {
    sectionNum: '03.',
    title: 'Projects',
    items: [
      {
        title:       'QReactive Menu',
        description: 'Digital menu via QR code with a Node.js backend and Angular frontend.',
        tags:   ['Angular', 'Node.js', 'REST API'],
        href:   '#',
        accent: '#00e5ff',
      },
      {
        title:       'Portfolio',
        description: 'This portfolio, built with Astro, React and Tailwind CSS.',
        tags:   ['Astro', 'React', 'Tailwind'],
        href:   '#',
        accent: '#a855f7',
      },
      {
        title:       'GraphQL + Tailwind',
        description: 'Exploration project for GraphQL with a UI built in Tailwind.',
        tags:   ['GraphQL', 'Tailwind', 'React'],
        href:   '#',
        accent: '#00e5ff',
      },
    ],
  },

  contact: {
    sectionNum: '04.',
    title:    'Contact',
    filename: 'contact.sh',
    whoami:   'Valerio Pinsone — Frontend Developer',
    line1:    'Have a project in mind or just want to say hi?',
    line2:    'Write me.',
    github:   'github',
    linkedin: 'linkedin',
  },

  footer: {
    built: '// built with Astro & Tailwind CSS',
  },
}
