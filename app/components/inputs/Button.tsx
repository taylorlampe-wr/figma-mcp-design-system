'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The content of the button
   */
  children: ReactNode;
  
  /**
   * The variant of the button
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'text';
  
  /**
   * The size of the button
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The color of the button
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display at the start of the button
   */
  startIcon?: ReactNode;
  
  /**
   * Icon to display at the end of the button
   */
  endIcon?: ReactNode;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  ...props
}: ButtonProps) => {
  const rootClasses = [
    styles.root,
    styles[variant],
    styles[size],
    styles[color],
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={rootClasses}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      <span className={styles.label}>{children}</span>
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  );
};