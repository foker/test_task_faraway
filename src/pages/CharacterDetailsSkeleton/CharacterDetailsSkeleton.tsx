import { Box, Container, Paper, Typography } from '@mui/material';
import { memo } from 'react';
import { LoadingSkeleton } from '../../components/ui';
import styles from './CharacterDetailsSkeleton.module.scss';

const CharacterDetailsSkeleton = memo(() => {
  return (
    <Container>
      <Box className={styles.root}>
        <Paper className={styles.paper}>
          <Typography variant="h4" component="h1" className={styles.title}>
            Character Details
          </Typography>
          
          <Box className={styles.formContainer}>
            {/* Form fields skeleton */}
            <Box className={styles.fieldGroup}>
              <LoadingSkeleton variant="text" width="30%" height={24} />
              <LoadingSkeleton variant="rectangular" height={56} />
            </Box>
            
            <Box className={styles.fieldGroup}>
              <LoadingSkeleton variant="text" width="30%" height={24} />
              <LoadingSkeleton variant="rectangular" height={56} />
            </Box>
            
            <Box className={styles.fieldGroup}>
              <LoadingSkeleton variant="text" width="30%" height={24} />
              <LoadingSkeleton variant="rectangular" height={56} />
            </Box>
            
            <Box className={styles.fieldGroup}>
              <LoadingSkeleton variant="text" width="30%" height={24} />
              <LoadingSkeleton variant="rectangular" height={56} />
            </Box>
            
            {/* Buttons skeleton */}
            <Box className={styles.buttonGroup}>
              <LoadingSkeleton variant="rectangular" width={120} height={48} />
              <LoadingSkeleton variant="rectangular" width={120} height={48} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
});

export default CharacterDetailsSkeleton; 