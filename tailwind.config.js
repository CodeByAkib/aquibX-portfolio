/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05050a",
          900: "#0a0a14",
          850: "#0d0d1a",
          800: "#12121f",
          700: "#1a1a2e",
        },
        accent: {
          blue: "#3b82f6",
          indigo: "#6366f1",
          purple: "#8b5cf6",
          violet: "#a855f7",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #a855f7 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.35)",
        "glow-lg": "0 0 80px rgba(139, 92, 246, 0.35)",
        premium: "0 8px 32px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blob: "blob 12s infinite",
        gradient: "gradient 8s ease infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
