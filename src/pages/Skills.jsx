import React from "react";
import { motion } from "framer-motion";

// Import custom SVGs
import HtmlIcon from "../assets/Icons/html.svg";
import CssIcon from "../assets/Icons/css.svg";
import JsIcon from "../assets/Icons/javascript.svg";
import TailwindIcon from "../assets/Icons/tailwindcss.svg";
// import c# from "../assets/Icons/csharp.svg";
import ReactIcon from "../assets/Icons/react.svg";
// import NodeIcon from "../assets/Icons/nodejs.svg";
// import ExpressIcon from "../assets/Icons/expressjs.svg";
import MongodbIcon from "../assets/Icons/mongodb.svg";
import TypescriptIcon from "../assets/Icons/typescript.svg";
import C from "../assets/Icons/c.svg"


// Tools
import VscodeIcon from "../assets/Icons/vscode.svg";
import PostmanIcon from "../assets/Icons/PostmanIcon.svg";
import GithubIcon from "../assets/Icons/github.svg";
import VisualStudioIcon from "../assets/Icons/visualstudio.svg";
import FigmaIcon from "../assets/Icons/figma.svg";

export default function Skills() {
    const technologies = [
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "TailwindCSS", icon: TailwindIcon },
        { name: "C++", icon: C },
        // { name: ".NET", icon: DotNetIcon },
        // { name: "C#", icon: CsharpIcon },
        // { name: "C++", icon: CplusplusIcon },
        // { name: "Visual Basic", icon: VisualBasicIcon },
        { name: "React", icon: ReactIcon },
        // { name: "Node.js", icon: NodeIcon },
        // { name: "Express.js", icon: ExpressIcon },
        { name: "MongoDB", icon: MongodbIcon },
        { name: "TypeScript", icon: TypescriptIcon },
        // { name: "Next.js", icon: NextjsIcon },
    ];

    const tools = [
        { name: "VS Code", icon: VscodeIcon },
        { name: "Postman", icon: PostmanIcon },
        { name: "GitHub", icon: GithubIcon },
        { name: "Visual Studio", icon: VisualStudioIcon },
        { name: "Figma", icon: FigmaIcon },
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center pt-24 bg-[#1a1a1a] text-white">
            <h1 className="text-4xl font-bold mb-10">My Stack</h1>

            {/* Technologies */}
            <motion.div 
                className="grid grid-cols-4 md:grid-cols-5 gap-6 px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="flex flex-col items-center bg-black/40 p-6 rounded-xl shadow-lg w-32 h-32"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={tech.icon} alt={tech.name} className="w-14 h-14 mb-2" />
                        <p className="text-lg font-medium">{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tools Section */}
            <h2 className="text-3xl font-bold mt-16 mb-6">Tools I Use</h2>
            <motion.div 
                className="grid grid-cols-3 md:grid-cols-5 gap-6 px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        className="flex flex-col items-center bg-black/40 p-6 rounded-xl shadow-lg w-32 h-32"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={tool.icon} alt={tool.name} className="w-14 h-14 mb-2" />
                        <p className="text-lg font-medium">{tool.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
