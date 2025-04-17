import React from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Video } from '../types/video';
import { useResponsiveColumns } from '../hooks/use-responsive-columns';

interface Props {
  videos: Video[];
}

const VideoGallery: React.FC<Props> = ({ videos }) => {

    const cols = useResponsiveColumns();

  return (
    <ImageList cols={cols} gap={16}>
      {videos.map((video) => (
        <ImageListItem key={video.id}>
          <img
            src={video.thumbnail_url}
            alt={video.title}
            loading="lazy"
          />
          <ImageListItemBar title={video.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default VideoGallery;
