import type { T } from './types'

export const it: T = {
  lang: 'it',

  nav: {
    about:      'About',
    skills:     'Skills',
    experience: 'Esperienza',
    projects:   'Progetti',
    contact:    'Contatti',
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

  experience: {
    sectionNum: '03.',
    title:      'Esperienza',
    present:    'Presente',
    items: [
      {
        company:     'ReActive | Gruppo AlmavivA',
        role:        'Frontend Developer',
        from:        'Dic 2023',
        to:          'Presente',
        current:     true,
        description: 'Sviluppo Frontend in ambito bancario per Banca D\'Italia, Intesa SanPaolo e BPER Banca.',
        tags:        ['Angular', 'React', 'TypeScript', 'JWT', 'Banking'],
        accent:      '#00e5ff',
      },
      {
        company:     'Gruppo ISEI srl',
        role:        'Frontend Developer',
        from:        'Gen 2022',
        to:          'Dic 2023',
        current:     false,
        description: 'Sviluppo software su stack Angular / Spring Boot. Progetti per pubblica amministrazione e ambito bancario (architettura DARWIN). Prototipazione UI/UX con Figma e sviluppo Next.js.',
        tags:        ['Angular', 'Next.js', 'Spring Boot', 'Figma'],
        accent:      '#a855f7',
      },
      {
        company:     'Accademia Italiana Fitness',
        role:        'Full Stack Developer / Analyst',
        from:        'Dic 2021',
        to:          'Gen 2022',
        current:     false,
        description: 'Gestione e sviluppo gestionale interno e applicazione clienti.',
        tags:        ['PHP', 'MySQL', 'JavaScript'],
        accent:      '#00e5ff',
      },
      {
        company:     'F-Informatica',
        role:        'Back-end Developer',
        from:        'Apr 2021',
        to:          'Ago 2021',
        current:     false,
        description: 'Sviluppo procedure PL-SQL su tecnologia Oracle / T-SQL Microsoft.',
        tags:        ['Oracle', 'SQL', 'PL-SQL', 'T-SQL', 'Git'],
        accent:      '#a855f7',
      },
      {
        company:     'Progei Srl',
        role:        'Programmatore PLC',
        from:        'Set 2017',
        to:          'Apr 2021',
        current:     false,
        description: 'Programmazione PLC e sistemi di supervisione su tecnologie SAIA-Burgess / Movicon.',
        tags:        ['PLC', 'SAIA-Burgess', 'Movicon', 'Assembly'],
        accent:      '#00e5ff',
      },
    ],
  },

  projects: {
    sectionNum: '04.',
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
    sectionNum: '05.',
    title:    'Contatti',
    filename: 'contact.sh',
    whoami:   'Valerio Pinsone — Frontend Developer',
    line1:    'Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?',
    line2:    'Scrivimi.',
    github:   'github',
    linkedin: 'linkedin',
  },

  footer: {
    built: '// built with Astro & Tailwind CSS',
  },
}
