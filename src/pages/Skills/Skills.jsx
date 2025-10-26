/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import IconCloudDemo from "../../components/globe";
import { Code2, Database, Layout, Cpu, Layers } from "lucide-react"; //paintbrudh
import { FaReact, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiPostman,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);
const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "Javascript",
          icon: <SiJavascript className="w-4 h-4 text-[#f7df1e]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: "Mysql",
          icon: <SiMysql className="w-4 h-4 text-[#00758F]" />,
        },
      ],
    },
    {
      icon: Layers,
      title: "Frameworks",
      color: "text-yellow-400",
      skills: [
        {
          name: "Laravel",
          icon: <SiLaravel className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "React",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <SiGithub className="w-4 h-4 text-[#ffffff]" />,
        },
      ],
    },
    // {
    //   icon: Paintbrush,
    //   title: "Creative Skills",
    //   color: "text-yellow-400",
    //   skills: [
    //     {
    //       name: "UI Animation",
    //       icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
    //     },
    //     {
    //       name: "SVG Animation",
    //       icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
    //     },
    //     {
    //       name: "Motion Graphics",
    //       icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
    //     },
    //   ],
    // },
  ];

  return (
    <main>
      <section className="container mx-auto px-4 py-11 relative z-10">
        {" "}
        {/* Added relative z-10 to layer content above backgrounds */}
        {/* Background container - now flexible and contained */}
        <div className="absolute inset-0 h-full">
          {" "}
          {/* h-full makes it flex with section height */}
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-[#04081A]" />
          {/* Grid background - made responsive with vw units */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:5vw_5vw] md:bg-[size:4vw_4vw] lg:bg-[size:3vw_3vw] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
          {/* Animated particles - kept flexible with percentages */}
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
        </div>
        {/* Content - now layered above backgrounds */}
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
