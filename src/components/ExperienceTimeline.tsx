import { motion } from 'framer-motion'

interface ExperienceItem {
  company:     string
  role:        string
  from:        string
  to:          string
  current:     boolean
  description: string
  tags:        string[]
  accent:      string
}

interface Props {
  items:   ExperienceItem[]
  present: string
}

function TimelineCard({ item, index, present }: { item: ExperienceItem; index: number; present: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/40 via-zinc-700/60 to-transparent" />

      {/* dot */}
      <div className="absolute left-[-5px] top-[7px]">
        {item.current ? (
          <span className="relative flex h-[11px] w-[11px]">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
              style={{ background: item.accent }}
            />
            <span
              className="relative inline-flex rounded-full h-[11px] w-[11px]"
              style={{ background: item.accent }}
            />
          </span>
        ) : (
          <span
            className="block h-[11px] w-[11px] rounded-full border-2"
            style={{ borderColor: item.accent }}
          />
        )}
      </div>

      {/* card */}
      <motion.div
        className="ml-4 bg-zinc-900/80 border border-zinc-800 rounded p-5"
        whileHover={{ borderColor: `${item.accent}50` }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-mono text-sm font-semibold text-white">{item.role}</h3>
            <p className="font-mono text-xs mt-0.5" style={{ color: item.accent }}>{item.company}</p>
          </div>
          <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
            {item.from} → {item.current
              ? <span style={{ color: item.accent }}>{present}</span>
              : item.to}
          </span>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded border"
              style={{ borderColor: `${item.accent}40`, color: item.accent, background: `${item.accent}0d` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline({ items, present }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, i) => (
        <TimelineCard key={`${item.company}-${item.from}`} item={item} index={i} present={present} />
      ))}
    </div>
  )
}
