// import React from "react";

// const Background = ({ children }) => {
//   return (
//     <div className="relative min-h-screen bg-[#04081A]">
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 bg-[#04081A]" />

//       {/* Grid background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

//       {/* Animated particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Enhanced background effects */}
//       <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

//       {/* Content container */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// export default Background;
import React from "react";

const Background = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#04081A]">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-[#04081A] z-[-1]" />

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

            {/* Enhanced background effects */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse z-[-1]" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse delay-1000 z-[-1]" />

            {/* Content container */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Background;