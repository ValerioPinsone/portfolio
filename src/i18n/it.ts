import type { T } from './types'

export const it: T = {
  lang: 'it',

  nav: {
    about:    'About',
    skills:   'Skills',
    projects: 'Progetti',
    contact:  'Contatti',
  },

  hero: {
    label:        'Frontend Developer',
    greeting:     'Ciao, sono',
    sub:          'Costruisco interfacce moderne e performanti con Angular, React e Astro.',
    cta_projects: '[ Vedi i progetti ]',
    cta_contact:  '[ Contattami ]',
    scroll:       'SCORRI',
  },

  about: {
    sectionNum: '01.',
    title: 'Chi sono',
    p1: 'Sono un Frontend Developer con la passione per le interfacce curate e il codice pulito. Lavoro principalmente con Angular, React e Astro.',
    p2: 'Mi piace costruire esperienze web veloci, accessibili e piacevoli da usare, prestando attenzione ai dettagli sia a livello visivo che di performance.',
    p3: 'Quando non scrivo codice, esploro nuovi strumenti, design system e tutto ciò che riguarda il mondo del web moderno.',
    stats: {
      years:    { count: 7,  suffix: '+', label: 'Anni esp.'  },
      projects: { count: 10, suffix: '+', label: 'Progetti'   },
      stack:    { count: 5,  label: 'Tech stack' },
    },
    profile: {
      filename:      'profile.json',
      locationLabel: 'posizione',
      locationValue: '"Italia"',
      availLabel:    'disponibilità',
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
      languages: 'Linguaggi',
      styling:   'Styling',
      tools:     'Tools',
    },
  },

  projects: {
    sectionNum: '03.',
    title: 'Progetti',
    items: [
      {
        title:       'QReactive Menu',
        description: 'Menu digitale via QR code con backend Node.js e frontend Angular.',
        tags:   ['Angular', 'Node.js', 'REST API'],
        href:   '#',
        accent: '#00e5ff',
      },
      {
        title:       'Portfolio',
        description: 'Questo portfolio, costruito con Astro, React e Tailwind CSS.',
        tags:   ['Astro', 'React', 'Tailwind'],
        href:   '#',
        accent: '#a855f7',
      },
      {
        title:       'GraphQL + Tailwind',
        description: 'Progetto di esplorazione di GraphQL con UI costruita in Tailwind.',
        tags:   ['GraphQL', 'Tailwind', 'React'],
        href:   '#',
        accent: '#00e5ff',
      },
    ],
  },

  contact: {
    sectionNum: '04.',
    title:    'Contatti',
    filename: 'contact.sh',
    whoami:   'Valerio Pinsone — Frontend Developer',
    line1:    'Hai un progetto in mente o vuoi semplicemente dire ciao?',
    line2:    'Scrivimi.',
    github:   'github',
    linkedin: 'linkedin',
  },

  footer: {
    built: '// built with Astro & Tailwind CSS',
  },
}
