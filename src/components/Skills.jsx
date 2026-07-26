import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import { skills } from "../data/data";

const categoryIcons = {
  "Programming Languages": FiCode,
  Frontend: FiLayout,
  Backend: FiServer,
  Database: FiDatabase,
  Tools: FiTool,
  "Core Computer Science": FiCpu,
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], idx) => {
            const Icon = categoryIcons[category] || FiCode;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group rounded-2xl p-6 shadow-premium transition-shadow hover:shadow-glow"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-main text-white shadow-glow animate-float">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition group-hover:border-accent-purple/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
