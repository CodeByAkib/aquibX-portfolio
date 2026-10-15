import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { profile, highlights } from "../data/data";
import profileImg from "../assets/profile-about.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            About Me
          </p>

          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            The person behind{" "}
            <span className="text-gradient">the code</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto"
          >
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-main p-[3px] shadow-glow animate-float-slow">
                {/* Circular Image Container */}
                <div className="h-full w-full overflow-hidden rounded-full bg-base-900">
                  <img
                    src={profileImg}
                    alt={`${profile.name} portrait`}
                    className="block h-full w-full rounded-full object-cover"
                    style={{
                      objectPosition: "center 15%",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-base leading-relaxed text-slate-400">
              {profile.about}
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                  }}
                  className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300"
                >
                  <FiCheckCircle className="shrink-0 text-accent-purple" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}