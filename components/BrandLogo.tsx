import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = "w-40" }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1B365D';
  const dotColor = '#FF6B35';

  return (
    <svg 
      viewBox="0 0 600 150" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Marencore Logo"
      role="img"
    >
      <text 
        x="30" 
        y="100" 
        fontFamily="'EB Garamond', serif" 
        fontSize="80" 
        fontWeight="700" 
        fill={textColor} 
        letterSpacing="-2px"
      >
        Marencore
      </text>
      <circle cx="375" cy="96" r="5" fill={dotColor}/>
    </svg>
  );
};