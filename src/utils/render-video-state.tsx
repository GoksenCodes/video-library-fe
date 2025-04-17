import { Alert, Skeleton } from '@mui/material';
import VideoGallery from '../components/video-gallery';
import { PaginatedResponse } from '../types/paginated-response';

type ViewState = 'loading' | 'error' | 'ready';

export function renderVideoState(viewState: ViewState, data?: PaginatedResponse) {
  switch (viewState) {
    case 'loading':
      return (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </>
      );

    case 'error':
      return (
        <Alert severity="error" sx={{ mt: 2 }}>
          Failed to load videos. Please try again later.
        </Alert>
      );

    case 'ready':
      return data ? <VideoGallery videos={data.data} /> : null;

    default:
      return null;
  }
}
