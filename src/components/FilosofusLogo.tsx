import React from 'react';
import FilosofusCharacter from '../assets/filosofus.png';

interface FilosofusLogoProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const FilosofusLogo: React.FC<FilosofusLogoProps> = ({ size = 'medium', onClick, className }) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40'
  };

  return (
    <div
    className={`relative ${sizeClasses[size]} flex items-center justify-center rounded-lg ${className}`}
    onClick={onClick}
    >
      <img
        src={FilosofusCharacter}
        alt="Filosofus Kaninen"
        className="object-contain w-full h-full rounded-lg"
      />
    </div>
  );
};

export default FilosofusLogo;