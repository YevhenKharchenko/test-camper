import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors.js';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import CampersItem from '../../components/CampersItem/CampersItem.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import img from '../../assets/images/autumn-season.png';
import s from './FavoritePage.module.css';

const FavoritePage = () => {
  const favorite = useSelector(selectFavorite);
  const navigate = useNavigate();

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
      <img className={s.img} src={img} alt="Camper picture" width={400} height={400} />
      <h2 className={s.title}>Your Favorites List is Currently Empty</h2>
      <p className={s.text}>
        Browse through our diverse selection of campers to find the perfect one for your next
        adventure. Add them to your favorites for easy access later!
      </p>
      <Button
        title="Explore Our Campers"
        className={s.btn}
        onClick={() => {
          navigate('/catalog');
        }}
      />
    </div>
  );
};

export default FavoritePage;
