import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export const BrutalistCard = ({
  children,
  className,
  bgColor = 'bg-white',
}: BrutalistCardProps) => (
  <div
    className={cn(
      'border-4 border-black p-4 sm:p-6',
      'shadow-[4px_4px_0px_0px_theme(colors.black)] sm:shadow-[8px_8px_0px_0px_theme(colors.black)]',
      'transform hover:scale-[1.02] transition-transform duration-300 ease-in-out',
      bgColor,
      className,
    )}>
    {children}
  </div>
);
