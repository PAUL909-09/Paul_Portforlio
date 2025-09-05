// import { useEffect } from "react";
// import Prism from "prismjs";
// import "prismjs/components/prism-javascript";
// import "@/assets/css/tomorrow.css";
// import Meteors from "@/components/ui/meteors";
// import PortfolioPage from "@/pages/About/About";
// import SparklesText from "@/components/ui/sparkles-text";
// import { FlipWords } from "@/components/ui/flip-words";
// import { CONSTRAINTS } from "@/config/config";
// import Background from "@/components/Background";

// const code = `
// const profile = {
//     name: '${CONSTRAINTS.PROFILE.NAME}',
//     title: '${CONSTRAINTS.PROFILE.TITLE}',
//     graduationYear: ${CONSTRAINTS.PROFILE.GRADUATIONYEAR},
//     comfortableWith: [
//         '${CONSTRAINTS.PROFILE.COMPORTABLEWITH.join("',\n            '")}'
//     ],
//     skills: [
//         '${CONSTRAINTS.PROFILE.SKILSS.join("',\n            '")}'
//     ],
//     hireable: function() {
//         return (
//             this.qualities.adaptable &&
//             this.qualities.quickLearner &&
//             this.qualities.alwaysLearning &&
//             this.qualities.problemSolver
//         );
//     }
// };
// `;

// export default function Hero() {
//   useEffect(() => {
//     Prism.highlightAll();

//     // Add CSS for resolution-specific padding
//     const style = document.createElement("style");
//     style.textContent = `
//       @media screen and (min-width: 1360px) and (max-width: 1370px) and (min-height: 760px) and (max-height: 775px) {
//         .hero { padding-top: 12rem !important; }
//         .hero .container { padding-top: 10rem !important; margin-top: 5rem !important; }
//         .hero-section-padding { padding-top: 12rem !important; }
//       }
//     `;
//     document.head.appendChild(style);

//     // Apply padding for specific resolution
//     const checkResolution = () => {
//       const isTargetResolution =
//         window.innerWidth >= 1360 &&
//         window.innerWidth <= 1370 &&
//         window.innerHeight >= 760 &&
//         window.innerHeight <= 775;

//       document.documentElement.style.setProperty(
//         "--hero-padding-top",
//         isTargetResolution ? "12rem" : "0"
//       );
//     };

//     checkResolution();
//     window.addEventListener("resize", checkResolution);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", checkResolution);
//     };
//   }, []);

//   return (
//     <Background>
//       <main className="text-white min-h-screen">
//         <section
//           className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
//           style={{ paddingTop: "var(--hero-padding-top, 0)" }}
//         >
//           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8 md:py-10 lg:py-12">
//             {/* Left column - Text content */}
//             <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
//               <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
//               <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

//               <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
//                 <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
//                 <span className="text-gray-300 text-xs sm:text-sm font-medium">
//                   Welcome to my universe
//                 </span>
//               </div>

//               <div className="relative mb-6 sm:mb-8">
//                 <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
//                   <SparklesText text="Hello" />
//                   <span className="relative inline-block">
//                     I&apos;m
//                     <span className="typing-effect gradient-text">
//                       {" "}
//                       {CONSTRAINTS.PROFILE.NAME}
//                     </span>
//                   </span>
//                 </h1>
//                 <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
//               </div>

//               <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
//                 <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
//                 <span>
//                   <FlipWords
//                     className="text-lg sm:text-xl text-blue-400 font-medium"
//                     words={CONSTRAINTS.WORDS}
//                   />
//                 </span>
//               </div>

//               <div className="relative mb-8 sm:mb-12 max-w-xl">
//                 <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
//                   Fresh Graduate 2025 🎓 | Full-Stack Explorer 🌐 <br />
//                   Completed 2 OJTs | Laravel + React (TypeScript) Builder ⚡ Lifelong
//                   Learner 📚✨
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
//                 <a
//                   href={CONSTRAINTS.LINKS.github}
//                   className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
//                 >
//                   <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
//                     <span className="relative flex items-center justify-center gap-2 text-white font-medium">
//                       <span>Learn More</span>
//                       <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
//                     </span>
//                   </span>
//                 </a>

//                 <a
//                   href={CONSTRAINTS.LINKS.resume}
//                   className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
//                 >
//                   <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
//                     <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
//                       <span>Get Resume</span>
//                       <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
//                     </span>
//                   </span>
//                 </a>
//               </div>

//               <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
//                 <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
//                   <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI Magic
//                 </div>
//               </div>
//               <div className="hidden lg:block absolute right-10 top-20 animate-float">
//                 <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
//                   <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
//                 </div>
//               </div>
//               <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
//                 <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
//                   <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
//                 </div>
//               </div>
//             </div>

//             {/* Right column - Code window */}
//             <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
//               <div className="gradient-border">
//                 <div className="code-window bg-[#091121]">
//                   <div className="window-header">
//                     <div className="window-dot bg-red-500"></div>
//                     <div className="window-dot bg-yellow-500"></div>
//                     <div className="window-dot bg-green-500"></div>
//                     <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
//                       <i className="fas fa-code"></i>
//                       developer.js
//                     </span>
//                   </div>
//                   <pre className="language-javascript">
//                     <code className="language-javascript">{code}</code>
//                   </pre>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
//             <span className="text-gray-400 text-sm flex items-center gap-2">
//               <i className="fas fa-mouse text-blue-400"></i>
//               About me
//             </span>
//             <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
//           </div>
//         </section>
//         <PortfolioPage />
//       </main>
//     </Background>
//   );
// }

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { CONSTRAINTS } from "@/config/config";
import Background from "@/components/Background";

const code = `
const profile = {
    name: '${CONSTRAINTS.PROFILE.NAME}',
    title: '${CONSTRAINTS.PROFILE.TITLE}',
    graduationYear: ${CONSTRAINTS.PROFILE.GRADUATIONYEAR},
    comfortableWith: [
        '${CONSTRAINTS.PROFILE.COMPORTABLEWITH.join("',\n            '")}'
    ],
    skills: [
        '${CONSTRAINTS.PROFILE.SKILSS.join("',\n            '")}'
    ],
    hireable: function() {
        return (
            this.qualities.adaptable &&
            this.qualities.quickLearner &&
            this.qualities.alwaysLearning &&
            this.qualities.problemSolver
        );
    }
};
`;

export default function Hero() {
  useEffect(() => {
    Prism.highlightAll();

    // Add CSS for resolution-specific padding
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (min-width: 1360px) and (max-width: 1370px) and (min-height: 760px) and (max-height: 775px) {
        .hero { padding-top: 12rem !important; }
        .hero .container { padding-top: 10rem !important; margin-top: 5rem !important; }
        .hero-section-padding { padding-top: 12rem !important; }
      }
    `;
    document.head.appendChild(style);

    // Apply padding for specific resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      document.documentElement.style.setProperty(
        "--hero-padding-top",
        isTargetResolution ? "12rem" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    // <Background>
    <main className="text-white min-h-screen">
      <section
        className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
        style={{ paddingTop: "var(--hero-padding-top, 0)" }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8 md:py-10 lg:py-12">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text">
                    {" "}
                    {CONSTRAINTS.PROFILE.NAME}
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords
                  className="text-lg sm:text-xl text-blue-400 font-medium"
                  words={CONSTRAINTS.WORDS}
                />
              </span>
            </div>

            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                Fresh Graduate 2025 🎓 | Full-Stack Explorer 🌐 <br />
                Completed 2 OJTs | Laravel + React (TypeScript) Builder ⚡ Lifelong
                Learner 📚✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href={CONSTRAINTS.LINKS.github}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                </span>
              </a>

              <a
                href={CONSTRAINTS.LINKS.resume}
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                    <span>Get Resume</span>
                    <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                  </span>
                </span>
              </a>
            </div>

            <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI Magic
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
            <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
              </div>
            </div>
          </div>

          {/* Right column - Code window */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
      </section>
      <PortfolioPage />
    </main>
    // </Background>
  );
}