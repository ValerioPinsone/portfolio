import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Framework',
    accent: '#00e5ff',
    items: [
      { name: 'Angular',    level: 85 },
      { name: 'React',      level: 80 },
      { name: 'Astro',      level: 70 },
    ],
  },
  {
    category: 'Linguaggi',
    accent: '#a855f7',
    items: [
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    category: 'Styling',
    accent: '#00e5ff',
    items: [
      { name: 'Tailwind CSS',       level: 90 },
      { name: 'SCSS',               level: 78 },
      { name: 'Angular Material',   level: 82 },
    ],
  },
  {
    category: 'Tools',
    accent: '#a855f7',
    items: [
      { name: 'Git',      level: 85 },
      { name: 'Vite',     level: 80 },
      { name: 'GraphQL',  level: 70 },
    ],
  },
]

function SkillBar({ name, level, accent, delay }: { name: string; level: number; accent: string; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-zinc-300 text-sm">{name}</span>
        <span className="font-mono text-xs text-zinc-500">{level}%</span>
      </div>
      <div className="h-[3px] bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
          className="h-full rounded-full"
          style={{ background: accent }}
        />
      </div>
    </div>
  )
}

export default function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map(({ category, accent, items }, ci) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.1, duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-900/80 border border-zinc-800 hover:border-cyan-400/30 rounded p-6 transition-colors duration-300"
          style={{ '--accent': accent } as React.CSSProperties}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-4 rounded-sm" style={{ background: accent }} />
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {category}
            </h3>
          </div>
          {items.map(({ name, level }, i) => (
            <SkillBar
              key={name}
              name={name}
              level={level}
              accent={accent}
              delay={ci * 0.1 + i * 0.12}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}
