import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";
import Background from "@/components/Background";

export default function About() {
  return (
    <Background>
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
                Hello! I'm Paul, an <span className="font-semibold text-emerald-300">aspiring web developer</span> passionate about
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
    </Background>
  );
}
