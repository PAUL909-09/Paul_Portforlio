import GradientNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";


// Reusable Background Effects Component
function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 bg-black flex items-center justify-center">
      {/* Subtle Dark Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1a,#000)]"></div>

      {/* Blurred Glow Elements */}
      <div className="absolute top-20 left-20 h-80 w-80 bg-purple-700 blur-[150px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-16 right-32 h-96 w-96 bg-blue-600 blur-[180px] opacity-25 rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 h-72 w-72 bg-indigo-500 blur-[130px] opacity-20 rounded-full"></div>

      {/* Faint Overlay for Depth */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Navbar Component */}
      <GradientNavbar />

      {/* Main Content */}
      <Main />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Work Experience Section */}
      <WorkExperience />

      <Footer/>
    </div>
  );
}