import React from 'react';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={s.container}>
      <FiltersBar />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
