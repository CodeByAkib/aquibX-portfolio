import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { navLinks, profile, socials } from "../data/data";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  x: FaXTwitter,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-display text-xl font-bold text-gradient">
            {profile.brand}
          </p>
          <p className="mt-2 max-w-xs text-sm text-slate-500">
            Building scalable, user-friendly web experiences — one project at a time.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Quick Links
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Follow
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            {socials.map((s) => {
              const Icon = iconMap[s.id];
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-accent-purple hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-slate-600">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
