import { Box, Container, Grid } from '@mui/material';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCharactersQuery } from '../../services/swapiApi';
import styles from './CharactersList.module.scss';
import { CharacterCard, Pagination, SearchBar } from './components';

interface CharactersListProps {
  onLoad?: () => void;
}

const CharactersList = memo(({ onLoad }: CharactersListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';

  const { data, isLoading, error } = useGetCharactersQuery({ page, search });

  useEffect(() => {
    if (!isLoading && data) {
      onLoad?.();
    }
  }, [isLoading, data, onLoad]);

  const handlePageChange = useCallback((newPage: number) => {
    setSearchParams({ ...(search && { search }), page: newPage.toString() });
  }, [search, setSearchParams]);

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchParams({ page: '1', ...(searchTerm && { search: searchTerm }) });
  }, [setSearchParams]);

  const loadingCards = useMemo(() => 
    Array.from(new Array(6)).map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <CharacterCard isLoading />
      </Grid>
    )),
    []
  );

  const characterCards = useMemo(() => 
    data?.results.map((character) => (
      <Grid item xs={12} sm={6} md={4} key={character.url}>
        <CharacterCard character={character} />
      </Grid>
    )),
    [data?.results]
  );

  if (error) {
    return (
      <Container>
        <Box className={styles.errorContainer}>
          Error loading characters. Please try again later.
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box className={styles.root}>
        <SearchBar onSearch={handleSearch} />
        
        <Grid container spacing={3} className={styles.grid}>
          {isLoading ? loadingCards : characterCards}
        </Grid>

        {data && (
          <Pagination
            count={Math.ceil(data.count / 10)}
            page={page}
            onChange={handlePageChange}
          />
        )}
      </Box>
    </Container>
  );
});

export default CharactersList; 