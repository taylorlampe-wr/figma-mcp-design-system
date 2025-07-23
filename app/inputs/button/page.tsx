'use client';

import { Button } from '../../components/inputs/Button';
import { Typography } from '../../components/display/Typography';
import { Card, CardContent, CardHeader } from '../../components/layout/Card';
import { Divider } from '../../components/layout/Divider';
import styles from './page.module.css';

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8 5v10l8-5-8-5z" fill="currentColor"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
  </svg>
);

export default function ButtonPage() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" className={styles.title}>
        Button
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>

      <Card className={styles.demoCard}>
        <CardHeader title="Contained Buttons" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Outlined Buttons" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
            <Button variant="outlined" color="warning">Warning</Button>
            <Button variant="outlined" disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Text Buttons" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Button variant="text" color="primary">Primary</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant="text" color="success">Success</Button>
            <Button variant="text" color="error">Error</Button>
            <Button variant="text" color="warning">Warning</Button>
            <Button variant="text" disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Sizes" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="With Icons" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Button startIcon={<PlayIcon />}>Play</Button>
            <Button endIcon={<DeleteIcon />} color="error">Delete</Button>
            <Button variant="outlined" startIcon={<PlayIcon />}>Play</Button>
            <Button variant="text" endIcon={<DeleteIcon />}>Delete</Button>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Full Width" />
        <CardContent>
          <Button fullWidth color="primary">
            Full Width Button
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}