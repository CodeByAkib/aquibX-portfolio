// ─────────────────────────────────────────────────────────────
// Central data store — edit this file to update the portfolio.
// Adding a new project, skill, or certificate is as simple as
// adding a new object to the relevant array below.
// ─────────────────────────────────────────────────────────────

import webDevCert from "../assets/certs/web-dev-fundamentals.jpg";
import tcsCert from "../assets/certs/tcs-ion.jpg";
import promptingCert from "../assets/certs/google-prompting.jpg";
import oracleCert from "../assets/certs/oracle-ai.jpg";
import genAiCert from "../assets/certs/gen-ai-academy.png";
import aiEssentialsCert from "../assets/certs/google-ai-essentials.jpg";

export const profile = {
  name: "Md Akib Khan",
  brand: "AquibX",
  roles: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],
  intro:
    "I'm a passionate Software Engineer who loves turning ideas into scalable, responsive, and user-friendly web applications. As a final-year Computer Science Engineering student, I thrive at the intersection of clean code and thoughtful design — constantly learning modern technologies and shipping projects that solve real problems.",
  about:
    "I'm a final-year B.Tech Computer Science Engineering student with a strong foundation in frontend development and a growing focus on backend and full-stack systems. I enjoy building interfaces that feel effortless to use, and I'm equally comfortable diving into APIs, databases, and system design. Whether it's a hackathon sprint or a polished personal project, I bring curiosity, discipline, and an eye for detail to everything I build. I'm currently open to internship and full-time Software Engineering opportunities.",
  location: "Moinabad, Telangana, India",
  email: "mdaquibkhan1133@gmail.com",
  phone: "+91 6207468481",
  resumeUrl: "/resume.pdf",
};

export const highlights = [
  "Final Year B.Tech Computer Science Engineering Student",
  "Passionate Software Engineer",
  "Frontend Developer",
  "Interested in Backend Development",
  "Interested in Full Stack Development",
  "Constant Learner",
  "Problem Solver",
  "Open to Internship & Full-Time Opportunities",
];

export const skills = {
  "Programming Languages": ["JavaScript", "Python", "Java", "C"],
  Frontend: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Responsive Design"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code"],
  "Core Computer Science": [
    "Data Structures",
    "Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
  ],
};

export const projects = [
  {
    id: "image-editor",
    title: "Image Editor",
    description:
      "Modern browser-based Image Editor supporting crop, rotate, flip, filters, brightness adjustment and download.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CodeByAkib/Image-Editor",
    demo: "https://codebyakib.github.io/Image-Editor/",
    icon: "image",
  },
  {
    id: "text-to-speech",
    title: "Text To Speech Converter",
    description:
      "Converts written text into speech using the Web Speech API with multiple voice selections.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CodeByAkib/Text-to-Speech-Converter",
    demo: "https://codebyakib.github.io/Text-to-Speech-Converter/",
    icon: "mic",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    description:
      "Interactive Tic Tac Toe game featuring winner detection, draw logic and restart functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CodeByAkib/Tic-Tac-Toe-Game",
    demo: "https://codebyakib.github.io/Tic-Tac-Toe-Game/",
    icon: "grid",
  },
];

export const certifications = [
  {
    id: "web-dev-fundamentals",
    name: "Web Development Fundamentals",
    organization: "IBM SkillsBuild",
    date: "Feb 2026",
    image: webDevCert,
  },
  {
    id: "tcs-ion",
    name: "Career Edge – Young Professional",
    organization: "TCS iON (Tata Consultancy Services)",
    date: "Mar 2026",
    image: tcsCert,
  },
  {
    id: "google-prompting",
    name: "Google Prompting Essentials",
    organization: "Google (via Coursera)",
    date: "Jul 2026",
    image: promptingCert,
  },
  {
    id: "oracle-ai",
    name: "Oracle Certified Foundations Associate — AI",
    organization: "Oracle University",
    date: "Jan 2026",
    image: oracleCert,
  },
  {
    id: "gen-ai-academy",
    name: "Gen AI Academy",
    organization: "Google Cloud × Hack2Skill",
    date: "Aug 2025",
    image: genAiCert,
  },
  {
    id: "google-ai-essentials",
    name: "Google AI Essentials",
    organization: "Google (via Coursera)",
    date: "Jul 2026",
    image: aiEssentialsCert,
  },
];

export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    institution: "Global Institute of Engineering & Technology (GIET), Hyderabad",
    duration: "2023 – 2027",
    grade: "CGPA: 7.56 / 10",
    description:
      "Coursework spanning Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Artificial Intelligence, and Machine Learning.",
    icon: "cap",
  },
  {
    id: "intermediate",
    degree: "Intermediate (Class XII)",
    field: "Science (PCM)",
    institution: "C. M. Science College, Bihar",
    duration: "2021 – 2023",
    grade: "70% — BSEB",
    description: "Completed Senior Secondary education with a focus on Physics, Chemistry, and Mathematics.",
    icon: "book",
  },
  {
    id: "highschool",
    degree: "High School (Class X)",
    field: "CBSE",
    institution: "Aman Academy, Bihar",
    duration: "2016 – 2021",
    grade: "CBSE Board",
    description: "Built the foundational academic base that led into science stream and, later, engineering.",
    icon: "school",
  },
];

export const socials = [
  {
    id: "github",
    platform: "GitHub",
    username: "CodeByAkib",
    url: "https://github.com/CodeByAkib",
    tagline: "Where the code lives",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "mdakibkhan",
    url: "https://www.linkedin.com/in/mdakibkhan/",
    tagline: "Let's talk opportunities",
  },
  {
    id: "instagram",
    platform: "Instagram",
    username: "_aquib_official",
    url: "https://www.instagram.com/_aquib_official/",
    tagline: "Behind the scenes",
  },
  {
    id: "x",
    platform: "X (Twitter)",
    username: "aquib_official",
    url: "https://x.com/_aquib_official",
    tagline: "Thoughts, in short form",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
