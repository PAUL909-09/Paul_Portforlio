import React, { useState, useEffect } from "react";
import "./assets/css/index.css";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Background from "./components/Background";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
<Background>
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
          <Header />
          {isOnePage ? (
            <>
              <Hero />
              <Skills />
              <Experience />
              <Education />
              <Contact />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          )}
        </motion.div>
      )}
    </AnimatePresence>
</Background>
  );
}