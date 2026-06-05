import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NavButtonProps {
  section: string;
  children: ReactNode;
  active: boolean;
  onClick: (section: string) => void;
}

export const NavButton = ({ section, children, active, onClick }: NavButtonProps) => (
  <button
    onClick={() => onClick(section)}
    role="tab"
    aria-selected={active}
    aria-controls={`${section}-panel`}
    className={cn(
      'px-6 py-3 text-xl font-black uppercase tracking-wider',
      'border-4 border-black transition-all duration-300 ease-in-out',
      'transform hover:scale-[1.03] hover:rotate-1',
      active
        ? 'bg-red-500 text-white shadow-[8px_8px_0px_0px_theme(colors.black)]'
        : 'bg-white text-black hover:bg-yellow-400 shadow-[4px_4px_0px_0px_theme(colors.black)]',
    )}>
    {children}
  </button>
);
