import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) setStatus('Thanks! I will get back to you shortly.')
      else setStatus('Something went wrong. Please try again later.')
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let’s build something great</h2>
            <p className="text-slate-300/90 max-w-md">Tell me about your project, timeline, and goals. I usually respond within 24 hours.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm mb-1">Name</label>
                <input required name="name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Email</label>
                <input required type="email" name="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-slate-300 text-sm mb-1">Message</label>
              <textarea required name="message" rows="5" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="What are we building?" />
            </div>
            <button className="mt-4 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">Send message</button>
            {status && <p className="mt-3 text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
