import React from 'react';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = '',
  bgColor = 'bg-white',
}) => (
  <div
    className={`${bgColor} border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_theme(colors.black)] sm:shadow-[8px_8px_0px_0px_theme(colors.black)] transform hover:scale-105 transition-transform duration-200 ${className}`}>
    {children}
  </div>
);
