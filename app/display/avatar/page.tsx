'use client';

import { Avatar } from '../../components/display/Avatar';
import { Typography } from '../../components/display/Typography';
import { Card, CardContent, CardHeader } from '../../components/layout/Card';
import styles from '../../inputs/button/page.module.css';

export default function AvatarPage() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" className={styles.title}>
        Avatar
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        Avatars are found throughout material design with uses in everything from tables to dialog menus.
      </Typography>

      <Card className={styles.demoCard}>
        <CardHeader title="Image Avatars" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="John Doe" />
            <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b25c5e04?w=32&h=32&fit=crop&crop=face" alt="Jane Smith" />
            <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Mike Johnson" />
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Letter Avatars" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Avatar>JD</Avatar>
            <Avatar>JS</Avatar>
            <Avatar>MJ</Avatar>
            <Avatar>AB</Avatar>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Sizes" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Avatar size="small">S</Avatar>
            <Avatar size="medium">M</Avatar>
            <Avatar size="large">L</Avatar>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Variants" />
        <CardContent>
          <div className={styles.buttonGroup}>
            <Avatar variant="circular">C</Avatar>
            <Avatar variant="rounded">R</Avatar>
            <Avatar variant="square">S</Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}