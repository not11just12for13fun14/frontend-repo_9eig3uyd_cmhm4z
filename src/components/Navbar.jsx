import { useState } from 'react'
import { Menu, X, Home, Phone, MessageSquare } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Listings', href: '#listings' },
    { name: 'How it works', href: '#how' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-white/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            EstateAI
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">Book a demo</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/60">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="px-3 py-2 rounded hover:bg-white/60">{item.name}</a>
              ))}
              <a href="#cta" className="px-3 py-2 rounded bg-gray-900 text-white">Book a demo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
