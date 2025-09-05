// src/data/projectsData.js
import Project1 from "../assets/ProjectImages/Project1.png";
import Project2 from "../assets/ProjectImages/Project2.png";
import Project3 from "../assets/ProjectImages/Project3.png";
import Project4 from "../assets/ProjectImages/Project4.png";
import Project5 from "../assets/ProjectImages/Project5.png";
import Project6 from "../assets/ProjectImages/Project6.png";
import LopenzeArtSpace from "../assets/ProjectImages/LopenzeArtSpace.png";

const projects = [
  {
    id: "project_1",
    title: "Lopenze Art Space Gallery",
    description: "A lightweight JavaScript library for creating beautiful, responsive UI components.",
    src: LopenzeArtSpace,
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    // githubLink: "https://github.com/olovajs/olova",
    // liveLink: "https://olova.js.org/",
    category: "Major project",
    details: {
      overview: "A lightweight JavaScript library designed to simplify the creation of responsive and accessible UI components, perfect for modern web applications.",
      techStack: ["JavaScript", "CSS", "HTML"],
      features: ["Responsive design", "Lightweight bundle", "Customizable components"],
      learnings: "Mastered modular JavaScript and CSS optimization techniques.",
      gallery: [
        { image: Project1, caption: "Initial UI design mockups and wireframes." },
        { image: Project2, caption: "Component library development and styling." },
        { image: Project3, caption: "Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices.Responsive layout testing on mobile devices." },
        { image: Project4, caption: "Final component showcases and documentation." },
      ],
    },
  },
  {
    id: "project_2",
    title: "Eccomerce Food Website ",
    description: "A Jollibee Inspride Website.",
    src: Project2,
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    category: "Major project",
    details: {
      overview: "A modern portfolio built with React and Tailwind CSS, showcasing skills and projects with a clean, responsive design optimized for all devices.",
      techStack: ["React", "Tailwind CSS", "Vite"],
      features: ["Responsive layout", "Dark/light mode", "Fast performance"],
      learnings: "Improved React component architecture and Tailwind utility-first workflows.",
      gallery: [
        { image: Project2, caption: "Home page with interactive hero section." },
        { image: Project1, caption: "Mobile responsiveness testing and optimization." },
        { image: Project5, caption: "Project showcase section with category filters." },
        { image: Project6, caption: "Contact form and social media links." },
      ],
    },
  },
  {
    id: "project_3",
    title: "Essential tools for daily use",
    description: "Tools you can use everyday",
    src: Project1,
    // link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    color: "#fff",
    category: "Major project",
    details: {
      overview: "CodeWhisperer is an advanced online code editor that supports real-time code execution, syntax highlighting, and multi-language support, wrapped in a sleek and intuitive UI.",
      techStack: ["React", "Tailwind CSS", "Monaco Editor"],
      features: ["Real-time code execution", "Syntax highlighting", "Multi-language support"],
      learnings: "Enhanced skills in integrating third-party libraries and optimizing performance.",
      gallery: [
        { image: Project1, caption: "Main code editor interface." },
        { image: Project2, caption: "Real-time code execution and output window." },
        { image: Project3, caption: "Code highlighting for various programming languages." },
      ],
    },
  },
];

export default projects;