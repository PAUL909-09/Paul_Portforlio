import { motion } from "framer-motion";
import profilePicture from "../assets/my_profile_picture.jpg";

export default function Main() {
    return (
        <main id="home" className="min-h-screen flex items-center justify-center py-32 px-6 text-white">
            <div className="max-w-4xl w-full text-center space-y-8">
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-xl border-4 border-orange-400"
                >
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Profile Information */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        JOSEPH JOHN PAUL ALMAZAN
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 drop-shadow-md">
                        IT STUDENT
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Passionate, dedicated, and adaptable IT student with a strong interest in web development and problem-solving.
                        Always eager to learn and grow in the ever-evolving tech industry.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
