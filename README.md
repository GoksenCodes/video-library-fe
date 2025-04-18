# Video Library Dashboard – Frontend

This is the frontend application for the Video Library Dashboard. It's built with **React**, **TypeScript**, **Vite**, **Material UI**, and **TanStack Query (React Query)**. It communicates with a Node.js + SQLite backend to display, search, sort, and paginate video data.

---

## Features

- Paginated video listing with thumbnail previews
- Search by title (URL-synced)
- Sorting options: Newest, Oldest, A–Z, Z–A (URL-synced)
- Pagination controls (URL-synced)
- Loading skeletons + error states
- Responsive grid layout with dynamic column count
- Deep-linking support via URL query params
- Modular, testable architecture (hooks, components, utils)

---

## Stack

- React + TypeScript
- Vite
- React Query (TanStack)
- Material UI
- React Router v6
- JSDOM + Testing Library + Vitest (for unit testing)

---

## Setup Instructions

```bash
# Install dependencies
npm install

# Start the frontend server
npm run dev

# Run tests
npm test
```

---

## Project Structure Highlights

- components/ – Reusable UI components like VideoGallery, SearchBar, SortMenu
- hooks/ – Custom hooks for reusable state and logic (useVideoSearchParams, useImagePreloader)
- utils/ – Pure helper functions like renderVideoState
- types/ – Shared TypeScript types
- api/ – API client for calling the backend

## What Is Omitted & Why

| Feature                   | Reason |
|---------------------------|--------|
| **Debounced search**      | Skipped to prioritize core sorting/pagination logic and URL sync. Would add using `useDeferredValue` or `lodash.debounce`. |
| **Tag filtering**         | Would require backend filtering logic (e.g., parsing `tags[]` query param) and a UI for multi-select or chip input.|
| **Video details modal/page** | Due to time constraints, the detailed view triggered by clicking a video thumbnail is omitted. Would implement this using a modal or dedicated route that fetches and displays full video metadata using the `id` from the thumbnail. |
| **Date range filter**     | Useful, but would require an additional date picker + backend parsing logic. |
| **Visual design polish**  | The layout is clean and responsive but doesn’t focus on theming, animations, or pixel perfection — intentionally kept minimalist due to the time constraint. |


