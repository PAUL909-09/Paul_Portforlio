"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import "@/assets/css/index.css";

export const Meteors = ({
  number = 20,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.floor(Math.random() * 10 + 5) + "s",
      size: Math.random() * 2 + 1, // Random size between 1-3px
      opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5-1
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <div
          key={idx}
          className={cn("meteor pointer-events-none", className)}
          style={{
            '--top': style.top,
            '--left': style.left,
            '--delay': style.animationDelay,
            '--duration': style.animationDuration,
            '--size': `${style.size}px`,
            '--opacity': style.opacity,
            '--initial-rotation': `${Math.floor(Math.random() * 90) - 45}deg`, // Random rotation between -45 and +45
            '--final-rotation': `${Math.floor(Math.random() * 90) + 90}deg`, // Random final rotation
            top: style.top,
            left: style.left,
          }}
        />
      ))}
    </>
  );
};

export default Meteors;
