import axios from 'axios';
import { PaginatedResponse } from '../types/paginated-response';

export interface FetchVideosParams {
  page?: number;
  limit?: number;
  search?: string;
  sort_by?: 'created_at' | 'title';
  order?: 'asc' | 'desc';
}

export const fetchVideos = async (params: FetchVideosParams = {}): Promise<PaginatedResponse> => {
    const response = await axios.get('http://localhost:3001/videos', { params });
    return response.data;
};
