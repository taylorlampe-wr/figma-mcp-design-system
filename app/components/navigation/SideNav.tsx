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