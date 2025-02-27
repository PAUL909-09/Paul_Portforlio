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
            className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden"
        >
            {/* Background Blur Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 md:left-20 h-56 w-56 md:h-64 md:w-64 bg-purple-700 blur-[140px] opacity-30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 md:right-20 h-64 w-64 md:h-72 md:w-72 bg-blue-600 blur-[160px] opacity-25 rounded-full"></div>
            </div>

            <motion.div
                className="max-w-5xl mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl font-extrabold text-white tracking-wide mb-12">
                    Work Experience
                    <span className="block h-1 bg-gradient-to-r from-orange-400 to-yellow-500 w-32 mx-auto mt-2"></span>
                </h1>

                {/* Work Experience Card */}
                <motion.div
                    className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20 text-left max-w-4xl mx-auto"
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
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I completed my first On-the-Job Training (OJT) at Trifecta Solutions
                        Inc. in Quezon City from July 2024 to September 2024. During my
                        time there, I served as a Junior Programmer 1/Junior Programmer 2,
                        where I was responsible for UI designing, frontend developing, and
                        backend developing. Throughout the internship, I successfully
                        completed tasks within deadlines and developed skills in UI design,
                        frontend, and backend development. The experience provided me
                        with valuable insights into the industry and allowed me to apply my
                        technical skills in a real-world setting. I am grateful for the
                        opportunity to have worked with a team of experienced
                        professionals and to have gained practical experience in software
                        development.
                    </p>

                    {/* Glowing Effect */}
                    <div className="absolute -top-6 -left-6 w-14 h-14 bg-orange-500 blur-3xl opacity-50 rounded-full"></div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500 blur-3xl opacity-50 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
