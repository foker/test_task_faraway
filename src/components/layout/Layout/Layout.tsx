import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <Box className={styles.layout}>
      <Header />
      <Box component="main" className={styles.main}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}; 