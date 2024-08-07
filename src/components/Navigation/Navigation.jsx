import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorite" className={buildLinkClass}>
          Favorite
        </NavLink>
      </nav>
      <Toaster position="top-right" />
    </header>
  );
};

export default Navigation;
