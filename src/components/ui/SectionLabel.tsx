import React from 'react';

interface SectionLabelProps {
  children?: React.ReactNode;
  text?: string;
  variant?: 'default' | 'light';
  className?: string;
}

export default function SectionLabel({ children, text, variant = 'default', className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label${variant === 'light' ? ' section-label--light' : ''} ${className}`}>
      {children || text}
    </span>
  );
}

