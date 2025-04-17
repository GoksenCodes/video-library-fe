import React from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar
} from '@mui/material';
import { Video } from '../types/video';

interface Props {
  videos: Video[];
}

const VideoGallery: React.FC<Props> = ({ videos }) => {
  return (
    <ImageList cols={4} gap={16}>
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
