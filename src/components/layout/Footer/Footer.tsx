import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Star Wars Characters App. This is a test project, no rights reserved, not for commecial use.
      </Typography>
    </Box>
  );
}; 