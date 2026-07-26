import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { profile } from "../data/data";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const RATE_LIMIT_MS = 30_000; // one submission per 30s per browser session

const contactCards = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "mdakibkhan",
    href: "https://linkedin.com/in/mdakibkhan",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "CodeByAkib",
    href: "https://github.com/CodeByAkib",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "_aquib_official",
    href: "https://instagram.com/_aquib_official",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

function validate(fields) {
  const errors = {};
  if (!fields.from_name.trim()) errors.from_name = "Full name is required.";
  if (!fields.from_email.trim()) {
    errors.from_email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)) {
    errors.from_email = "Enter a valid email address.";
  }
  if (!fields.subject.trim()) errors.subject = "Subject is required.";
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const formRef = useRef(null);
  const lastSubmitRef = useRef(0);

  const [fields, setFields] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return; // prevent duplicate submissions

    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      showToast(
        "error",
        "You're sending messages too quickly. Please wait a moment and try again."
      );
      return;
    }

    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      showToast(
        "error",
        "Email service isn't configured yet. Add your EmailJS keys to .env."
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: fields.from_name,
          from_email: fields.from_email,
          subject: fields.subject,
          message: fields.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      lastSubmitRef.current = now;
      setStatus("success");
      showToast("success", "Message sent! I'll get back to you soon.");
      setFields({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      showToast("error", "Something went wrong. Please try again shortly.");
    } finally {
      setTimeout(() => setStatus("idle"), 1200);
    }
  };

  const fieldConfig = [
    { name: "from_name", label: "Full Name", type: "text" },
    { name: "from_email", label: "Email Address", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let's build something{" "}
            <span className="text-gradient">great together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-main text-white shadow-glow">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {card.label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {card.value}
                    </p>
                  </div>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7 shadow-premium sm:p-9"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fieldConfig.map((f) => (
                <div
                  key={f.name}
                  className={f.name === "subject" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={f.name}
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    value={fields[f.name]}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/30 ${
                      errors[f.name] ? "border-red-500/60" : "border-white/10"
                    }`}
                    placeholder={`Your ${f.label.toLowerCase()}`}
                  />
                  {errors[f.name] && (
                    <p className="mt-1.5 text-xs text-red-400">{errors[f.name]}</p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/30 ${
                    errors.message ? "border-red-500/60" : "border-white/10"
                  }`}
                  placeholder="Tell me about the opportunity or project..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-main px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className={`fixed bottom-6 left-1/2 z-[999] flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-premium ${
            toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
          {toast.message}
        </motion.div>
      )}
    </section>
  );
}
