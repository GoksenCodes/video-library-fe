import { renderHook, waitFor } from '@testing-library/react';
import { useImagePreloader } from './use-image-preloader';

beforeAll(() => {
  class MockImage {
    onload: () => void = () => {};
    onerror: () => void = () => {};
    set src(_url: string) {
      // Simulate image loading async
      setTimeout(() => {
        this.onload(); 
      }, 0);
    }
  }

  Object.defineProperty(window, 'Image', {
    writable: true,
    configurable: true,
    value: MockImage
  });
});

describe('useImagePreloader', () => {
  it('returns false initially, then true when all images load', async () => {
    const { result } = renderHook(() =>
      useImagePreloader(['url1.jpg', 'url2.jpg'])
    );

    expect(result.current).toBe(false);

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
