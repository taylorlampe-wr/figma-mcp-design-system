'use client';

import { ReactNode, HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content rendered within the badge.
   */
  badgeContent?: ReactNode;
  
  /**
   * The badge will be added relative to this node.
   */
  children: ReactNode;
  
  /**
   * The color of the component.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  
  /**
   * If true, the badge is invisible.
   * @default false
   */
  invisible?: boolean;
  
  /**
   * Max count to show.
   * @default 99
   */
  max?: number;
  
  /**
   * Controls whether the badge is hidden when badgeContent is zero.
   * @default false
   */
  showZero?: boolean;
  
  /**
   * The variant to use.
   * @default "standard"
   */
  variant?: 'standard' | 'dot';
  
  /**
   * The anchor origin.
   * @default { vertical: 'top', horizontal: 'right' }
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Badge = ({
  badgeContent,
  children,
  color = 'default',
  invisible = false,
  max = 99,
  showZero = false,
  variant = 'standard',
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  className,
  ...props
}: BadgeProps) => {
  let displayValue: ReactNode = badgeContent;

  // Handle numeric badge content
  if (typeof badgeContent === 'number') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  // Determine if badge should be visible
  const showBadge = !invisible && (
    (variant === 'dot') ||
    (badgeContent !== undefined && badgeContent !== null && (showZero || badgeContent !== 0))
  );

  const badgeClasses = [
    styles.badge,
    styles[variant],
    styles[color],
    styles[`${anchorOrigin.vertical}${anchorOrigin.horizontal.charAt(0).toUpperCase()}${anchorOrigin.horizontal.slice(1)}`],
    !showBadge && styles.invisible,
  ]
    .filter(Boolean)
    .join(' ');

  const rootClasses = [styles.root, className].filter(Boolean).join(' ');

  return (
    <span className={rootClasses} {...props}>
      {children}
      <span className={badgeClasses}>
        {variant === 'standard' && displayValue}
      </span>
    </span>
  );
};