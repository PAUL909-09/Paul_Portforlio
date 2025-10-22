

// src/components/techIcons.js
import { SiReact, SiTailwindcss, SiVite, SiCodemirror, SiStorybook, SiHtml5, SiCss3, SiJavascript, SiCplusplus } from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // Ensure FaCode is imported if used for Monaco Editor

const iconMap = {
  'c++':SiCplusplus,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'Monaco Editor': FaCode,
  'CodeMirror': SiCodemirror,
  'Storybook': SiStorybook,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript
};

export default iconMap;