import React from 'react';
import {
  Container,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Alert,
  Skeleton
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from './api/videos-api-client';
import { PaginatedResponse } from './types/paginated-response';

const App: React.FC = () => {
  const { data: videos, isLoading, isError } = useQuery<PaginatedResponse>({
    queryKey: ['videos'],
    queryFn: () => fetchVideos()
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Video Library
      </Typography>

      {isLoading && (
        <ImageList cols={4} gap={16}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </ImageList>
      )}

      {isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Failed to load videos. Please try again later.
        </Alert>
      )}

      {!isLoading && !isError && (
        <ImageList cols={4} gap={16}>
          {videos!.data.map((video) => (
            <ImageListItem key={video.id}>
              <img
                src={video.thumbnail_url}
                alt={video.title}
              />
              <ImageListItemBar title={video.title} />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Container>
  );
};

export default App;
