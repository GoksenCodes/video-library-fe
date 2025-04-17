import { renderHook } from '@testing-library/react';
import { useVideoViewState } from './use-video-view-state';

describe('useVideoViewState', () => {
  it('returns "loading" when isLoading is true', () => {
    const { result } = renderHook(() =>
      useVideoViewState({ isLoading: true, isError: false, imageReady: false })
    );
    expect(result.current).toBe('loading');
  });

  it('returns "error" when isError is true', () => {
    const { result } = renderHook(() =>
      useVideoViewState({ isLoading: false, isError: true, imageReady: false })
    );
    expect(result.current).toBe('error');
  });

  it('returns "ready" when imageReady is true and not loading or error', () => {
    const { result } = renderHook(() =>
      useVideoViewState({ isLoading: false, isError: false, imageReady: true })
    );
    expect(result.current).toBe('ready');
  });

  it('returns "loading" as fallback if nothing else matches', () => {
    const { result } = renderHook(() =>
      useVideoViewState({ isLoading: false, isError: false, imageReady: false })
    );
    expect(result.current).toBe('loading');
  });
});
