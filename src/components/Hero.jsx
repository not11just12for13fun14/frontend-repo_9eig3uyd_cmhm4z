import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 text-purple-700 text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" /> AI Voice Agent for Real Estate
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Convert more leads with a 24/7 AI concierge
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Instantly qualify, schedule, and nurture buyers and sellers. Your always-on voice assistant that feels human and boosts close rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-black transition">Try the AI Bot</a>
              <a href="#how" className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400">See how it works</a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-sm text-gray-600">
                <div className="font-semibold text-gray-900">+38% more booked tours</div>
                On average within 30 days
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold text-gray-900">24/7 lead capture</div>
                Never miss another inquiry
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/30 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-orange-400/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
