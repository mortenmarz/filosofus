import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'px-6 py-3 rounded-full text-xl tracking-wider hover:font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-orange-primary text-white hover:bg-orange-light focus:ring-orange-primary',
    secondary: 'bg-teal-accent text-white hover:opacity-90 focus:ring-teal-accent'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;