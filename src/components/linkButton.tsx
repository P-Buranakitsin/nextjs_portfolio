import React, { useState } from 'react';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

interface LinkButtonProps {
  url: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconColor = isHovered ? 'black' : 'white';

  return (
    <button
      className="btn btn-outline-light btn-md px-4"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="d-flex align-items-center justify-content-center">
        {label}
        <BoxArrowUpRight
          color={iconColor}
          size={18}
          className="ms-2"
          stroke={iconColor}
          strokeWidth={1}
        />
      </div>
    </button>
  );
};

export default LinkButton;
