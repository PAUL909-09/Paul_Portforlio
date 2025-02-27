import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-24 px-4">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Section Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    About Me
                </motion.h1>

                {/* About Content */}
                <motion.div
                    className="bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-xl shadow-lg text-lg md:text-xl text-stone-300 leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p>
                        Motivated IT student in my third year at{" "}
                        <span className="font-semibold text-orange-400">
                            Polytechnic University of the Philippines, Lopez Quezon Branch
                        </span>
                        . Seeking an OJT opportunity to apply my technical skills and gain
                        real-world experience in software development, network
                        administration, or cybersecurity.
                    </p>
                    <p className="mt-4">
                        Passionate about learning new technologies and working in a
                        fast-paced and dynamic environment. Excited to contribute my ideas
                        and learn from experienced professionals to further my career in IT.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}