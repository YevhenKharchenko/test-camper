import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal.jsx';
import { FaStar } from 'react-icons/fa';
import Button from '../../shared/components/Button/Button.jsx';
import LikeButton from '../LikeButton/LikeButton.jsx';
import Modal from '../Modal/Modal.jsx';
import CategoryItem from '../CategoryItem/CategoryItem.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './CampersItem.module.css';

const CampersItem = ({ item }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Modal onClose={closeModal} item={item} closeModal={closeModal} />);
  }, [setModal, closeModal, item]);

  return (
    <div className={s.listItem}>
      <img src={item.gallery[0]} alt="" width={290} height={310} className={s.camperImage} />
      <div className={s.descriptionWrapper}>
        <div className={s.nameWrapper}>
          <h2 className={s.title}>{item.name}</h2>
          <div className={s.priceWrapper}>
            <p className={s.price}>€{item.price}.00</p>
            <LikeButton item={item} />
          </div>
        </div>
        <div className={s.ratingWrapper}>
          <p className={s.rating}>
            <FaStar className={s.star} />
            {item.rating} ({item.reviews.length} Reviews)
          </p>
          <div className={s.locationWrapper}>
            <svg className={s.locationIcon}>
              <use xlinkHref={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p className={s.location}>{item.location}</p>
          </div>
        </div>
        <p className={s.description}>{item.description}</p>
        <ul className={s.detailsList}>
          <li>
            <CategoryItem icon="icon-users" title={`${item.adults} adults`} fill={true} />
          </li>
          <li>
            <CategoryItem icon="icon-automatic" title={`${item.transmission}`} />
          </li>
          <li>
            <CategoryItem icon="icon-petrol" title={item.engine} fill={true} />
          </li>
          {item.details.kitchen > 0 && (
            <li>
              <CategoryItem icon="icon-kitchen" title="kitchen" />
            </li>
          )}
          <li>
            <CategoryItem icon="icon-bed" title={`${item.details.beds} beds`} className=".stroke" />
          </li>
          {item.details.airConditioner > 0 && (
            <li>
              <CategoryItem icon="icon-conditioner" title="AC" />
            </li>
          )}
        </ul>
        <Button title="Show more" className={s.button} onClick={openModal} />
      </div>
    </div>
  );
};

export default CampersItem;
