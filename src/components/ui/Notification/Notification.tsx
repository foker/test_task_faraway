import { Alert, Snackbar } from '@mui/material';
import { memo } from 'react';
import styles from './Notification.module.scss';

interface NotificationProps {
  open: boolean;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
  autoHideDuration?: number;
}

export const Notification = memo(({
  open,
  message,
  type,
  onClose,
  autoHideDuration = 6000,
}: NotificationProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={styles.snackbar}
    >
      <Alert onClose={onClose} severity={type} variant="standard">
        {message}
      </Alert>
    </Snackbar>
  );
}); 