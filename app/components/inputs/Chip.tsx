'use client';

import { ReactNode } from 'react';
import styles from './Chip.module.css';

export interface ChipProps {
  /**
   * The content of the chip
   */
  children: ReactNode;
  
  /**
   * The size of the chip
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The variant of the chip
   * @default "filled"
   */
  variant?: 'filled' | 'outlined';
  
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the chip is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Whether the chip shows a checkmark
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the chip is deletable (shows an X icon)
   * @default false
   */
  deletable?: boolean;
  
  /**
   * Callback fired when the delete icon is clicked
   */
  onDelete?: () => void;
  
  /**
   * Callback fired when the chip is clicked
   */
  onClick?: () => void;

  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Chip = ({
  children,
  size = 'medium',
  variant = 'filled',
  disabled = false,
  selected = false,
  checked = false,
  deletable = false,
  onDelete,
  onClick,
  className,
}: ChipProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onDelete) {
      onDelete();
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const rootClasses = [
    styles.root,
    styles[size],
    styles[variant],
    disabled && styles.disabled,
    selected && styles.selected,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} onClick={handleClick} role="button" tabIndex={disabled ? -1 : 0}>
      <div className={styles.content}>
        {checked && (
          <svg
            className={styles.checkIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.55 18.2L3.65 12.3L5.075 10.875L9.55 15.35L18.925 5.975L20.35 7.4L9.55 18.2Z"
              fill="currentColor"
            />
          </svg>
        )}
        <span className={styles.label}>{children}</span>
        {deletable && (
          <svg
            className={styles.deleteIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleDelete}
          >
            <path
              d="M12 20.4C10.6 20.4 9.26667 20.1 8 19.5C6.73333 18.9 5.63333 18.0833 4.7 17.05C3.76667 16.0167 3.03333 14.8333 2.5 13.5C1.96667 12.1667 1.7 10.7667 1.7 9.3C1.7 7.83333 1.96667 6.43333 2.5 5.1C3.03333 3.76667 3.76667 2.58333 4.7 1.55C5.63333 0.516667 6.73333 -0.3 8 -0.9C9.26667 -1.5 10.6 -1.8 12 -1.8C13.4 -1.8 14.7333 -1.5 16 -0.9C17.2667 -0.3 18.3667 0.516667 19.3 1.55C20.2333 2.58333 20.9667 3.76667 21.5 5.1C22.0333 6.43333 22.3 7.83333 22.3 9.3C22.3 10.7667 22.0333 12.1667 21.5 13.5C20.9667 14.8333 20.2333 16.0167 19.3 17.05C18.3667 18.0833 17.2667 18.9 16 19.5C14.7333 20.1 13.4 20.4 12 20.4ZM12 18.3C14.5333 18.3 16.6667 17.3833 18.4 15.55C20.1333 13.7167 21 11.5333 21 9C21 6.46667 20.1333 4.28333 18.4 2.45C16.6667 0.616667 14.5333 -0.3 12 -0.3C9.46667 -0.3 7.33333 0.616667 5.6 2.45C3.86667 4.28333 3 6.46667 3 9C3 11.5333 3.86667 13.7167 5.6 15.55C7.33333 17.3833 9.46667 18.3 12 18.3ZM8.7 13.7L7.3 12.3L10.6 9L7.3 5.7L8.7 4.3L12 7.6L15.3 4.3L16.7 5.7L13.4 9L16.7 12.3L15.3 13.7L12 10.4L8.7 13.7Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    </div>
  );
}; 