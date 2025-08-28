import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="Projects" className="min-h-screen flex items-center justify-center pt-24 px-4">
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
                    My Projects walapa
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-lg md:text-xl text-stone-300 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    </motion.p>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Service Card 1: UI/UX Design */}
                    <motion.div
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:bg-black/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-orange-400">UI/UX Design</h2>
                        <p className="text-stone-300">
                            Creating intuitive and user-friendly interfaces for web and mobile applications.
                        </p>
                    </motion.div>

                    {/* Service Card 2: Web Design */}
                    <motion.div
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:bg-black/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-orange-400">Web Design</h2>
                        <p className="text-stone-300">
                            Designing modern and responsive websites tailored to your needs.
                        </p>
                    </motion.div>

                    {/* Service Card 3: Landing Page */}
                    <motion.div
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:bg-black/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-orange-400">Landing Page</h2>
                        <p className="text-stone-300">
                            Crafting high-conversion landing pages to grow your business.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}