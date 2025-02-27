import { motion } from "framer-motion";
import profilePicture from "../assets/my_profile_picture.jpg";

export default function Main() {
    return (
        <main id="main" className="min-h-screen flex items-center justify-center pt-24">
            <div className="flex flex-col items-center space-y-8">
                {/* Profile Picture with Outline and Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg hover:scale-105 hover:border-orange-400 transition-all duration-300"
                >
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Welcome Text with Animation */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                        JOSEPH JOHN PAUL ALMAZAN
                    </h1>
                    <h2 className="text-3xl font-semibold mb-4 text-orange-400">
                        IT STUDENT
                    </h2>
                    <p className="text-lg text-stone-300 max-w-md">
                        Passionate, dedicated, and adaptable IT student with a strong interest in
                        web development and problem-solving. Always eager to learn and grow in the
                        ever-evolving tech industry.
                    </p>

                    <p className="text-lg text-stone-300 max-w-md">
                        this my ONLY_TEST branch
                    </p>
                </motion.div>
            </div>
        </main>
    );
}