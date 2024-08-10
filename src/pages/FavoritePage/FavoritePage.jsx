import { useEffect } from 'react';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import CampersItem from '../../components/CampersItem/CampersItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFavorite } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import s from './FavoritePage.module.css';
import img from '../../assets/images/autumn-season.png';

const FavoritePage = () => {
  const favorite = useSelector(selectFavorite);

  return favorite.length > 0 ? (
    <div className={s.container}>
      <DocumentTitle>Rent Camper - Favorite</DocumentTitle>
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
  ) : (
    <div className={s.empty}>
      <img className={s.img} src={img} alt="" width={400} height={400} />
      <h2>Your Favorites List is Currently Empty</h2>
      <p>
        Browse through our diverse selection of campers to find the perfect one for your next
        adventure. Add them to your favorites for easy access later!
      </p>
    </div>
  );
};

export default FavoritePage;
