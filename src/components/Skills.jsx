import { Code2, Rocket, Cpu, Boxes } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React + Vite', 'Tailwind + Radix', 'Framer Motion', 'Accessibility'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'MongoDB', 'Auth & JWT', 'REST & WebSockets'] },
  { icon: Boxes, title: 'Systems', items: ['CI/CD', 'Docker', 'Vercel', 'Cloudflare'] },
  { icon: Rocket, title: 'Velocity', items: ['Design → Ship', 'Perf budgets', 'DX tooling', 'Docs'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_80%_0%,rgba(56,189,248,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-sky-300"><Icon size={20} /></div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300/90 text-sm">
                {items.map(i => (<li key={i}>• {i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
