import { Button, Grid, TextField } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import type { Character } from '../../../../services/swapiApi';
import styles from './CharacterForm.module.scss';

interface CharacterFormProps {
  character?: Character;
  onSubmit: (data: Partial<Character>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const CharacterForm = memo(({ character, onSubmit, onCancel, isLoading }: CharacterFormProps) => {
  const [formData, setFormData] = useState<Partial<Character>>({
    name: '',
    birth_year: '',
    gender: '',
    species: [],
    url: '',
  });

  useEffect(() => {
    if (character) {
      setFormData(character);
    }
  }, [character]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }, [formData, onSubmit]);

  const validateYear = (value: string) => {
    if (!value) return 'Birth year is required';
    const yearPattern = /^\d{1,4}(BBY|ABY)$/;
    if (!yearPattern.test(value)) {
      return 'Invalid year format (e.g., "19BBY" or "0ABY")';
    }
    return true;
  };

  const validateNumber = (value: string) => {
    if (!value) return true;
    const num = Number(value);
    if (isNaN(num) || num <= 0) {
      return 'Must be a positive number';
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Birth Year"
            name="birth_year"
            value={formData.birth_year}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mass"
            name="mass"
            value={formData.mass}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Eye Color"
            name="eye_color"
            value={formData.eye_color}
            onChange={handleChange}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Hair Color"
            name="hair_color"
            value={formData.hair_color}
            onChange={handleChange}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Skin Color"
            name="skin_color"
            value={formData.skin_color}
            onChange={handleChange}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.actions}>
            <Button
              variant="outlined"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Save
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
});
