// import HeroImg from "@/assets/images/hero.png";
// import OlovaLogo from "@/assets/images/olova.png";

// export default function About() {
//   return (
//     <>
//       <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
//         <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
//           <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
//             Developer, Designer, Creator, Innovator
//           </h2>
//           <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
//             <div className="relative mb-6 sm:mb-0">
//               <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
//                 <img
//                   src={HeroImg}
//                   className="rounded-[15px] shadow block"
//                   alt="payments illustration"
//                   width={1207}
//                   height={929}
//                 />
//               </div>
//             </div>

//             <div className="relative space-y-4">
//               <p className="text-white">
//                 Hello! I'm Paul, a passionate JavaScript developer
//                 specializing in creating innovative web solutions and
//                 user-friendly interfaces.{" "}
//                 <span className="font-bold text-white">
//                   As the creator of the OlovaJS UI Framework
//                 </span>
//                 , I'm dedicated to simplifying development workflows.
//               </p>
//               <p className="text-white">
//                 My focus is on making web development faster, easier, and
//                 accessible to all developers. Currently, I'm expanding into
//                 backend development to grow as a full-stack developer and create
//                 seamless, robust web applications.
//               </p>

//               <div className="pt-6">
//                 <blockquote className="border-l-4 border-gray-300 pl-4">
//                   <p className="text-white">
//                     I'm a lifelong learner and innovator, driven by a desire to
//                     contribute to the developer community with new ideas and
//                     tools that deliver real value. As the creator of OlovaJS,
//                     I'm pushing the boundaries of JavaScript frameworks to
//                     empower developers worldwide.
//                   </p>

//                   <div className="mt-6 space-y-3">
//                     <cite className="block font-medium text-white">
//                       Joseph John Paul Almazan, Creator of
//                     </cite>
//                     <div className="flex items-center gap-2">
//                       <img
//                         className="h-5 w-fit"
//                         src={OlovaLogo}
//                         alt="Olova Logo"
//                         height="20"
//                         width="auto"
//                       />
//                       <span className="text-white">OlovaJS</span>
//                     </div>
//                   </div>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#04081A] text-white overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A journey of continuous growth, adapting to new tools and
            technologies to build better web experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image card */}
          <div className="relative group">
            <div className="p-[2px] md:rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={HeroImg}
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text card */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              Hello! I'm Paul, a <span className="font-semibold text-emerald-300">JavaScript developer</span> passionate about
              creating modern web applications and user-friendly interfaces. I’m
              currently expanding my skills into <span className="font-bold text-cyan-300">Laravel, React, Inertia, and TypeScript</span>,
              continuously learning and adapting to new technologies.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              My goal is to grow as a full-stack developer and craft seamless,
              scalable, and high-performing applications. I value clean code,
              adaptability, and constant improvement as I take on new
              challenges in web development.
            </p>

            {/* Quote */}
            <div className="bg-[#0f1438] rounded-2xl p-6 border border-gray-700 shadow-lg">
              <p className="italic text-gray-300">
                "I see every project as an opportunity to learn something new,
                whether it's mastering a framework, exploring backend logic, or
                improving performance. Adaptability is my strength, and growth
                is my mindset."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img src={OlovaLogo} alt="Olova Logo" className="h-6" />
                <div>
                  <span className="block font-medium text-white">
                    Joseph John Paul Almazan
                  </span>
                  <span className="text-sm text-gray-400">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
