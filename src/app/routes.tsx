import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from '../pages/LoginPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/login", element: <LoginPage/> },
      {
        path: '/',
        element: <div className="p-4">FitLink Home</div>,
      },
    ],
  },
]);
