

// src/components/techIcons.js
import { SiReact, SiTailwindcss, SiVite, SiCodemirror, SiStorybook, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // Import from a different library

const iconMap = {
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'Monaco Editor': FaCode, // Changed to a valid icon
  'CodeMirror': SiCodemirror,
  'Storybook': SiStorybook,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript
};

export default iconMap;