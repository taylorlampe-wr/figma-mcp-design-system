import React from 'react'
import './globals.css'
import SideNav from './components/navigation/SideNav'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>WDS - Web Design System</title>
        <meta name="description" content="Web Design System documentation and component library" />
      </head>
      <body className={styles.body}>
        <SideNav />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
} 