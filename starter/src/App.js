import './App.css';
import SearchPage from './pages/search';
import MainPage from './pages/main';
import NotFound from './pages/not-found';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/search',
      element: <SearchPage />
    },
    { path: '*', element: <NotFound /> }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
