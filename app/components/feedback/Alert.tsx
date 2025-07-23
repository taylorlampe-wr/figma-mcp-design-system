'use client';

import { ReactNode, HTMLAttributes } from 'react';
import styles from './Alert.module.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: ReactNode;
  
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the severity prop.
   */
  icon?: ReactNode;
  
  /**
   * Callback fired when the close icon is clicked.
   */
  onClose?: () => void;
  
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default "info"
   */
  severity?: 'error' | 'info' | 'success' | 'warning';
  
  /**
   * The variant to use.
   * @default "standard"
   */
  variant?: 'standard' | 'filled' | 'outlined';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

const defaultIcons = {
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        fill="currentColor"
      />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
        fill="currentColor"
      />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M1 19H19L10 1L1 19ZM11 16H9V14H11V16ZM11 12H9V8H11V12Z"
        fill="currentColor"
      />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M14.25 4.81L13.19 3.75L9 7.94L4.81 3.75L3.75 4.81L7.94 9L3.75 13.19L4.81 14.25L9 10.06L13.19 14.25L14.25 13.19L10.06 9L14.25 4.81Z"
      fill="currentColor"
    />
  </svg>
);

export const Alert = ({
  children,
  action,
  icon,
  onClose,
  severity = 'info',
  variant = 'standard',
  className,
  ...props
}: AlertProps) => {
  const rootClasses = [
    styles.root,
    styles[variant],
    styles[severity],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const displayIcon = icon !== false ? (icon || defaultIcons[severity]) : null;

  return (
    <div className={rootClasses} role="alert" {...props}>
      {displayIcon && <div className={styles.icon}>{displayIcon}</div>}
      
      <div className={styles.message}>{children}</div>
      
      {action && <div className={styles.action}>{action}</div>}
      
      {onClose && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};