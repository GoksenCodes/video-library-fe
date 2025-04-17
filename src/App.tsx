import React from 'react';
import { Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from './api/videos-api-client';
import { PaginatedResponse } from './types/paginated-response';
import { renderVideoState } from './utils/render-video-state';
import SearchBar from './components/search-bar';
import PaginationControls from './components/pagination-controls';
import { useVideoQueryParams } from './hooks/use-video-query-params';
import { useVideoGalleryState } from './hooks/use-video-gallery-state';

const App: React.FC = () => {

  const { page, setPage, search, setSearch } = useVideoQueryParams();

  const { data, isLoading, isError } = useQuery<PaginatedResponse>({
    queryKey: ['videos', { page, search }],
    queryFn: () => fetchVideos({ page, search }),
  });
  
  const { viewState } = useVideoGalleryState({ data, isLoading, isError });
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>

      <SearchBar value={search} onChange={(val) => {setSearch(val); setPage(1)}} />
      {renderVideoState(viewState, data)}

      {data && (
        <PaginationControls
          currentPage={page}
          totalPages={data.meta.pages}
          onChange={(val) => setPage(val)}
        />
      )}

    </Container>
  );
};

export default App;
