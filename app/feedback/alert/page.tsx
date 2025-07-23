'use client';

import { Alert } from '../../components/feedback/Alert';
import { Typography } from '../../components/display/Typography';
import { Card, CardContent, CardHeader } from '../../components/layout/Card';
import { Button } from '../../components/inputs/Button';
import styles from '../../inputs/button/page.module.css';

export default function AlertPage() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" className={styles.title}>
        Alert
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
      </Typography>

      <Card className={styles.demoCard}>
        <CardHeader title="Basic Alerts" />
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Filled Alerts" />
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <Alert variant="filled" severity="error">This is an error alert — check it out!</Alert>
            <Alert variant="filled" severity="warning">This is a warning alert — check it out!</Alert>
            <Alert variant="filled" severity="info">This is an info alert — check it out!</Alert>
            <Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Outlined Alerts" />
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <Alert variant="outlined" severity="error">This is an error alert — check it out!</Alert>
            <Alert variant="outlined" severity="warning">This is a warning alert — check it out!</Alert>
            <Alert variant="outlined" severity="info">This is an info alert — check it out!</Alert>
            <Alert variant="outlined" severity="success">This is a success alert — check it out!</Alert>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Alert with Actions" />
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <Alert 
              severity="info" 
              action={<Button size="small" variant="text">Undo</Button>}
            >
              This is an info alert with an action!
            </Alert>
            <Alert 
              severity="success" 
              onClose={() => alert('Close clicked!')}
            >
              This is a success alert with close button!
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}