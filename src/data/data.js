// ─────────────────────────────────────────────────────────────
// Central data store — edit this file to update the portfolio.
// Adding a new project, skill, or certificate is as simple as
// adding a new object to the relevant array below.
// ─────────────────────────────────────────────────────────────

import tcsCert from "../assets/certs/tcs-ion.jpg";
import aiEssentialsCert from "../assets/certs/google-ai-essentials.jpg";
import iictcert from "../assets/certs/iict.jpeg";

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
  "Programming Languages": ["JavaScript", "Python", "C/C++"],
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
  id: "SocialFlow AI",
  title: "SocialFlow AI",
  description:
    "Developed a AI- Powered social media automation platform that enables users to schedule posts and automatically publish content across social media platforms.",
  tech: ["React.js", "TypeScript", "Gemini API", "Tailwind CSS"],
  github: "https://github.com/CodeByAkib/socialflow-ai",
  demo: "https://socialflow-ai-vert.vercel.app/",
  icon: "social",
},
  {
    id: "AI Chatbot",
    title: "AI Chatbot",
    description:
      "Developed an AI-powered chatbot using React.js and the Google Gemini API to generate realtime responses.",
    tech: ["React.js", "JavaScript", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/CodeByAkib/AI-Chatbot",
    demo: "https://ai-chatbot-three-blue.vercel.app/",
    icon: "chatbot",
  },
  {
    id: "Personal Portfolio",
    title: "Personal Portfolio",
    description:
      "Built a fully responsive personal portfolio using React.js, Tailwind CSS, and Vite, featuring a project showcase, technical skills, certifications, resume download, and a contact section",

    tech: ["React.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/CodeByAkib/aquibX-portfolio",
    demo: "https://aquibx-portfolio.vercel.app/",
    icon: "portfolio",
  },
];

export const certifications = [
  {
    id: "iict",
    name: "Foundation Course on AI Readiness",
    organization: " IICT & AI Skills House (Google & YouTube Partnership)",
    date: "Aug 2026",
    image: iictcert,
  },
  {
    id: "tcs-ion",
    name: "Career Edge – Young Professional",
    organization: "TCS iON (Tata Consultancy Services)",
    date: "Mar 2026",
    image: tcsCert,
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
