// src/components/TechIcon.jsx
import React from 'react';
import PropTypes from 'prop-types';
import iconMap from './icons/Icons';

const TechIcon = ({ name }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-gray-400 bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
      <IconComponent className="w-5 h-5" />
      <span>{name}</span>
    </div>
  );
};

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TechIcon;