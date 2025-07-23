'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * If true, the component is checked.
   */
  checked?: boolean;
  
  /**
   * The color of the component.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: 'small' | 'medium';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  checked,
  color = 'primary',
  disabled = false,
  size = 'medium',
  className,
  ...props
}, ref) => {
  const rootClasses = [
    styles.root,
    styles[size],
    styles[color],
    disabled && styles.disabled,
    checked && styles.checked,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClasses}>
      <span className={styles.switchBase}>
        <input
          ref={ref}
          className={styles.input}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span className={styles.thumb} />
      </span>
      <span className={styles.track} />
    </span>
  );
});