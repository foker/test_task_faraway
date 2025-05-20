import { Box, Skeleton } from '@mui/material';
import styles from './LoadingSkeleton.module.scss';

interface LoadingSkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const LoadingSkeleton = ({
  variant = 'text',
  width,
  height,
  className,
}: LoadingSkeletonProps) => {
  return (
    <Box className={`${styles.skeletonContainer} ${className || ''}`}>
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        className={styles.skeleton}
      />
    </Box>
  );
}; 