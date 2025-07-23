'use client';

import { ReactNode, HTMLAttributes } from 'react';
import styles from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute?: boolean;
  
  /**
   * The content of the component.
   */
  children?: ReactNode;
  
  /**
   * If true, a vertical divider will have the correct height when used in flex container.
   * @default false
   */
  flexItem?: boolean;
  
  /**
   * If true, the divider will have a lighter color.
   * @default false
   */
  light?: boolean;
  
  /**
   * The divider orientation.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * The text alignment.
   * @default "center"
   */
  textAlign?: 'center' | 'left' | 'right';
  
  /**
   * The variant to use.
   * @default "fullWidth"
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Divider = ({
  absolute = false,
  children,
  flexItem = false,
  light = false,
  orientation = 'horizontal',
  textAlign = 'center',
  variant = 'fullWidth',
  className,
  ...props
}: DividerProps) => {
  const rootClasses = [
    styles.root,
    styles[orientation],
    styles[variant],
    absolute && styles.absolute,
    flexItem && styles.flexItem,
    light && styles.light,
    children && styles.withChildren,
    children && styles[textAlign],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <hr className={rootClasses} {...props}>
      {children && <span className={styles.wrapper}>{children}</span>}
    </hr>
  );
};