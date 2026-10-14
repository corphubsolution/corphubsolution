import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'navy' | 'whatsapp' | 'orange';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  id?: string;
  external?: boolean;
  'aria-label'?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled,
  id,
  external,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? 'btn-outline'
      : variant === 'orange'
      ? 'btn-primary'
      : `btn-${variant}`;
  const classes = `btn ${variantClass}${size !== 'md' ? ` btn-${size}` : ''} ${className}`;


  if (to) {
    return (
      <Link to={to} className={classes} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        id={id}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
