import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button',
  className 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary hover:bg-secondary-dark text-primary border border-primary/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}