import './App.css';
import SearchPage from './pages/search';
import MainPage from './pages/main';
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
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
