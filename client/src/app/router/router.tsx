import { createBrowserRouter } from 'react-router-dom';
import { ROUTES as AppRoutes } from './routes';
import Layout from './Layout/Layout';
import { HomePage } from '../../pages/HomePage/HomePage';
import MapPage from '@/pages/MapPage/MapPage';




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
        path: AppRoutes.FILMS,
        element: <HomePage />,
      },
      {
        path: AppRoutes.MAP,
        element: <MapPage />,
      },
      // {
      //   path: AppRoutes.TASKS,
      //   element: <HomePage />,
      //   children: [
      //     {
      //       path: AppRoutes.TASK_DETAIL,
      //       element: (
      //         <ProtectedRoute>
      //           <TaskDetailPage />
      //         </ProtectedRoute>
      //       ),
      //     },
          
      //   ],
      // },
      {
        path: AppRoutes.SIGNIN,
        element: <HomePage />,
      },
      {
        path: AppRoutes.SIGNUP,
        element: <HomePage />,
      },
    ],
  },
]);
