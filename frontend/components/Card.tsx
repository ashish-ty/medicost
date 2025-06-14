import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ title, children, className, hover = false, onClick }: CardProps) {
  return (
    <div 
      className={clsx(
        'bg-white rounded-xl shadow-sm border border-primary/10 p-6',
        hover && 'card-hover cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}