import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { socials } from "../data/data";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  x: FaXTwitter,
};

export default function Connect() {
  return (
    <section id="connect" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Connect With Me
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let's stay <span className="text-gradient">in touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, idx) => {
            const Icon = iconMap[s.id];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass flex flex-col items-center rounded-2xl p-7 text-center shadow-premium transition-shadow hover:shadow-glow"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-main text-white shadow-glow">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {s.platform}
                </h3>
                <p className="mt-1 text-sm text-slate-400">@{s.username}</p>
                <p className="mt-2 text-xs text-slate-500">{s.tagline}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-accent-purple hover:text-white"
                >
                  Visit Profile <FiArrowUpRight />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
