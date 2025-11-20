import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm md:text-base text-slate-200 hover:text-white/90 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 blur-lg bg-blue-500/40 rounded-full" />
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-bold">F</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-200"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-200"><Linkedin size={18} /></a>
            <a href="#contact" className="p-2 rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:text-blue-200 hover:bg-blue-500/20"> <Mail size={18} /></a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4">
            <div className="flex flex-col gap-4">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/" target="_blank" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-200"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-200"><Linkedin size={18} /></a>
                <a href="#contact" className="p-2 rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:text-blue-200 hover:bg-blue-500/20"> <Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
