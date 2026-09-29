import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@/config/routes';
import { MainLayout } from '@/views/layouts/MainLayout';
import { HomePage } from '@/views/pages/HomePage';
import { NotFoundPage } from '@/views/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: routes.notFound,
    element: <NotFoundPage />,
  },
]);
