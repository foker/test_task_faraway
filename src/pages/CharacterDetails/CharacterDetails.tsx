import { Alert, Box, Container, Paper, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ConfirmationDialog, Notification } from '../../components/ui';
import { LoadingSkeleton } from '../../components/ui';
import type { Character } from '../../services/swapiApi';
import { useGetCharacterByIdQuery } from '../../services/swapiApi';
import styles from './CharacterDetails.module.scss';
import { CharacterForm } from './components/CharacterForm';

const STORAGE_KEY = 'star_wars_characters';

const CharacterDetails = memo(() => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: character, isLoading, error } = useGetCharacterByIdQuery(id || '');
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    open: false,
    message: '',
    type: 'success',
  });

  const handleSubmit = useCallback((formData: Character) => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const characters = storedData ? JSON.parse(storedData) : {};
      characters[id || ''] = formData;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
      setNotification({
        open: true,
        message: 'Character data saved successfully!',
        type: 'success',
      });
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      setNotification({
        open: true,
        message: 'Error saving character data. Please try again.',
        type: 'error',
      });
    }
  }, [id, navigate]);

  const handleCancel = useCallback(() => {
    setShowConfirmation(true);
  }, []);

  const handleConfirmCancel = useCallback(() => {
    setShowConfirmation(false);
    navigate('/');
  }, [navigate]);

  const handleCloseNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, open: false }));
  }, []);

  if (error) {
    return (
      <Container>
        <Box className={styles.root}>
          <Alert severity="error">
            Error loading character details. Please try again later.
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box className={styles.root}>
        <Paper className={styles.paper}>
          <Typography variant="h4" component="h1" className={styles.title}>
            Character Details
          </Typography>
          
          {isLoading ? (
            <LoadingSkeleton variant="rectangular" height={400} />
          ) : (
            <CharacterForm
              character={character}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              isLoading={isLoading}
            />
          )}
        </Paper>
      </Box>

      <ConfirmationDialog
        open={showConfirmation}
        title="Unsaved Changes"
        message="You have unsaved changes. Are you sure you want to leave?"
        onConfirm={handleConfirmCancel}
        onCancel={() => setShowConfirmation(false)}
        confirmText="Leave"
        cancelText="Stay"
      />

      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleCloseNotification}
      />
    </Container>
  );
});

export default CharacterDetails; 