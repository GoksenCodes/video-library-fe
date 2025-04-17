import React from 'react';
import { Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from './api/videos-api-client';
import { PaginatedResponse } from './types/paginated-response';
import { useImagePreloader } from './hooks/use-image-preloader';
import { useVideoViewState } from './hooks/use-video-view-state';
import { renderVideoState } from './utils/render-video-state';

const App: React.FC = () => {
  const { data, isLoading, isError } = useQuery<PaginatedResponse>({
    queryKey: ['videos'],
    queryFn: () => fetchVideos()
  });

  const imageUrls = data?.data.map((v) => v.thumbnail_url) || [];
  const imagesLoaded = useImagePreloader(imageUrls);
  const viewState = useVideoViewState({ isLoading, isError, imageReady: imagesLoaded });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>
      {renderVideoState(viewState, data)}
    </Container>
  );
};

export default App;
