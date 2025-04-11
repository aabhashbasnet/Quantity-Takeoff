import React from 'react';

const LearnMore = ({
  className = '',
  onClick,
  label = 'Learn More',
  variant = 'orange', // default variant
}) => {
  const variants = {
    orange: 'border-orange-600 text-orange-600 hover:bg-orange-50',
    blue: 'border-blue-600 text-blue-600 hover:bg-blue-50',
    green: 'border-green-600 text-green-600 hover:bg-green-50',
  };
  const baseStyles = 'border-2 px-8 py-3 rounded-full text-lg font-semibold transition-all';
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default LearnMore;
