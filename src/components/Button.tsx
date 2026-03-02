// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${
        variant === 'primary' ? 'bg-maingreen text-white' : 'bg-buttonGray'
      }`}
    >
      {children}
    </button>
  );
}