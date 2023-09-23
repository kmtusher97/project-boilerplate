import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { CoursesPage } from '../pages/CoursesPage';
import { AboutPage } from '../pages/AboutPage';

import { SecureRoute } from './SecureRoute';

const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
          path: 'courses',
          element: secureRouteWrapper(<CoursesPage />),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
