import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div className={`rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export { Card, CardContent };
