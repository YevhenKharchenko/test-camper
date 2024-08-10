import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campers/slice.js';
import { selectIsFavorite } from '../../redux/selectors.js';
import sprite from '../../assets/icons/sprite.svg';
import s from './LikeButton.module.css';

const LikeButton = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(item));

  const handleLikeClick = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <button className={s.likeButton} onClick={handleLikeClick}>
      <svg className={clsx(s.likeIcon, isFavorite ? s.liked : '')}>
        <use xlinkHref={`${sprite}#icon-like-default`}></use>
      </svg>
    </button>
  );
};

export default LikeButton;
