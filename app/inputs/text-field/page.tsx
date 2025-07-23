'use client';

import { TextField } from '../../components/inputs/TextField';
import { Typography } from '../../components/display/Typography';
import { Card, CardContent, CardHeader } from '../../components/layout/Card';
import styles from '../button/page.module.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14 6a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M17 17l-3-3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function TextFieldPage() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" className={styles.title}>
        TextField
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        Text fields let users enter and edit text.
      </Typography>

      <Card className={styles.demoCard}>
        <CardHeader title="Variants" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <TextField label="Outlined" variant="outlined" placeholder="Enter text..." />
            <TextField label="Filled" variant="filled" placeholder="Enter text..." />
            <TextField label="Standard" variant="standard" placeholder="Enter text..." />
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="States" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <TextField label="Default" placeholder="Default state" />
            <TextField label="Required" required placeholder="Required field" />
            <TextField label="Disabled" disabled placeholder="Disabled field" />
            <TextField label="Error" error helperText="This field has an error" />
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="With Adornments" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <TextField 
              label="Search" 
              startAdornment={<SearchIcon />}
              placeholder="Search..." 
            />
            <TextField 
              label="Price" 
              endAdornment="$"
              placeholder="0.00" 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}