import { createBrowserRouter } from 'react-router-dom';
import { SingIn } from './pages/auth/sign-in';
import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';
import { SignUp } from './pages/auth/sign-up';
import { Orders } from './pages/app/orders/orders';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { NotFound } from './pages/404';
import { Error } from './pages/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      { path: '/', element: <Dashboard></Dashboard> },
      { path: '/orders', element: <Orders></Orders> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: '/sign-in', element: <SingIn></SingIn> },
      { path: '/sign-up', element: <SignUp></SignUp> },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);
