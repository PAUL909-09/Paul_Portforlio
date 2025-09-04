// src/components/ProjectDetail.jsx
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetail({ project, onBack }) {
  const [imgError, setImgError] = useState(false);
  const [selectedDetailSection, setSelectedDetailSection] = useState("Overview");
  
  // New state for the interactive gallery
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  useEffect(() => {
    // Reset selected image when the project changes or the gallery section is not active
    if (selectedDetailSection !== "Gallery") {
      setSelectedGalleryImage(null);
    } else if (project.details?.gallery?.length > 0 && !selectedGalleryImage) {
      // Automatically select the first image when the gallery is opened
      setSelectedGalleryImage(project.details.gallery[0]);
    }
  }, [selectedDetailSection, project, selectedGalleryImage]);

  const detailSections = [
    { id: "Overview", label: "Project Overview" },
    { id: "TechStack", label: "Tech Stack", data: project.details?.techStack },
    { id: "Features", label: "Key Features", data: project.details?.features },
    { id: "Learnings", label: "Learnings", data: project.details?.learnings },
    { id: "Gallery", label: "Project Gallery", data: project.details?.gallery },
  ];

  const availableSections = detailSections.filter(section => section.id === "Overview" || (section.data && section.data.length > 0));

  return (
    <motion.div
      className="text-white w-full bg-slate-950 py-12 px-6 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 lg:pr-8">
          <button
            onClick={onBack}
            className="mb-6 text-gray-400 hover:text-white text-lg font-medium flex items-center transition"
          >
            ← Back to Projects
          </button>

          {/* Project Header */}
          <div className="bg-zinc-900 rounded-xl p-6 mb-8 shadow-lg">
            <div className="w-full h-[250px] md:h-[400px] overflow-hidden rounded-lg mb-6">
              <motion.img
                src={imgError ? project.link : project.src}
                alt={project.title}
                className="w-full h-full object-cover"
                layoutId={`project-image-${project.id}`}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onError={() => setImgError(true)}
              />
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3"
              layoutId={`project-title-${project.id}`}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.description}
            </motion.p>

            <div className="flex gap-4 mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium flex items-center gap-2 hover:bg-gray-600 transition"
              >
                <FaGithub /> View Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium flex items-center gap-2 hover:bg-indigo-500 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDetailSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {selectedDetailSection === "Overview" && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-gray-400 text-base">{project.details?.overview}</p>
                  </div>
                )}

                {selectedDetailSection === "TechStack" && project.details?.techStack && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">🛠 Tech Stack</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {project.details.techStack.map((tech) => (
                        <TechIcon key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                )}

                {selectedDetailSection === "Features" && project.details?.features && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">⭐ Key Features</h3>
                    <ul className="list-disc list-inside text-gray-400 text-base space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedDetailSection === "Learnings" && project.details?.learnings && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">📖 Learnings</h3>
                    <p className="text-gray-400 text-base">{project.details.learnings}</p>
                  </div>
                )}
                
                {selectedDetailSection === "Gallery" && project.details?.gallery && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">📸 Project Gallery</h3>
                    {/* Main image viewer */}
                    {selectedGalleryImage && (
                      <div className="mb-6 flex flex-col items-center">
                        <img
                          src={selectedGalleryImage.image}
                          alt={selectedGalleryImage.caption}
                          className="w-full h-auto rounded-lg mb-4 object-cover"
                        />
                        {selectedGalleryImage.caption && (
                          <p className="text-gray-400 text-center text-base">{selectedGalleryImage.caption}</p>
                        )}
                      </div>
                    )}
                    
                    {/* Thumbnail gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                      {project.details.gallery.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedGalleryImage(item)}
                          className={`
                            w-full h-24 overflow-hidden rounded-lg transition-all duration-200 ease-in-out
                            ${selectedGalleryImage === item ? "ring-2 ring-indigo-500 shadow-md" : "hover:ring-2 hover:ring-gray-600"}
                          `}
                        >
                          <img
                            src={item.image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="w-full lg:w-80 bg-zinc-900 rounded-xl p-6 shadow-lg h-fit lg:sticky lg:top-24">
          <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
          <nav>
            <ul className="space-y-2">
              {availableSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setSelectedDetailSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${selectedDetailSection === section.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};