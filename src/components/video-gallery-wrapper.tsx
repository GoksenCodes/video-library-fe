import React from 'react';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from '../api/videos-api-client';
import { useVideoGalleryState } from '../hooks/use-video-gallery-state';
import { renderVideoState } from '../utils/render-video-state';
import SearchBar from './search-bar';
import PaginationControls from './pagination-controls';
import { PaginatedResponse } from '../types/paginated-response';
import { useVideoSearchParams } from '../hooks/use-video-search-params';
import SortMenu from './sort-menu';

const VideoGalleryWrapper: React.FC = () => {
  const { page, setPage, search, setSearch, sort_by, order, setSorting } = useVideoSearchParams();

  const { data, isLoading, isError } = useQuery<PaginatedResponse>({
    queryKey: ['videos', { page, search, sort_by, order }],
    queryFn: () => fetchVideos({ page, search, sort_by, order }),
    placeholderData: (prev) => prev
  });

  const { viewState } = useVideoGalleryState({ data, isLoading, isError });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', // allows responsive stacking
          gap: 2,
          mb: 2
        }}
      >
        <SearchBar value={search} onChange={setSearch} />
        <SortMenu sortBy={sort_by} order={order} onChange={setSorting} />
      </Box>

      {renderVideoState(viewState, data)}
      {data && (
        <PaginationControls currentPage={page} totalPages={data.meta.pages} onChange={setPage} />
      )}
    </>
  );
};

export default VideoGalleryWrapper;
