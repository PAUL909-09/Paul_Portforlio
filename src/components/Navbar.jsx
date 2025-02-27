import React, { useState } from "react";

function GradientNavbar() {
    const [active, setActive] = useState("main");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    // Function to handle smooth scrolling to a section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActive(sectionId); // Update the active state
        setIsMenuOpen(false); // Close the mobile menu after clicking a link
    };

    // Navigation items
    const navItems = [
        { id: "main", label: "Main" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "work-experience", label: "Work Experience" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl p-4 mx-auto max-w-4xl flex items-center justify-between shadow-xl transition-all duration-300 z-50 rounded-b-full">
            {/* Logo */}
            <div
                className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => scrollToSection("main")}
            >
                <div className="bg-orange-500 text-white p-2 rounded-full font-bold shadow-lg">
                    JC
                </div>
                <span className="text-white font-bold text-lg tracking-wider">JCREA</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
                className="text-white lg:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Navigation Links */}
            <ul
                className={`lg:flex lg:items-center lg:space-x-6 text-white absolute lg:static top-16 left-0 w-full lg:w-auto bg-black/40 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-0 p-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}
            >
                {navItems.map((item) => (
                    <li key={item.id} className="my-2 lg:my-0">
                        <a
                            href={`#${item.id}`}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 rounded-full font-bold transition-all duration-300 block lg:inline-block 
                  ${active === item.id
                                    ? "bg-orange-500 scale-110 shadow-md text-white"
                                    : "hover:text-orange-400"
                                }`}
                            aria-current={active === item.id ? "page" : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default GradientNavbar;