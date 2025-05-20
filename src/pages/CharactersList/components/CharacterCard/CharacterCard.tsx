import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSkeleton } from '../../../../components/ui';
import type { Character } from '../../../../services/swapiApi';
import styles from './CharacterCard.module.scss';

const STORAGE_KEY = 'star_wars_characters';

interface CharacterCardProps {
  character?: Character;
  isLoading?: boolean;
}

export const CharacterCard = memo(({ character, isLoading }: CharacterCardProps) => {
  const navigate = useNavigate();


  // might as well merge this data on the rtk-query level
  const mergedCharacter = useMemo(() => {
    if (!character) return undefined;

    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (!storedData) return character;

      const characters = JSON.parse(storedData);
      const characterId = character.url.split('/').slice(-2)[0];
      const storedCharacter = characters[characterId];

      return storedCharacter ? { ...character, ...storedCharacter } : character;
    } catch (error) {
      console.error('Error merging character data:', error);
      return character;
    }
  }, [character]);

  const handleClick = () => {
    if (!isLoading && mergedCharacter) {
      navigate(`/character/${mergedCharacter.url.split('/').slice(-2)[0]}`);
    }
  };

  if (isLoading || !mergedCharacter) {
    return (
      <Card className={styles.card}>
        <LoadingSkeleton variant="rectangular" height={140} className={styles.media} />
        <CardContent>
          <LoadingSkeleton variant="text" height={32} className={styles.title} />
          <LoadingSkeleton variant="text" height={24} className={styles.info} />
          <LoadingSkeleton variant="text" height={24} className={styles.info} />
          <LoadingSkeleton variant="text" height={24} className={styles.info} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={styles.card} 
      onClick={handleClick}
      sx={{ 
        cursor: isLoading ? 'default' : 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: isLoading ? 'none' : 'scale(1.02)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/seed/${mergedCharacter.name}/400/200`}
        alt={mergedCharacter.name}
        className={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mergedCharacter.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birth Year: {mergedCharacter.birth_year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {mergedCharacter.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {mergedCharacter.height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mass: {mergedCharacter.mass}
        </Typography>
      </CardContent>
    </Card>
  );
});
