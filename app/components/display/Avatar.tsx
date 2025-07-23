'use client';

import { ReactNode, HTMLAttributes, useState } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Used to render icon or text elements inside the Avatar if src is not set.
   * This can be an element, or just a string.
   */
  children?: ReactNode;
  
  /**
   * The src attribute for the img element.
   */
  src?: string;
  
  /**
   * The alt attribute for the img element.
   */
  alt?: string;
  
  /**
   * The size of the avatar
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The variant of the avatar
   * @default "circular"
   */
  variant?: 'circular' | 'rounded' | 'square';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Avatar = ({
  children,
  src,
  alt = '',
  size = 'medium',
  variant = 'circular',
  className,
  ...props
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  const rootClasses = [
    styles.root,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hasImg = src && !imgError;
  const hasImgNotFailing = hasImg && imgLoaded;

  return (
    <div className={rootClasses} {...props}>
      {hasImg && (
        <img
          alt={alt}
          src={src}
          className={styles.img}
          onError={handleImgError}
          onLoad={handleImgLoad}
        />
      )}
      {!hasImgNotFailing && children && (
        <div className={styles.fallback}>
          {typeof children === 'string' ? getInitials(children) : children}
        </div>
      )}
    </div>
  );
};

// Helper function to get initials from a name
function getInitials(name: string): string {
  const names = name.trim().split(' ');
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
}