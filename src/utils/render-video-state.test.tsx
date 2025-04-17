import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderVideoState } from './render-video-state';
import { PaginatedResponse } from '../types/paginated-response';

vi.mock('../components/video-gallery', () => ({
  default: ({ videos }: { videos: any[] }) => (
    <div data-testid="video-gallery">{`Gallery with ${videos.length} videos`}</div>
  )
}));

describe('renderVideoState', () => {
  it('renders 8 skeletons when loading', () => {
    const view = render(renderVideoState('loading'));
    const skeletons = view.container.querySelectorAll('.MuiSkeleton-root');
    expect(skeletons.length).toBe(8);
  });

  it('renders error alert when error', () => {
    render(renderVideoState('error'));
    expect(screen.getByText(/failed to load videos/i)).toBeInTheDocument();
  });

  it('renders VideoGallery when ready and data is available', () => {
    const mockData: PaginatedResponse = {
      data: [
        { id: 'v1', title: 'Test Video', thumbnail_url: '', created_at: '', duration: 0, views: 0, tags: [] }
      ],
      meta: { page: 1, limit: 10, total: 1, pages: 1 }
    };

    render(renderVideoState('ready', mockData));
    expect(screen.getByTestId('video-gallery')).toHaveTextContent('Gallery with 1 videos');
  });

  it('returns null when ready but no data', () => {
    const { container } = render(renderVideoState('ready', undefined));
    expect(container).toBeEmptyDOMElement();
  });
});
