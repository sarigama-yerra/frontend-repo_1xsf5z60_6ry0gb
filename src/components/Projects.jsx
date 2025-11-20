import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Kanban',
    description: 'Collaborative board with drag-and-drop, optimistic updates, and websocket presence.',
    tags: ['React', 'FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Design System',
    description: 'Themeable component library with tokens, dark-mode, and accessibility baked-in.',
    tags: ['Radix', 'Tailwind', 'Storybook'],
    link: '#',
    repo: '#'
  },
  {
    title: 'AI Docs Copilot',
    description: 'Semantic search over documentation with RAG, feedback loops, and analytics.',
    tags: ['RAG', 'OpenAI', 'Embeddings'],
    link: '#',
    repo: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#" className="text-slate-300 hover:text-white">View all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md hover:border-white/20 hover:bg-slate-900/80 transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white group-hover:text-white/90">{p.title}</h3>
                <div className="flex items-center gap-2 text-slate-300">
                  <a href={p.repo} className="p-2 rounded-lg hover:bg-white/5"><Github size={18}/></a>
                  <a href={p.link} className="p-2 rounded-lg hover:bg-white/5"><ExternalLink size={18}/></a>
                </div>
              </div>
              <p className="mt-2 text-slate-300/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
