// // src\pages\ProjectCards\ProjectCards.jsx
// // import { ReactLenis } from "lenis/react";
// import { ReactLenis } from "lenis/dist/lenis-react";
// import { useScroll } from "framer-motion";
// import { useRef, useEffect } from "react";
// import ProjectCard from "../../components/ProjectCard"; // Adjust path as needed
// import projects from "../../data/projectsData"; // Adjust path as needed

// export default function Project() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     // Add specific styles for 1366x768 resolution
//     const style = document.createElement("style");
//     style.textContent = `
//       @media screen and (width: 1366px) and (height: 768px),
//              screen and (width: 1367px) and (height: 768px),
//              screen and (width: 1368px) and (height: 769px) {
//         .project-card {
//           scale: 0.85;
//           margin-top: -5vh;
//         }
//         .project-container {
//           height: 90vh;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Resolution check function
//     const checkResolution = () => {
//       const isTargetResolution =
//         window.innerWidth >= 1360 &&
//         window.innerWidth <= 1370 &&
//         window.innerHeight >= 760 &&
//         window.innerHeight <= 775;

//       if (isTargetResolution) {
//         document.documentElement.style.setProperty("--project-scale", "0.85");
//         document.documentElement.style.setProperty("--project-margin", "-5vh");
//       } else {
//         document.documentElement.style.setProperty("--project-scale", "1");
//         document.documentElement.style.setProperty("--project-margin", "0");
//       }
//     };

//     checkResolution();
//     window.addEventListener("resize", checkResolution);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", checkResolution);
//     };
//   }, []);

//   return (
//     <ReactLenis root>
//       <main className="bg-black" ref={container}>
//         <section className="text-white w-full bg-slate-950">
//           {projects.map((project, i) => {
//             const targetScale = 1 - (projects.length - i) * 0.05;
//             return (
//               <ProjectCard
//                 key={`p_${i}`}
//                 i={i}
//                 url={project.link}
//                 src={project.src} // Pass src prop for local image
//                 title={project.title}
//                 color={project.color}
//                 description={project.description}
//                 progress={scrollYProgress}
//                 range={[i * 0.25, 1]}
//                 targetScale={targetScale}
//                 githubLink={project.githubLink}
//                 liveLink={project.liveLink}
//               />
//             );
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   );
// }




// // src\pages\ProjectCards\ProjectCards.jsx
// import { ReactLenis } from "lenis/dist/lenis-react";
// import { useScroll } from "framer-motion";
// import { useRef, useEffect } from "react";
// import ProjectCard from "../../components/ProjectCard"; 
// import projects from "../../data/projectsData";

// export default function Project() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     // Add specific styles for 1366x768 resolution
//     const style = document.createElement("style");
//     style.textContent = `
//       @media screen and (width: 1366px) and (height: 768px),
//              screen and (width: 1367px) and (height: 768px),
//              screen and (width: 1368px) and (height: 769px) {
//         .project-card {
//           scale: 0.85;
//           margin-top: -5vh;
//         }
//         .project-container {
//           height: 90vh;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Resolution check function
//     const checkResolution = () => {
//       const isTargetResolution =
//         window.innerWidth >= 1360 &&
//         window.innerWidth <= 1370 &&
//         window.innerHeight >= 760 &&
//         window.innerHeight <= 775;

//       if (isTargetResolution) {
//         document.documentElement.style.setProperty("--project-scale", "0.85");
//         document.documentElement.style.setProperty("--project-margin", "-5vh");
//       } else {
//         document.documentElement.style.setProperty("--project-scale", "1");
//         document.documentElement.style.setProperty("--project-margin", "0");
//       }
//     };

//     checkResolution();
//     window.addEventListener("resize", checkResolution);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", checkResolution);
//     };
//   }, []);

//   return (
//     <ReactLenis root>
//       <main className="bg-black" ref={container}>
//         <section className="text-white w-full bg-slate-950">
//           {projects.map((project, i) => {
//             const targetScale = 1 - (projects.length - i) * 0.05;
//             return (
//               <ProjectCard
//                 key={`p_${i}`}
//                 i={i}
//                 url={project.link}
//                 src={project.src} // Pass src prop for local image
//                 title={project.title}
//                 color={project.color}
//                 description={project.description}
//                 progress={scrollYProgress}
//                 range={[i * 0.25, 1]}
//                 targetScale={targetScale}
//                 githubLink={project.githubLink}
//                 liveLink={project.liveLink}
//               />
//             );
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   );
// }
// src/pages/Projects/Projects.jsx


//src\pages\Projects\Projects.jsx
import { ReactLenis } from "lenis/dist/lenis-react";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";
import projects from "@/data/projectsData";

export default function Project() {
  const container = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px) {
        .project-card { scale: 0.9; margin-top: -5vh; }
        .project-container { height: 90vh; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black min-h-screen" ref={container}>
        {/* Filter Menu - Only show when not in detail view */}
        {!selectedProject && (
          <div className="sticky top-16 bg-black z-10 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h1>
                <p className="text-gray-400 text-lg">Explore my work by category</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-white text-black shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid or Detail */}
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetail
              key="detail"
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <motion.section
              key="list"
              className="text-white w-full bg-slate-950 py-12 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {filteredProjects.map((project, i) => (
                  <ProjectCard
                    key={`p_${i}`}
                    i={i}
                    url={project.link}
                    src={project.src}
                    title={project.title}
                    color={project.color}
                    description={project.description}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    onDetails={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* No projects found (only show if not selected and empty) */}
        {!selectedProject && filteredProjects.length === 0 && (
          <div className="flex items-center justify-center h-96 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">No projects found</h2>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          </div>
        )}
      </main>
    </ReactLenis>
  );
}