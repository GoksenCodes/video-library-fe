type ViewState = 'loading' | 'error' | 'ready';

interface UseVideoViewStateParams {
  isLoading: boolean;
  isError: boolean;
  imageReady: boolean;
}

export function useVideoViewState({
  isLoading,
  isError,
  imageReady
}: UseVideoViewStateParams): ViewState {
  if (isLoading) return 'loading';
  if (isError) return 'error';
  if (imageReady) return 'ready';
  return 'loading';
}
