import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { memo } from 'react';
import styles from './ConfirmationDialog.module.scss';

interface ConfirmationDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationDialog = memo(({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      className={styles.dialog}
      PaperProps={{
        className: styles.paper,
      }}
    >
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={styles.message}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={styles.actions}>
        <Button
          onClick={onCancel}
          className={styles.cancelButton}
        >
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          className={styles.confirmButton}
          autoFocus
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export { ConfirmationDialog };
