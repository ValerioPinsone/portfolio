import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SkillItem {
  name:  string
  level: number
}
interface Category {
  category: string
  accent:   string
  items:    SkillItem[]
}
interface Props {
  categories: Category[]
}

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

function SkillBar({ name, level, accent, delay }: SkillItem & { accent: string; delay: number }) {
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

function SkillCard({ category, accent, items, index }: Category & { index: number }) {
  const { shineRef, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(12)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-zinc-900/80 border border-zinc-800 hover:border-cyan-400/30 rounded p-6 transition-colors duration-300 overflow-hidden"
    >
      {/* shine overlay */}
      <div ref={shineRef} className="absolute inset-0 pointer-events-none z-10 rounded" />

      <div className="relative z-20">
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
            delay={index * 0.1 + i * 0.12}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsGrid({ categories }: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
      {categories.map((cat, i) => (
        <SkillCard key={cat.category} {...cat} index={i} />
      ))}
    </div>
  )
}
