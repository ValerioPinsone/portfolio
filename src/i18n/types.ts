export type Lang = 'en' | 'it'

export interface NavT {
  about:      string
  skills:     string
  experience: string
  projects:   string
  contact:    string
}

export interface HeroT {
  label: string
  greeting: string
  sub: string
  cta_projects: string
  cta_contact: string
  scroll: string
}

export interface AboutT {
  sectionNum: string
  title: string
  p1: string
  p2: string
  p3: string
  stats: {
    years:    { count: number; suffix: string; label: string }
    projects: { count: number; suffix: string; label: string }
    stack:    { count: number; label: string }
  }
  profile: {
    filename:      string
    locationLabel: string
    locationValue: string
    availLabel:    string
    availValue:    string
    focusLabel:    string
    focusValue:    string
    emailLabel:    string
  }
}

export interface SkillsT {
  sectionNum: string
  title: string
  categories: {
    framework: string
    languages: string
    styling:   string
    tools:     string
  }
}

export interface ProjectItem {
  title:       string
  description: string
  tags:        string[]
  href:        string
  accent:      string
}

export interface ProjectsT {
  sectionNum: string
  title:      string
  items:      ProjectItem[]
}

export interface ContactT {
  sectionNum: string
  title:      string
  filename:   string
  whoami:     string
  line1:      string
  line2:      string
  github:     string
  linkedin:   string
}

export interface ExperienceItem {
  company:     string
  role:        string
  from:        string
  to:          string
  current:     boolean
  description: string
  tags:        string[]
  accent:      string
}

export interface ExperienceT {
  sectionNum: string
  title:      string
  present:    string
  items:      ExperienceItem[]
}

export interface FooterT {
  built: string
}

export interface T {
  lang:       Lang
  nav:        NavT
  hero:       HeroT
  about:      AboutT
  skills:     SkillsT
  experience: ExperienceT
  projects:   ProjectsT
  contact:    ContactT
  footer:     FooterT
}
