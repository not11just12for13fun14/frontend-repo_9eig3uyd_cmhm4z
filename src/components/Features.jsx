import { motion } from 'framer-motion'
import { PhoneCall, CalendarRange, MessageSquareText, BadgeCheck } from 'lucide-react'

const features = [
  {
    title: 'Answers every inquiry',
    desc: 'Website, portal, phone, or SMS — every lead gets an instant, helpful response.',
    icon: PhoneCall
  },
  {
    title: 'Books showings for you',
    desc: 'Syncs with your calendar and schedules qualified tours automatically.',
    icon: CalendarRange
  },
  {
    title: 'Nurtures like a pro',
    desc: 'Multi-channel follow-ups that feel human and keep prospects engaged.',
    icon: MessageSquareText
  },
  {
    title: 'Compliant & secure',
    desc: 'Enterprise-grade security with opt-in/opt-out and audit trails.',
    icon: BadgeCheck
  }
]

export default function Features() {
  return (
    <section id="how" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Built for modern brokerages</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A conversational AI that sounds natural, qualifies buyers, and accelerates transactions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white grid place-items-center mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
