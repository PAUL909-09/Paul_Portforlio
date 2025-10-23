//src\components\ProjectDetail.jsx
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import TechIcon from "./TechIcon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetail({ project, onBack }) {
  const [imgError, setImgError] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const galleryRef = useRef(null);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const FALLBACK_IMAGE = "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg"; // Temporary fallback

  const sanitizeUrl = (url) => {
    if (!url || !url.startsWith("https://res.cloudinary.com/dr7pljkee/")) {
      console.warn(`Invalid URL detected: ${url}. Using fallback.`);
      return FALLBACK_IMAGE;
    }
    return url;
  };

  useEffect(() => {
    if (project.details?.gallery?.length > 0) {
      setSelectedGalleryImage(project.details.gallery[0]);
    }
  }, [project.details?.gallery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  const hasContent = (data) => {
    if (Array.isArray(data)) return data.length > 0;
    return !!data;
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden bg-[#04081A] py-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      <div className="max-w-4xl mx-auto relative z-10 mt-10">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 text-gray-300 hover:text-cyan-400 text-lg font-medium flex items-center transition-all duration-200 rounded-lg hover:bg-gray-800 min-w-[150px] min-h-[40px] cursor-pointer"
          aria-label="Back to projects"
        >
          ← Back to Projects
        </button>
        {/* <div className="bg-gray-900/50 rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm border border-gray-800/50">
          <div className="w-full h-[250px] md:h-[400px] overflow-hidden rounded-lg mb-6">
            <motion.img
              src={imgError ? sanitizeUrl(project.link) || FALLBACK_IMAGE : sanitizeUrl(project.src)}
              alt={project.title}
              className="w-full h-full object-cover"
              layoutId={`project-image-${project.id}`}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onError={() => {
                console.warn(`Failed to load main image for ${project.title}: ${project.src}`);
                setImgError(true);
              }}
              loading="lazy"
              srcSet={`
                ${sanitizeUrl(project.src)}?w=600,dpr=1 1x,
                ${sanitizeUrl(project.src)}?w=600,dpr=2 2x,
                ${sanitizeUrl(project.src)}?w=600,dpr=3 3x
              `}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-3"
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
          <div className="flex flex-wrap gap-4 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition"
                aria-label={`View source code for ${project.title}`}
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium flex items-center gap-2 hover:from-purple-600 hover:to-indigo-600 transition"
                aria-label={`View live demo for ${project.title}`}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div> */}
        <div className="space-y-8">
          {hasContent(project.details?.overview) && (
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 text-base leading-relaxed">{project.details.overview}</p>
            </motion.div>
          )}
          {hasContent(project.details?.techStack) && (
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">🛠 Tech Stack</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {project.details.techStack.map((tech) => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          )}
          {hasContent(project.details?.features) && (
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">⭐ Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 text-base space-y-2 leading-relaxed">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          )}
          {hasContent(project.details?.learnings) && (
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">📖 Learnings</h3>
              <p className="text-gray-300 text-base leading-relaxed">{project.details.learnings}</p>
            </motion.div>
          )}
          {hasContent(project.details?.gallery) && (
            <motion.div
              ref={galleryRef}
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-800/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">📸 Project Screencap</h3>
              <AnimatePresence mode="wait">
                {selectedGalleryImage && (
                  <motion.div
                    key={selectedGalleryImage.image}
                    className="mb-6 flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={sanitizeUrl(selectedGalleryImage.image) || FALLBACK_IMAGE}
                      alt={selectedGalleryImage.caption || "Gallery image"}
                      className="w-full h-auto rounded-lg mb-4 object-cover"
                      onError={() => console.warn(`Failed to load gallery image: ${selectedGalleryImage.image}`)}
                      loading="lazy"
                      srcSet={`
                        ${sanitizeUrl(selectedGalleryImage.image)}?w=600,dpr=1 1x,
                        ${sanitizeUrl(selectedGalleryImage.image)}?w=600,dpr=2 2x,
                        ${sanitizeUrl(selectedGalleryImage.image)}?w=600,dpr=3 3x
                      `}
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    {selectedGalleryImage.caption && (
                      <p className="text-gray-300 text-center text-base leading-relaxed">{selectedGalleryImage.caption}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {galleryVisible &&
                  project.details.gallery.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedGalleryImage(item)}
                      className={`
                        w-full h-24 overflow-hidden rounded-lg transition-all duration-200 ease-in-out
                        ${selectedGalleryImage?.image === item.image ? "ring-2 ring-cyan-500 shadow-md" : "hover:ring-2 hover:ring-cyan-400"}
                      `}
                      aria-label={`Select gallery image ${index + 1}`}
                    >
                      <img
                        src={sanitizeUrl(item.image) || FALLBACK_IMAGE}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={() => console.warn(`Failed to load thumbnail: ${item.image}`)}
                        loading="lazy"
                        srcSet={`
                          ${sanitizeUrl(item.image)}?w=150,dpr=1 1x,
                          ${sanitizeUrl(item.image)}?w=150,dpr=2 2x,
                          ${sanitizeUrl(item.image)}?w=150,dpr=3 3x
                        `}
                        sizes="150px"
                      />
                    </button>
                  ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    details: PropTypes.shape({
      overview: PropTypes.string,
      techStack: PropTypes.arrayOf(PropTypes.string),
      features: PropTypes.arrayOf(PropTypes.string),
      learnings: PropTypes.string,
      gallery: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          caption: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ProjectDetail; // Single default export