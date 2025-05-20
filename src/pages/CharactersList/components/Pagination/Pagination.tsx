import { Pagination as MuiPagination } from '@mui/material';
import { memo, useCallback } from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

const Pagination = memo(({ count, page, onChange }: PaginationProps) => {
  const handleChange = useCallback((_: unknown, value: number) => {
    onChange(value);
  }, [onChange]);

  return (
    <div className={styles.root}>
      <MuiPagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        sx={{
          '& .Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
          }
        }}
      />
    </div>
  );
});

export { Pagination };
