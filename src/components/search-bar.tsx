import React from 'react';
import { TextField, Box } from '@mui/material';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: '300px' }}
      />
    </Box>
  );
};

export default SearchBar;
