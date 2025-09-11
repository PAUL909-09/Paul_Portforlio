const projects = [
  {
    id: "project_1",
    title: "Go CTPL",
    description: "A lightweight JavaScript library for creating beautiful, responsive UI components.",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg", // Using same image as fallback for now
    color: "#5196fd",
    category: "Major project",
    details: {
      overview: "A lightweight JavaScript library designed to simplify the creation of responsive and accessible UI components.",
      techStack: ["JavaScript", "CSS", "HTML"],
      features: ["Responsive design", "Lightweight bundle", "Customizable components"],
      learnings: "Mastered modular JavaScript and CSS optimization techniques.",
      gallery: [
        {
          image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572148/Screenshot_2025-06-14_191226_yzoavf.png",
          caption: "Initial UI design mockups and wireframes.",
        },
      ],
    },
  },
  {
    id: "project_2",
    title: "Lopenze Art Space Gallery",
    description: "An online gallery showcasing artistic works.",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572148/Screenshot_2025-06-14_191226_yzoavf.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572148/Screenshot_2025-06-14_191226_yzoavf.png", // Using same image as fallback for now
    color: "#6b7280",
    category: "Art project",
    details: {
      overview: "A gallery platform to display and manage artwork online.",
      techStack: ["JavaScript", "React", "CSS"],
      features: ["Image gallery", "Responsive layout", "User navigation"],
      learnings: "Improved React state management and image optimization.",
      gallery: [
        {
          image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png",
          caption: "Gallery interface design.",
        },
      ],
    },
  },
  {
    id: "project_3",
    title: "Portfolio Snapshot",
    description: "A snapshot of my portfolio development process.",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png", // Using same image as fallback for now
    color: "#4b5563",
    category: "Personal project",
    details: {
      overview: "Documentation of my portfolio creation journey.",
      techStack: ["JavaScript", "HTML", "CSS"],
      features: ["Progress tracking", "Visual updates"],
      learnings: "Enhanced documentation and version control skills.",
      gallery: [],
    },
  },
  // Add more projects (up to 100+) with additional Cloudinary URLs as you upload more images
];

export default projects;