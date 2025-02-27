import React, { useState } from "react";
import { motion } from "framer-motion";

function FuturisticNavbar() {
    const [active, setActive] = useState("about");

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActive(sectionId);
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "work-experience", label: "Work Experience" },
    ];

    return (
        <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white/10 backdrop-blur-lg shadow-xl p-3 z-50 flex items-center justify-center rounded-full border border-gray-400">
            {/* Navigation Bar */}
            <div className="relative flex items-center w-full">
                {/* Navigation Links */}
                <nav className="flex justify-between w-full px-10 text-white">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${active === item.id ? "bg-orange-500 text-black shadow-lg" : "hover:text-orange-400 hover:scale-110"
                                }`}
                            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)" }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </nav>

                {/* Central Logo */}
                {/* <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 bg-orange-500 text-white p-4 rounded-full font-bold shadow-lg border-4 border-gray-700"
                    // whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.8)" }}
                >
                    JP
                </motion.div> */}
            </div>
        </header>
    );
}

export default FuturisticNavbar;
