// src/components/ProjectDetail.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import TechIcon from "./TechIcon";

export default function ProjectDetail({ project, onBack }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="text-white w-full bg-slate-950 py-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-white text-lg font-medium flex items-center transition"
        >
          ← Back to Projects
        </button>

        {/* Image Preview */}
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl mb-8">
          <motion.img
            src={imgError ? project.link : project.src}
            alt={project.title}
            className="w-full h-full object-cover"
            layoutId={`project-image-${project.id}`}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onError={() => setImgError(true)}
          />
        </div>

        {/* Title & Description */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          layoutId={`project-title-${project.id}`}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.description}
        </motion.p>

        {/* Project Details Section */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
          <p className="text-gray-400 text-sm">{project.details?.overview}</p>

          {project.details?.techStack && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🛠 Tech Stack</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {project.details.techStack.map((tech) => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            </div>
          )}

          {project.details?.features && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">⭐ Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.learnings && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">📖 Learnings</h3>
              <p className="text-gray-400 text-sm">{project.details.learnings}</p>
            </div>
          )}
        </div>

        {/* New Gallery Section */}
        {project.details?.gallery && project.details.gallery.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">📸 Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.details.gallery.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.img
                    src={item.image}
                    alt={item.caption || `Gallery image ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.4, ease: "easeOut" }}
                  />
                  {item.caption && (
                    <p className="text-gray-400 text-sm mt-2 text-center">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            View Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};