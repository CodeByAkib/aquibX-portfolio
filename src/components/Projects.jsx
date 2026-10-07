import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiImage,
  FiMic,
  FiGrid,
  FiCpu,
  FiUser,
  FiShare2
} from "react-icons/fi";
import { projects } from "../data/data";

const iconMap = {
  image: FiImage,
  mic: FiMic,
  grid: FiGrid,
  chatbot: FiCpu,
  portfolio: FiUser,
  social: FiShare2,
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon] || FiImage;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass flex flex-col rounded-2xl p-7 shadow-premium transition-shadow hover:shadow-glow-lg"
              >
                <div className="relative mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-gradient-main text-white shadow-glow">
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-main opacity-40 blur-lg" />
                  <Icon size={30} className="relative" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent-purple hover:text-white"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-main px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
