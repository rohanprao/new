import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section id="events" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-500 mb-6"
        >
          Upcoming Events
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Join us at upcoming conferences, webinars, and community meetups.
        </p>
        <div className="mt-12 flex flex-col gap-4 text-left max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-rose-500/30 transition-colors">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center bg-slate-800 rounded-xl w-20 h-20 shrink-0">
                  <span className="text-rose-400 font-bold text-xl">OCT</span>
                  <span className="text-slate-200 font-semibold text-lg">{10 + i * 5}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-1">Industrial IoT Summit {2026}</h3>
                  <p className="text-slate-400">Virtual Conference • 10:00 AM PST</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors whitespace-nowrap">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
