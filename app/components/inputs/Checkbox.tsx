'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
   * If true, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;
  
  /**
   * If true, the component appears indeterminate.
   * @default false
   */
  indeterminate?: boolean;
  
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

const CheckIcon = () => (
  <svg className={styles.icon} focusable="false" viewBox="0 0 24 24">
    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const IndeterminateIcon = () => (
  <svg className={styles.icon} focusable="false" viewBox="0 0 24 24">
    <path d="M19 13H5v-2h14v2z"/>
  </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  checked,
  color = 'primary',
  disabled = false,
  disableRipple = false,
  indeterminate = false,
  size = 'medium',
  className,
  ...props
}, ref) => {
  const rootClasses = [
    styles.root,
    styles[size],
    styles[color],
    disabled && styles.disabled,
    (checked || indeterminate) && styles.checked,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClasses}>
      <input
        ref={ref}
        className={styles.input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <span className={styles.checkboxContainer}>
        {indeterminate ? <IndeterminateIcon /> : checked ? <CheckIcon /> : null}
      </span>
    </span>
  );
});