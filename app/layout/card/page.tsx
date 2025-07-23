'use client';

import { Card, CardContent, CardHeader, CardActions } from '../../components/layout/Card';
import { Avatar } from '../../components/display/Avatar';
import { Typography } from '../../components/display/Typography';
import { Button } from '../../components/inputs/Button';
import { IconButton } from '../../components/inputs/IconButton';
import styles from '../../inputs/button/page.module.css';

const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/>
  </svg>
);

export default function CardPage() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" className={styles.title}>
        Card
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        Cards contain content and actions about a single subject.
      </Typography>

      <Card className={styles.demoCard}>
        <CardHeader title="Basic Card" />
        <CardContent>
          <Card elevation={1} style={{ maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Word of the Day
              </Typography>
              <Typography variant="body2" color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body1">
                well meaning and kindly
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text">Learn More</Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Card with Media" />
        <CardContent>
          <Card elevation={2} style={{ maxWidth: 400 }}>
            <CardHeader
              avatar={<Avatar>R</Avatar>}
              action={<IconButton><MoreIcon /></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text">Share</Button>
              <Button size="small" variant="text">Learn More</Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>

      <Card className={styles.demoCard}>
        <CardHeader title="Elevation Levels" />
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-16)' }}>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h6">Elevation 0</Typography>
              </CardContent>
            </Card>
            <Card elevation={1}>
              <CardContent>
                <Typography variant="h6">Elevation 1</Typography>
              </CardContent>
            </Card>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">Elevation 3</Typography>
              </CardContent>
            </Card>
            <Card elevation={8}>
              <CardContent>
                <Typography variant="h6">Elevation 8</Typography>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}