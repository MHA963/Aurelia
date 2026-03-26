import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LogoProps {
  className?: string;
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, id = "logo-path" }) => (
  <svg viewBox="0 0 100 100" className={cn("w-24 h-24", className)}>
    <path 
      id={id}
      d="M20 80 L50 20 L80 80 M35 55 L65 55" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
