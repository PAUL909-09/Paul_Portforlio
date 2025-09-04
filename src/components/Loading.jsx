import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/assets/css/index.css";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Percentage progress
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 25); // 2.5s total

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate dots after "Loading"
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50">
      {/* Circular Progress Ring */}
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#1E3A8A"
            strokeWidth="10"
            fill="none"
            className="opacity-30"
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            stroke="#3B82F6"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </svg>

        {/* Percentage in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{progress}%</span>
        </div>
      </div>

      {/* Loading Text with Animated Dots */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl sm:text-3xl font-semibold text-white tracking-wide font-mono"
      >
        Loading{dots}
      </motion.h1>
    </div>
  );
};

export default Loading;
