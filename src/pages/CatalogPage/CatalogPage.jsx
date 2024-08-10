import DocumentTitle from '../../components/DocumentTitle.jsx';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <main>
      <div className={s.container}>
        <DocumentTitle>Rent Camper - Catalog</DocumentTitle>
        <FiltersBar />
        <CampersList />
      </div>
    </main>
  );
};

export default CatalogPage;
