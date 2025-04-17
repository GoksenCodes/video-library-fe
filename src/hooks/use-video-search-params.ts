import { useSearchParams } from 'react-router-dom';

export function useVideoSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const search = searchParams.get('search') || '';

  const setPage = (page: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('page', page.toString());
      return next;
    });
  };

  const setSearch = (value: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('search', value);
      next.set('page', '1'); // reset to page 1 on new search
      return next;
    });
  };

  return {
    page,
    setPage,
    search,
    setSearch
  };
}
