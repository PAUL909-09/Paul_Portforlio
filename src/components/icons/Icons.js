// src/components/techIcons.js
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCodemirror,
  SiStorybook,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiTypescript 
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
const iconMap = {
  "c++": SiCplusplus,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Vite": SiVite,
  "Monaco Editor": FaCode,
  "CodeMirror": SiCodemirror,
  "Storybook": SiStorybook,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "JavaScript": SiJavascript,
  "C#": TbBrandCSharp,
  "Php": SiPhp,
  "laravel": SiLaravel,
  "Visual Basic": FaCode,
  "Java": FaJava,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Microsoft SQL Server": DiMsqlServer,
  "TypeScript": SiTypescript,
  "Go": FaGolang,
};

// Add official brand colors
const colorMap = {
  "c++": "#00599C",
  "React": "#61DAFB",
  "Tailwind CSS": "#38BDF8",
  "Vite": "#646CFF",
  "Monaco Editor": "#007ACC",
  "CodeMirror": "#000000",
  "Storybook": "#FF4785",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "JavaScript": "#F7DF1E",
  "C#": "#68217A",
  "Php": "#777BB4",
  "laravel": "#FF2D20",
  "Visual Basic": "#512BD4",
  "Java": "#F89820",
  "MySQL": "#4479A1",
  "PostgreSQL": "#336791",
  "Microsoft SQL Server": "#CC2927",
};

export { iconMap, colorMap };