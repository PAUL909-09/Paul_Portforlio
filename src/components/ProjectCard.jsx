import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

function ProjectCard({
  i,
  title,
  description,
  url,
  src,
  color,
  githubLink,
  liveLink,
  onDetails,
  isSelected,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-xl project-card flex flex-col border border-gray-800/50 backdrop-blur-sm"
      whileHover={isSelected ? {} : { y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

      {/* Image */}
      <div className="w-full h-[220px] md:h-[260px] relative overflow-hidden">
        <motion.img
          src={imgError ? url : src}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={isSelected ? {} : { scale: 1.05 }}
          transition={{ duration: 0.4 }}
          layoutId={`project-image-${title}`}
          onError={() => setImgError(true)}
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
          Project {i + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <motion.h2
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2"
          layoutId={`project-title-${title}`}
        >
          {title}
        </motion.h2>
        <p className="text-sm md:text-base text-gray-300 flex-1 line-clamp-3">{description}</p>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
              style={{ color: color || '#06B6D4' }}
            >
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
              style={{ color: color || '#06B6D4' }}
            >
              Live
            </a>
          )}
          <button
            onClick={onDetails}
            className="ml-auto px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  src: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  onDetails: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default ProjectCard;