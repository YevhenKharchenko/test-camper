import { useEffect } from 'react';
import CampersItem from '../../components/CampersItem/CampersItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFavorite } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import s from './FavoritePage.module.css';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);

  // useEffect(() => {
  //   dispatch(fetchCampers());
  // }, [dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {favorite.map(item => {
          return (
            <li key={item._id} className={s.item}>
              <CampersItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoritePage;
