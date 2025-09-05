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

  // Ensure unique categories and maintain case consistency
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  // Filter projects with case-insensitive matching
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());

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
      <main className="min-h-screen relative overflow-hidden bg-[#04081A]" ref={container}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

        {/* Filter Menu - Only show when not in detail view */}
        {!selectedProject && (
          <div className="sticky top-16 bg-transparent z-10 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h1>
                <p className="text-gray-400 text-lg">Explore my work by category</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pointer-events-auto">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      console.log(`Filter button clicked: ${category}`);
                      setSelectedCategory(category);
                    }}
                    className={`
                      px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 
                      min-w-[100px] min-h-[36px] inline-block cursor-pointer hover:bg-gray-700 hover:text-white
                      ${selectedCategory === category ? "bg-white text-black shadow-lg" : "bg-gray-800 text-gray-300"}
                    `}
                  >
                    <span className="w-full text-center inline-block">{category}</span>
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
            <section
              className="text-white w-full py-12 px-6 relative z-10"
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
                    isSelected={selectedProject?.id === project.id}
                  />
                ))}
              </div>
            </section>
          )}
        </AnimatePresence>

        {/* No projects found (only show if not selected and empty) */}
        {!selectedProject && filteredProjects.length === 0 && (
          <div className="flex items-center justify-center h-96 text-white relative z-10">
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