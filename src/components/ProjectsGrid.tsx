import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { ProjectItem } from '../i18n/types'

interface Props {
  projects: ProjectItem[]
}

function ProjectCard({ title, description, tags, href, accent, index }: ProjectItem & { index: number }) {
  const ref = useRef<HTMLAnchorElement>(null!)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function onMouseLeave() { x.set(0); y.set(0); setHovered(false) }

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: 'easeOut' }}
      style={{
        rotateX, rotateY, transformStyle: 'preserve-3d',
        boxShadow: hovered
          ? `0 0 0 1px ${accent}55, 0 0 32px ${accent}22`
          : '0 0 0 1px rgba(39,39,42,1)',
      }}
      onMouseMove={(e) => { onMouseMove(e); setHovered(true) }}
      onMouseLeave={onMouseLeave}
      className="group bg-zinc-900/80 backdrop-blur rounded flex flex-col gap-4 cursor-pointer overflow-hidden transition-shadow duration-300"
    >
      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }} />

      <div className="px-6 pb-6 flex flex-col gap-4 flex-1">
        <span className="font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, '0')}.</span>
        <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-1 rounded border border-zinc-700 text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} {...project} index={i} />
      ))}
    </div>
  )
}
