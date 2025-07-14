'use client';

import { Chip } from '@/app/components/inputs/Chip';
import styles from './page.module.css';

export default function ChipPage() {
  return (
    <div className={styles.container}>
      <h1>Interactive Chip</h1>
      
      <section className={styles.section}>
        <h2>Default</h2>
        <div className={styles.grid}>
          {/* Small Chips */}
          <div className={styles.row}>
            <Chip size="small" variant="filled">Small</Chip>
            <Chip size="small" variant="filled">Small</Chip>
            <Chip size="small" variant="filled" selected>Small</Chip>
            <Chip size="small" variant="filled" selected deletable>Small</Chip>
            <Chip size="small" variant="filled" deletable>Small</Chip>
            <Chip size="small" variant="filled" checked deletable>Small</Chip>
            <Chip size="small" variant="filled" disabled>Small</Chip>
          </div>

          {/* Medium Chips */}
          <div className={styles.row}>
            <Chip size="medium" variant="filled">Medium</Chip>
            <Chip size="medium" variant="filled">Medium</Chip>
            <Chip size="medium" variant="filled" selected>Medium</Chip>
            <Chip size="medium" variant="filled" selected deletable>Medium</Chip>
            <Chip size="medium" variant="filled" deletable>Medium</Chip>
            <Chip size="medium" variant="filled" checked deletable>Medium</Chip>
            <Chip size="medium" variant="filled" disabled>Medium</Chip>
          </div>

          {/* Large Chips */}
          <div className={styles.row}>
            <Chip size="large" variant="filled">Large</Chip>
            <Chip size="large" variant="filled">Large</Chip>
            <Chip size="large" variant="filled" selected>Large</Chip>
            <Chip size="large" variant="filled" selected deletable>Large</Chip>
            <Chip size="large" variant="filled" deletable>Large</Chip>
            <Chip size="large" variant="filled" checked deletable>Large</Chip>
            <Chip size="large" variant="filled" disabled>Large</Chip>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Outlined</h2>
        <div className={styles.grid}>
          {/* Small Chips */}
          <div className={styles.row}>
            <Chip size="small" variant="outlined">Small</Chip>
            <Chip size="small" variant="outlined">Small</Chip>
            <Chip size="small" variant="outlined" selected>Small</Chip>
            <Chip size="small" variant="outlined" selected deletable>Small</Chip>
            <Chip size="small" variant="outlined" deletable>Small</Chip>
            <Chip size="small" variant="outlined" checked deletable>Small</Chip>
            <Chip size="small" variant="outlined" disabled>Small</Chip>
          </div>

          {/* Medium Chips */}
          <div className={styles.row}>
            <Chip size="medium" variant="outlined">Medium</Chip>
            <Chip size="medium" variant="outlined">Medium</Chip>
            <Chip size="medium" variant="outlined" selected>Medium</Chip>
            <Chip size="medium" variant="outlined" selected deletable>Medium</Chip>
            <Chip size="medium" variant="outlined" deletable>Medium</Chip>
            <Chip size="medium" variant="outlined" checked deletable>Medium</Chip>
            <Chip size="medium" variant="outlined" disabled>Medium</Chip>
          </div>

          {/* Large Chips */}
          <div className={styles.row}>
            <Chip size="large" variant="outlined">Large</Chip>
            <Chip size="large" variant="outlined">Large</Chip>
            <Chip size="large" variant="outlined" selected>Large</Chip>
            <Chip size="large" variant="outlined" selected deletable>Large</Chip>
            <Chip size="large" variant="outlined" deletable>Large</Chip>
            <Chip size="large" variant="outlined" checked deletable>Large</Chip>
            <Chip size="large" variant="outlined" disabled>Large</Chip>
          </div>
        </div>
      </section>
    </div>
  );
} 