'use client';

import { ReactNode, ElementType, HTMLAttributes } from 'react';
import styles from './Typography.module.css';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  
  /**
   * The color of the component.
   * @default "textPrimary"
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * @default false
   */
  noWrap?: boolean;
  
  /**
   * Applies the theme typography styles.
   * @default "body1"
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

const variantMapping: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
  overline: 'span',
};

export const Typography = ({
  children,
  component,
  color = 'textPrimary',
  noWrap = false,
  variant = 'body1',
  className,
  ...props
}: TypographyProps) => {
  const Component = component || variantMapping[variant] || 'span';
  
  const rootClasses = [
    styles.root,
    styles[variant],
    styles[color],
    noWrap && styles.noWrap,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={rootClasses} {...props}>
      {children}
    </Component>
  );
};