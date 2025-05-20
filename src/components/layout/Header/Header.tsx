import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Link to="/" className={styles.logoLink}>
          <Typography variant="h4" component="h1" className={styles.logo}>
            Star Wars
          </Typography>
        </Link>
        <Box className={styles.navigation}>
          <Link to="/" className={styles.navLink}>
            Characters
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 