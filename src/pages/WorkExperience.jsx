import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function WorkExperience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            setAnimate(true); // Trigger animation when visible
        } else {
            setAnimate(false); // Reset when out of view
        }
    }, [isInView]);

    return (
        <section
            id="work-experience"
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center pt-24 relative overflow-hidden"
        >
            {/* Background Blur Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-20 h-64 w-64 bg-purple-700 blur-[140px] opacity-30 rounded-full"></div>
                <div className="absolute bottom-10 right-20 h-72 w-72 bg-blue-600 blur-[160px] opacity-25 rounded-full"></div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl font-extrabold text-white tracking-wide mb-12">
                    Work Experience
                    <span className="block h-1 bg-gradient-to-r from-orange-400 to-yellow-500 w-24 mx-auto mt-2"></span>
                </h1>

                {/* Work Experience Card */}
                <motion.div
                    className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20 text-left max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-2">
                        TRIFECTA SOLUTIONS INC. X UNLAD FOUNDATION
                    </h2>
                    <p className="text-lg text-orange-400 mb-4 font-semibold">
                        JULY 2024 - SEPT 2024
                    </p>
                    <p className="text-lg text-gray-300">
                        Completed OJT as a Junior Programmer (UI, Frontend, Backend).
                        Successfully met deadlines while enhancing UI design and development skills.
                    </p>

                    {/* Glowing Effect */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 blur-3xl opacity-50 rounded-full"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 blur-3xl opacity-50 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
