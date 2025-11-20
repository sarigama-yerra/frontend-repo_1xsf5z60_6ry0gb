import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & full-time
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Building delightful software with craft, speed, and soul.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl">
            I ship high-impact web apps, design systems, and developer tools. Blending performance, accessibility, and modern aesthetics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition-colors">Contact Me</a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300/90">
            <Stat number="6+" label="Years Experience" />
            <Stat number="40+" label="Projects Shipped" />
            <Stat number="100ms" label="UX First" />
            <Stat number="∞" label="Curiosity" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-white">{number}</div>
      <div className="text-sm md:text-base text-slate-300/80">{label}</div>
    </div>
  )
}
