import { createBrowserRouter } from 'react-router-dom';
import { ROUTES as AppRoutes } from './routes';
import Layout from './Layout/Layout';
import { HomePage } from '../../pages/HomePage/HomePage';

import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';

import MapPage from '@/pages/MapPage/MapPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { OnePlacePage } from '@/pages/OnePlacePage';
import { ProtectedRoute } from '@/shared/ui/Modal/ProtectedRoute';


export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Layout />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <HomePage />,
      },
      {
        path: AppRoutes.MAP,
        element: <MapPage />,
      },
      {
        path: AppRoutes.SIGNIN,
        element: <SignInPage />,
      },
      {
        path: AppRoutes.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: AppRoutes.PROFILE,
        element: 
        <ProtectedRoute>
          <ProfilePage /> 
          </ProtectedRoute>
      },
      {
        path: AppRoutes.ONEPLACE,
        element: <OnePlacePage />,
      },
      
    ],
  },
]);
