import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center pt-24 px-4">
            <motion.div
                className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                My Projects
            </motion.div>
           
        </section>
    );
}