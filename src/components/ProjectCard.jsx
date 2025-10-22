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
  const FALLBACK_IMAGE = "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg"; // Temporary fallback

  const sanitizeUrl = (url) => {
    if (!url || !url.startsWith("https://res.cloudinary.com/dr7pljkee/")) {
      console.warn(`Invalid URL detected for ${title}: ${url}. Using fallback.`);
      return FALLBACK_IMAGE;
    }
    return url;
  };

  return (
    <motion.div
      className="relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-xl project-card flex flex-col border border-gray-800/50 backdrop-blur-sm"
      whileHover={isSelected ? {} : { borderColor: "#06B6D4", rotateX: 2 }} // New animation: glowing border and subtle tilt
      transition={{ duration: 0.2, ease: "easeOut" }} // Snappy duration
    >
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-70 transition-all duration-200" /> {/* Adjusted opacity and duration */}
      <div className="w-full h-[220px] md:h-[260px] relative overflow-hidden">
        <motion.img
          src={imgError ? sanitizeUrl(url) || FALLBACK_IMAGE : sanitizeUrl(src)}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={isSelected ? {} : {}} // No image animation to reduce load
          transition={{ duration: 0.2, ease: "easeOut" }}
          layoutId={`project-image-${title}`}
          onError={() => {
            console.warn(`Failed to load image for ${title}: ${src}`);
            setImgError(true);
          }}
          loading="lazy"
          srcSet={`
            ${sanitizeUrl(src)}?w=300,dpr=1 1x,
            ${sanitizeUrl(src)}?w=300,dpr=2 2x,
            ${sanitizeUrl(src)}?w=300,dpr=3 3x
          `}
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
          Project {i + 1}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <motion.h2
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2"
          layoutId={`project-title-${title}`}
        >
          {title}
        </motion.h2>
        <p className="text-sm md:text-base text-gray-300 flex-1 line-clamp-3">{description}</p>
        <div className="mt-4 flex items-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
              style={{ color: color || "#06B6D4" }}
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
              style={{ color: color || "#06B6D4" }}
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
  url: PropTypes.string,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  onDetails: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default ProjectCard;