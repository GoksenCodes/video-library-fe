import { useSearchParams } from 'react-router-dom';

export type SortBy = 'created_at' | 'title';
export type Order = 'asc' | 'desc';

export function useVideoSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const search = searchParams.get('search') || '';

  const rawSortBy = searchParams.get('sort_by') || 'created_at';
  const rawOrder = searchParams.get('order') || 'desc';

  const sort_by: SortBy = rawSortBy === 'title' ? 'title' : 'created_at';
  const order: Order = rawOrder === 'asc' ? 'asc' : 'desc';

  const setPage = (page: number) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', page.toString());
    setSearchParams(next);
  };

  const setSearch = (value: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('search', value);
    next.set('page', '1');
    setSearchParams(next);
  };

  const setSorting = (sortBy: string, sortOrder: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('sort_by', sortBy);
    next.set('order', sortOrder);
    setSearchParams(next);
  };

  return {
    page,
    setPage,
    search,
    setSearch,
    sort_by,
    order,
    setSorting
  };
}
