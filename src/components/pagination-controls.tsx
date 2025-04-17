import React from 'react';
import { Box, Pagination } from '@mui/material';

interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const PaginationControls: React.FC<Props> = ({ currentPage, totalPages, onChange }) => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => onChange(value)}
        color="primary"
      />
    </Box>
  );
};

export default PaginationControls;
