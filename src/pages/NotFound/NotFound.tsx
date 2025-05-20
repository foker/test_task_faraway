import { Box, Button, Container, Typography } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = memo(() => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box className={styles.root}>
        <Typography variant="h1" component="h1" className={styles.title}>
          404
        </Typography>
        <Typography variant="h4" component="h2" className={styles.subtitle}>
          Page Not Found
        </Typography>
        <Typography variant="body1" className={styles.message}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          className={styles.button}
        >
          Return to Home
        </Button>
      </Box>
    </Container>
  );
});

export default NotFound; 