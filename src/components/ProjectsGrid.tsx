import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { ProjectItem } from '../i18n/types'

interface Props {
  projects: ProjectItem[]
}

// stiffness bassa = risposta lenta (peso), damping basso = oscillazione al rilascio
function useTilt(intensity = 14) {
  const shineRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 80, damping: 15 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 80, damping: 15 })

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    x.set(nx - 0.5)
    y.set(ny - 0.5)
    if (shineRef.current) {
      shineRef.current.style.backgroundImage =
        `radial-gradient(circle at ${nx * 100}% ${ny * 100}%, rgba(255,255,255,0.07) 0%, transparent 65%)`
    }
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
    if (shineRef.current) shineRef.current.style.backgroundImage = 'none'
  }

  return { shineRef, rotateX, rotateY, onMouseMove, onMouseLeave }
}

function ProjectCard({ title, description, tags, href, accent, index }: ProjectItem & { index: number }) {
  const [hovered, setHovered] = useState(false)
  const { shineRef, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt()

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: 'easeOut' }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        boxShadow: hovered
          ? `0 0 0 1px ${accent}55, 0 0 32px ${accent}22`
          : '0 0 0 1px rgba(39,39,42,1)',
      }}
      onMouseMove={(e) => { onMouseMove(e); setHovered(true) }}
      onMouseLeave={(e) => { onMouseLeave(e); setHovered(false) }}
      className="group relative bg-zinc-900/80 backdrop-blur rounded flex flex-col gap-4 cursor-pointer overflow-hidden transition-shadow duration-300"
    >
      {/* shine overlay — aggiornato via ref, nessun re-render */}
      <div ref={shineRef} className="absolute inset-0 pointer-events-none z-10 rounded" />

      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }} />

      <div className="relative z-20 px-6 pb-6 flex flex-col gap-4 flex-1">
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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} {...project} index={i} />
      ))}
    </div>
  )
}
