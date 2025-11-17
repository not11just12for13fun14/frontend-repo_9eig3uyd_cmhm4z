import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [error, setError] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Talk to the AI concierge today</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Book a demo or drop your details. We'll show you how agents are converting more with automated, natural conversations.</p>
            {status === 'success' && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 border border-green-200">Thanks! We'll be in touch shortly.</div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error || 'Something went wrong.'}</div>
            )}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-purple-500"/>
              </div>
            </div>
            <button disabled={status==='loading'} className="mt-5 w-full px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black disabled:opacity-60">
              {status==='loading' ? 'Sending...' : 'Request a demo'}
            </button>
            <p className="mt-3 text-xs text-gray-500">By submitting you agree to our terms and privacy policy.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
