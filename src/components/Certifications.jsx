import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiX } from "react-icons/fi";
import { certifications } from "../data/data";

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Certifications
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Verified <span className="text-gradient">credentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-2xl shadow-premium transition-shadow hover:shadow-glow"
            >
              <button
                onClick={() => setActive(cert)}
                className="relative block w-full overflow-hidden"
                aria-label={`View ${cert.name} certificate`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    <FiEye /> Preview
                  </span>
                </div>
              </button>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{cert.organization}</p>
                <p className="mt-1 text-xs text-slate-500">{cert.date}</p>
                <button
                  onClick={() => setActive(cert)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-accent-purple hover:text-white"
                >
                  <FiEye /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-base-900 shadow-glow-lg"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <FiX size={18} />
              </button>
              <img
                src={active.image}
                alt={`${active.name} certificate full view`}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {active.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {active.organization} · {active.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
