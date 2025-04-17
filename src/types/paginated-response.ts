import { Video } from './video';

interface Meta {
    total: number;
    page: number;
    limit: number;
    pages: number;
}

export interface PaginatedResponse {
  data: Video[];
  meta: Meta
}
