'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The icon to display.
   */
  children: ReactNode;
  
  /**
   * The color of the component.
   * @default "default"
   */
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const IconButton = ({
  children,
  color = 'default',
  disabled = false,
  size = 'medium',
  className,
  ...props
}: IconButtonProps) => {
  const rootClasses = [
    styles.root,
    styles[size],
    styles[color],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={rootClasses}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};