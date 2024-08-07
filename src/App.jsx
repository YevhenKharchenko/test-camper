import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser, getAllUsers } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/selectors.js';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import HourglassLoader from './shared/components/HourglassLoader/HourglassLoader.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getAllUsers());
  }, [dispatch]);

  return isRefreshing ? (
    <HourglassLoader />
  ) : (
    <SharedLayout>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
