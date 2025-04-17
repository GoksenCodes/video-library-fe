import { useState } from 'react';

export function useVideoQueryParams() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1); // reset page on search
  };

  return {
    page,
    setPage,
    search,
    setSearch: handleSearchChange
  };
}
