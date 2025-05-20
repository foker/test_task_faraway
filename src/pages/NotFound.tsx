import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.container}>
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
        color="primary"
        onClick={() => navigate('/')}
        className={styles.button}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound; 