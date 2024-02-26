import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Home from '../pages/index';
import Blog from '../pages/blogs';
import Post from '../pages/blogs/_id';
import About from '../pages/About';

import { postById, posts } from '../apis/loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <Post />,
        loader: postById,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

// fungsi loader sebelum halaman tampil maka data di load terlebih dahulu agar tidak blank putih pada halaman
