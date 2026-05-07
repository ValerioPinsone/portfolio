import type { T } from './types'

export const en: T = {
  lang: 'en',

  nav: {
    about:      'About',
    skills:     'Skills',
    experience: 'Experience',
    projects:   'Projects',
    contact:    'Contact',
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

  experience: {
    sectionNum: '03.',
    title:      'Experience',
    present:    'Present',
    items: [
      {
        company:     'ReActive | Gruppo AlmavivA',
        role:        'Frontend Developer',
        from:        'Dec 2023',
        to:          'Present',
        current:     true,
        description: 'Frontend development in the banking sector for Banca D\'Italia, Intesa SanPaolo and BPER Banca.',
        tags:        ['Angular', 'TypeScript', 'Banking'],
        accent:      '#00e5ff',
      },
      {
        company:     'Gruppo ISEI srl',
        role:        'Frontend Developer',
        from:        'Jan 2022',
        to:          'Dec 2023',
        current:     false,
        description: 'Software development on Angular / Spring Boot stack. Projects for public administration and the banking sector (DARWIN architecture). UI/UX design with Figma and Next.js development.',
        tags:        ['Angular', 'Next.js', 'Spring Boot', 'Figma'],
        accent:      '#a855f7',
      },
      {
        company:     'Accademia Italiana Fitness',
        role:        'Full Stack Developer / Analyst',
        from:        'Dec 2021',
        to:          'Jan 2022',
        current:     false,
        description: 'Development of internal management systems and client-facing applications.',
        tags:        ['PHP', 'MySQL', 'JavaScript'],
        accent:      '#00e5ff',
      },
      {
        company:     'F-Informatica',
        role:        'Back-end Developer',
        from:        'Apr 2021',
        to:          'Aug 2021',
        current:     false,
        description: 'Development of PL-SQL stored procedures on Oracle and T-SQL Microsoft technologies.',
        tags:        ['Oracle', 'PL-SQL', 'T-SQL'],
        accent:      '#a855f7',
      },
      {
        company:     'Progei Srl',
        role:        'PLC Programmer',
        from:        'Sep 2017',
        to:          'Apr 2021',
        current:     false,
        description: 'PLC programming and supervision systems on SAIA-Burgess / Movicon technologies.',
        tags:        ['PLC', 'SAIA-Burgess', 'Movicon'],
        accent:      '#00e5ff',
      },
    ],
  },

  projects: {
    sectionNum: '04.',
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
    sectionNum: '05.',
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
