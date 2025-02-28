import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

function FuturisticNavbar() {
    const [active, setActive] = useState("about");
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActive(sectionId);
        setIsOpen(false);
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "work-experience", label: "Work Experience" },
    ];

    return (
        <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-white/10 backdrop-blur-lg shadow-xl p-2 z-50 flex items-center justify-between rounded-full border border-gray-400 px-4 md:px-6">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white p-2" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <ChevronDown size={24} />}
            </button>
            
            {/* Navigation Bar */}
            <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none p-3 md:p-0 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 ${isOpen ? "block" : "hidden md:flex"}`}>
                {navItems.map((item) => (
                    <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-3 py-1 rounded-full font-semibold transition-all duration-300 ${active === item.id ? "bg-orange-500 text-black shadow-lg" : "hover:text-orange-400 hover:scale-105"}`}
                        whileHover={{ scale: 1.05, textShadow: "0px 0px 6px rgba(255, 165, 0, 0.8)" }}
                    >
                        {item.label}
                    </motion.a>
                ))}
            </nav>
        </header>
    );
}

export default FuturisticNavbar;
