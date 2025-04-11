import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookADemo = ({ className = "", onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate('/book-a-demo'); // update as needed
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer ${className}`}
    >
      Book a Demo
    </button>
  );
};

export default BookADemo;
