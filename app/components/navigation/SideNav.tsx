import React from 'react'
import Link from 'next/link'
import styles from './SideNav.module.css'

interface NavItem {
  title: string
  href: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: 'Foundations',
    items: [
      { title: 'Theme', href: '/theme' },
    ]
  },
  {
    title: 'Inputs',
    items: [
      { title: 'Button', href: '/inputs/button' },
      { title: 'Checkbox', href: '/inputs/checkbox' },
      { title: 'Interactive Chip', href: '/inputs/chip' },
      { title: 'Icon Button', href: '/inputs/icon-button' },
      { title: 'Switch', href: '/inputs/switch' },
      { title: 'Text Field', href: '/inputs/text-field' },
    ]
  },
  {
    title: 'Display',
    items: [
      { title: 'Avatar', href: '/display/avatar' },
      { title: 'Badge', href: '/display/badge' },
      { title: 'Typography', href: '/display/typography' },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alert', href: '/feedback/alert' },
    ]
  },
  {
    title: 'Layout',
    items: [
      { title: 'Card', href: '/layout/card' },
      { title: 'Divider', href: '/layout/divider' },
    ]
  }
]

export default function SideNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <h1 className={styles.title}>Workrise Design System</h1>
      </div>
      
      {navigation.map((section) => (
        <div key={section.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title.toUpperCase()}</h2>
          <ul className={styles.sectionList}>
            {section.items.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
} 