import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './ErrorBoundary.module.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box className={styles.errorContainer}>
          <Typography variant="h4" component="h1" className={styles.title}>
            Something went wrong
          </Typography>
          <Typography variant="body1" className={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </Typography>
          <Button
            variant="contained"
            onClick={() => window.location.reload()}
            className={styles.button}
          >
            Reload Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
} 