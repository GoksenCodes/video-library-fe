import { useImagePreloader } from './use-image-preloader';
import { useVideoViewState } from './use-video-view-state';
import { PaginatedResponse } from '../types/paginated-response';

interface UseVideoGalleryStateParams {
  data: PaginatedResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function useVideoGalleryState({
  data,
  isLoading,
  isError
}: UseVideoGalleryStateParams) {
  const imageUrls = data?.data.map((v) => v.thumbnail_url) || [];
  const imagesLoaded = useImagePreloader(imageUrls);
  const viewState = useVideoViewState({ isLoading, isError, imageReady: imagesLoaded });

  return { viewState, imagesLoaded };
}
