import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import HourglassLoader from './shared/components/HourglassLoader/HourglassLoader.jsx';

const Navigation = lazy(() => import('./components/Navigation/Navigation.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
      <Suspense fallback={<HourglassLoader />}>
        <Navigation isHomePage={isHomePage} />
      </Suspense>
      <SharedLayout>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
