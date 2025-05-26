import React from 'react';

interface NavButtonProps {
  section: string;
  children: React.ReactNode;
  active: boolean;
  onClick: (section: string) => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  section,
  children,
  active,
  onClick,
}) => (
  <button
    onClick={() => onClick(section)}
    className={`px-6 py-3 text-xl font-black uppercase tracking-wider border-4 border-black transition-all duration-200 transform hover:scale-105 hover:rotate-1 ${
      active
        ? 'bg-red-500 text-white shadow-[8px_8px_0px_0px_theme(colors.black)]'
        : 'bg-white text-black hover:bg-yellow-400 shadow-[4px_4px_0px_0px_theme(colors.black)]'
    }`}>
    {children}
  </button>
);
