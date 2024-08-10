import { Suspense } from 'react';
import Loader from '../../shared/components/Loader/Loader.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import HourglassLoader from '../../shared/components/HourglassLoader/HourglassLoader.jsx';
import s from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <main>
      <Container className={s.container}>
        <Suspense fallback={<HourglassLoader />}>{children}</Suspense>
      </Container>
    </main>
  );
};

export default SharedLayout;
