import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "../data/data";
import profileImg from "../assets/profile.jpg";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  x: FaXTwitter,
};

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? currentWord.slice(0, t.length - 1)
              : currentWord.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="section-padding mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-purple">
            Available for Internship & Full-Time Roles
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <h2 className="mt-4 h-10 font-display text-xl font-medium text-slate-300 sm:text-2xl">
            <span className="text-gradient">{typedRole}</span>
            <span className="animate-pulse text-accent-purple">|</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-main px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg"
            >
              <FiDownload className="transition group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent-purple hover:text-white"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {socials.map((s) => {
              const Icon = iconMap[s.id];
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-accent-purple hover:text-white"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute -inset-4 animate-spin-slow rounded-full bg-gradient-main opacity-30 blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-main p-[3px] shadow-glow-lg animate-float">
              <div
                className="h-full w-full overflow-hidden rounded-full bg-base-900"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={profileImg}
                  alt={`${profile.name} — profile photo`}
                  className="h-full w-full object-cover object-center"
                  style={{ aspectRatio: "1 / 1" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <FiChevronDown size={26} />
      </motion.a>
    </section>
  );
}
