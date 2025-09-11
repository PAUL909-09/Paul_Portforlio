// src/components/PageLoader.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading"; // Adjust the path based on your project structure

export default function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(process.env.NODE_ENV === "production"); //change the production into development to activate the loading function

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Simulate loading delay (2.5 seconds) only in production
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}