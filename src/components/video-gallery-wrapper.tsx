import React from 'react';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from '../api/videos-api-client';
import { useVideoQueryParams } from '../hooks/use-video-query-params';
import { useVideoGalleryState } from '../hooks/use-video-gallery-state';
import { renderVideoState } from '../utils/render-video-state';
import SearchBar from './search-bar';
import PaginationControls from './pagination-controls';
import { PaginatedResponse } from '../types/paginated-response';

const VideoGalleryWrapper: React.FC = () => {
  const { page, setPage, search, setSearch } = useVideoQueryParams();

  const { data, isLoading, isError } = useQuery<PaginatedResponse>({
    queryKey: ['videos', { page, search }],
    queryFn: () => fetchVideos({ page, search }),
    placeholderData: (previousData) => previousData
  });

  const { viewState } = useVideoGalleryState({ data, isLoading, isError });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>

      <SearchBar value={search} onChange={setSearch} />
      {renderVideoState(viewState, data)}
      {data && (
        <PaginationControls
          currentPage={page}
          totalPages={data.meta.pages}
          onChange={setPage}
        />
      )}
    </>
  );
};

export default VideoGalleryWrapper;
