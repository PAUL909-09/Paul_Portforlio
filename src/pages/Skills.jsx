import React from "react";
import { motion } from "framer-motion";

// Import custom SVGs
import HtmlIcon from "../assets/Icons/html.svg";
import CssIcon from "../assets/Icons/css.svg";
import JsIcon from "../assets/Icons/javascript.svg";
import TailwindIcon from "../assets/Icons/tailwindcss.svg";
import ReactIcon from "../assets/Icons/react.svg";
import MongodbIcon from "../assets/Icons/mongodb.svg";
import TypescriptIcon from "../assets/Icons/typescript.svg";
import C from "../assets/Icons/c.svg";

// Tools
import VscodeIcon from "../assets/Icons/vscode.svg";
import PostmanIcon from "../assets/Icons/PostmanIcon.svg";
import GithubIcon from "../assets/Icons/github.svg";
import VisualStudioIcon from "../assets/Icons/visualstudio.svg";
import FigmaIcon from "../assets/Icons/figma.svg";
import git from "../assets/Icons/git.svg";
import csharp from "../assets/Icons/csharp.svg";

export default function Skills() {
    const technologies = [
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "TailwindCSS", icon: TailwindIcon },
        { name: "C++", icon: C },
        { name: "C#", icon: csharp },
        { name: "MongoDB", icon: MongodbIcon },
        { name: "Git", icon: git },
        { name: "TypeScript", icon: TypescriptIcon },
    ];

    const tools = [
        { name: "VS Code", icon: VscodeIcon },
        { name: "Postman", icon: PostmanIcon },
        { name: "GitHub", icon: GithubIcon },
        { name: "Visual Studio", icon: VisualStudioIcon },
        { name: "Figma", icon: FigmaIcon },
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center pt-16 text-white px-4">
            {/* Technologies Section */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                My Stack
            </h1>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-full max-w-4xl px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="flex flex-col items-center bg-black/40 p-3 md:p-4 rounded-lg shadow-md w-full h-20 md:h-24 hover:bg-black/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 mb-1" />
                        <p className="text-xs md:text-sm font-medium text-center">{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tools Section */}
            <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-10 mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                Tools I Use
            </h2>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-full max-w-4xl px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        className="flex flex-col items-center bg-black/40 p-3 md:p-4 rounded-lg shadow-md w-full h-20 md:h-24 hover:bg-black/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10 mb-1" />
                        <p className="text-xs md:text-sm font-medium text-center">{tool.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}