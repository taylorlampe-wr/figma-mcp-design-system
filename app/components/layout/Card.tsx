'use client';

import { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card
   */
  children: ReactNode;
  
  /**
   * The elevation depth of the card
   * @default 1
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 8 | 12 | 16 | 24;
  
  /**
   * The variant of the card
   * @default "elevation"
   */
  variant?: 'elevation' | 'outlined';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Card = ({
  children,
  elevation = 1,
  variant = 'elevation',
  className,
  ...props
}: CardProps) => {
  const rootClasses = [
    styles.root,
    variant === 'elevation' ? styles[`elevation${elevation}`] : styles.outlined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} {...props}>
      {children}
    </div>
  );
};

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card content area
   */
  children: ReactNode;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  const rootClasses = [styles.content, className].filter(Boolean).join(' ');

  return (
    <div className={rootClasses} {...props}>
      {children}
    </div>
  );
};

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * The title of the card
   */
  title?: ReactNode;
  
  /**
   * The subtitle of the card
   */
  subheader?: ReactNode;
  
  /**
   * Avatar element to display in the header
   */
  avatar?: ReactNode;
  
  /**
   * Action element to display in the header
   */
  action?: ReactNode;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const CardHeader = ({
  title,
  subheader,
  avatar,
  action,
  className,
  ...props
}: CardHeaderProps) => {
  const rootClasses = [styles.header, className].filter(Boolean).join(' ');

  return (
    <div className={rootClasses} {...props}>
      {avatar && <div className={styles.avatar}>{avatar}</div>}
      
      <div className={styles.headerContent}>
        {title && <div className={styles.title}>{title}</div>}
        {subheader && <div className={styles.subheader}>{subheader}</div>}
      </div>
      
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card actions area
   */
  children: ReactNode;
  
  /**
   * If true, the actions are aligned to the right
   * @default false
   */
  disableSpacing?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const CardActions = ({
  children,
  disableSpacing = false,
  className,
  ...props
}: CardActionsProps) => {
  const rootClasses = [
    styles.actions,
    !disableSpacing && styles.spacing,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} {...props}>
      {children}
    </div>
  );
};