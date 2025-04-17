import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';


interface Props {
  sortBy: string;
  order: string;
  onChange: (sortBy: string, order: string) => void;
}

const SortMenu: React.FC<Props> = ({ sortBy, order, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;

    if (value === 'created_at_asc') onChange('created_at', 'asc');
    else if (value === 'created_at_desc') onChange('created_at', 'desc');
    else if (value === 'title_asc') onChange('title', 'asc');
    else if (value === 'title_desc') onChange('title', 'desc');
  };

  const currentValue = `${sortBy}_${order}`;

  return (
    <Box >
      <FormControl size="small">
        <InputLabel id="sort-select-label">Sort</InputLabel>
        <Select
          labelId="sort-select-label"
          value={currentValue}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value="created_at_desc">Newest</MenuItem>
          <MenuItem value="created_at_asc">Oldest</MenuItem>
          <MenuItem value="title_asc">A-Z</MenuItem>
          <MenuItem value="title_desc">Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortMenu;
