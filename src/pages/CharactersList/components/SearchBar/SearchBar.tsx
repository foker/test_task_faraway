import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { memo, useEffect, useMemo, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface SearchFormData {
  search: string;
}

const SearchBar = memo(({ onSearch }: SearchBarProps) => {
  const { control, watch } = useForm<SearchFormData>({
    defaultValues: {
      search: '',
    },
  });

  const searchValue = watch('search');
  const [debouncedValue] = useDebounce(searchValue, 500);

  const initiatedSearch = useRef(!!searchValue);

  useEffect(() => {
    console.log('initiatedSearch', initiatedSearch.current, debouncedValue);
    if (!initiatedSearch.current && !debouncedValue) {
      return
    }
    initiatedSearch.current = true;
    onSearch(debouncedValue);
  }, [debouncedValue]);

  const inputProps = useMemo(() => ({
    startAdornment: (
      <InputAdornment position="start" className={styles.icon}>
        <SearchIcon />
      </InputAdornment>
    ),
    className: styles.inputText,
  }), []);

  return (
    <div className={styles.root}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            placeholder="Search characters..."
            InputProps={inputProps}
            className={styles.input}
          />
        )}
      />
    </div>
  );
});

export { SearchBar };
