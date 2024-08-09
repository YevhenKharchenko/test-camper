import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import HourglassLoader from './shared/components/HourglassLoader/HourglassLoader.jsx';

import Navigation from './components/Navigation/Navigation.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <SharedLayout>
      <Navigation />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
