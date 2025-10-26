// src/pages/Projects/Projects.jsx
import { ReactLenis } from "lenis/dist/lenis-react";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";
import projects from "@/data/projectsData";

export default function Project() {
  const container = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const categories =
    projects && Array.isArray(projects)
      ? ["All", ...new Set(projects.map((project) => project.category))]
      : ["All"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects || []
      : (projects || []).filter(
          (project) =>
            project.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const paginatedProjects = filteredProjects.slice(
    0,
    currentPage * projectsPerPage
  );

  useEffect(() => {
    paginatedProjects.forEach((project) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = project.src;
      document.head.appendChild(link);
      return () => document.head.removeChild(link);
    });
  }, [paginatedProjects]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px) {
        .project-card { scale: 0.9; margin-top: -5vh; }
        .project-container { height: 90vh; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <ReactLenis root>
      <main
        className="min-h-screen relative overflow-hidden bg-[#04081A]"
        ref={container}
      >
        {/* Backgrounds - Add pointer-events: none to prevent blocking clicks */}
        <div className="absolute inset-0 bg-[#04081A] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />

        {/* Button container - Higher z-index and relative positioning to ensure it's clickable and above the header */}
        {!selectedProject && (
          <div className="relative z-60 pt-20 pb-6 px-4 sm:px-6 lg:px-8 pointer-events-auto">
            {" "}
            {/* Increased z-index to z-60, added pt-20 for top padding to avoid header overlap */}
            <div className="max-w-7xl mt-16 mx-auto">
              {" "}
              {/* Kept mt-16, but pt-20 on parent provides extra buffer */}
              <div className="text-center mb-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  Projects
                </h2>
                <p className="text-lg  md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl mx-auto">
                  Explore my work by category
                </p>{" "}
                {/* Fixed typo: "categoryy" -> "category" */}
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      console.log(`Filter button clicked: ${category}`); // Debug log
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`
                      px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 
                      min-w-[100px] min-h-[36px] inline-block cursor-pointer hover:bg-gray-700 hover:text-white pointer-events-auto
                      ${
                        selectedCategory === category
                          ? "bg-white text-black shadow-lg"
                          : "bg-gray-800 text-gray-300"
                      }
                    `}
                    aria-label={`Filter by ${category}`}
                  >
                    <span className="w-full text-center inline-block">
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetail
              key="detail"
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <section className="text-white w-full py-12 px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {paginatedProjects.map((project, i) => (
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
                    watchLink={project.watchLink}
                    onDetails={() => setSelectedProject(project)}
                    isSelected={selectedProject?.id === project.id}
                  />
                ))}
              </div>
              {paginatedProjects.length < filteredProjects.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition pointer-events-auto"
                    aria-label="Load more projects"
                  >
                    Load More
                  </button>
                </div>
              )}
            </section>
          )}
        </AnimatePresence>

        {!selectedProject && filteredProjects.length === 0 && (
          <div className="flex items-center justify-center h-96 text-white relative z-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">No projects found</h2>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
            </div>
          </div>
        )}
      </main>
    </ReactLenis>
  );
}
