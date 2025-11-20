export default function Experience() {
  const items = [
    {
      role: 'Senior Frontend Engineer',
      company: 'TechNova',
      period: '2022 — Present',
      points: [
        'Led migration to Vite + modern React, cutting TTI by 45%',
        'Shipped design system adopted across 5 products',
        'Mentored team and established performance budgets'
      ]
    },
    {
      role: 'Fullstack Engineer',
      company: 'CloudForge',
      period: '2020 — 2022',
      points: [
        'Built realtime dashboards using FastAPI + WebSockets',
        'Introduced CI/CD workflows and containerization',
        'Collaborated with design to deliver polished UX'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience</h2>
        <div className="space-y-6">
          {items.map((job) => (
            <div key={job.role} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>
                <div className="text-slate-400 text-sm">{job.period}</div>
              </div>
              <ul className="mt-4 grid gap-2 text-slate-300/90 list-disc pl-5">
                {job.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
