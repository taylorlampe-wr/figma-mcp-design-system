'use client';

import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './TextField.module.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label content
   */
  label?: string;
  
  /**
   * The variant of the text field
   * @default "outlined"
   */
  variant?: 'outlined' | 'filled' | 'standard';
  
  /**
   * The size of the text field
   * @default "medium"
   */
  size?: 'small' | 'medium';
  
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  
  /**
   * If true, the input will indicate an error
   * @default false
   */
  error?: boolean;
  
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the input takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display at the start of the input
   */
  startAdornment?: ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  endAdornment?: ReactNode;
  
  /**
   * The type of input
   * @default "text"
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  label,
  variant = 'outlined',
  size = 'medium',
  helperText,
  error = false,
  disabled = false,
  required = false,
  fullWidth = false,
  startAdornment,
  endAdornment,
  type = 'text',
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
  
  const rootClasses = [
    styles.root,
    styles[variant],
    styles[size],
    error && styles.error,
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    styles.input,
    startAdornment && styles.hasStartAdornment,
    endAdornment && styles.hasEndAdornment,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.asterisk}>*</span>}
        </label>
      )}
      
      <div className={styles.inputContainer}>
        {startAdornment && (
          <div className={styles.startAdornment}>{startAdornment}</div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          disabled={disabled}
          required={required}
          {...props}
        />
        
        {endAdornment && (
          <div className={styles.endAdornment}>{endAdornment}</div>
        )}
      </div>
      
      {helperText && (
        <div className={styles.helperText}>
          {helperText}
        </div>
      )}
    </div>
  );
});