import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiHome } from "react-icons/fi";
import { education } from "../data/data";

const iconMap = { cap: FiAward, book: FiBookOpen, school: FiHome };

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Education
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            My academic <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-14">
            {education.map((item, idx) => {
              const Icon = iconMap[item.icon] || FiAward;
              const alignRight = idx % 2 === 1;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    alignRight ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-6 top-1 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-gradient-main shadow-glow sm:left-1/2">
                    <Icon size={17} className="text-white" />
                  </div>

                  <div className="ml-16 flex-1 sm:ml-0" />

                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass ml-16 flex-1 rounded-2xl p-6 shadow-premium transition-shadow hover:shadow-glow sm:ml-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-purple">
                      {item.duration}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {item.field}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-accent-blue">
                      {item.grade}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
