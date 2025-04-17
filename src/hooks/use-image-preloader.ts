import { useEffect, useState } from 'react';

export function useImagePreloader(imageUrls: string[] = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) return;

    const preload = () =>
      Promise.all(
        imageUrls.map(
          (url) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = url;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
      );

    preload().then(() => setLoaded(true));
  }, [imageUrls]);

  return loaded;
}
