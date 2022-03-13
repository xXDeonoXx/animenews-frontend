import React from 'react';

interface ChipProps {
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className }) => {
  return (
    <span
      className={`capitalize bg-red-700 text-white rounded-2xl font-bold px-2 text-sm py-1 mr-2 ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
