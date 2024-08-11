import clsx from 'clsx';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Features from '../Features/Features.jsx';
import BookCamperForm from '../BookCamperForm/BookCamperForm.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './Modal.module.css';
import CustomScrollWrapper from '../../shared/components/CustomScrollWrapper/CustomScrollWrapper.jsx';

const Modal = ({ item, closeModal }) => {
  const [option, setOption] = useState('features');

  return (
    <div className={s.container}>
      <button className={s.modalCloseBtn} type="button" onClick={closeModal}>
        <svg className={s.modalCloseIcon}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={s.title}>{item.name}</h2>
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
      <p className={s.price}>€{item.price}.00</p>

      <CustomScrollWrapper wrapClassName={s.scrollbarWrapper}>
        <div className={s.imgContainer}>
          <div className={s.imgWrapper}>
            <img src={item.gallery[0]} alt="" width={290} height={310} className={s.camperImage} />
          </div>
          <div className={s.imgWrapper}>
            <img src={item.gallery[1]} alt="" width={290} height={310} className={s.camperImage} />
          </div>
          <div className={s.imgWrapper}>
            <img src={item.gallery[2]} alt="" width={290} height={310} className={s.camperImage} />
          </div>
        </div>
        <p className={s.description}>{item.description}</p>
        <div className={s.titlesWrapper}>
          <button
            className={clsx(s.subtitle, option === 'features' && s.active)}
            onClick={() => {
              setOption('features');
            }}
          >
            Features
          </button>
          <button
            className={clsx(s.subtitle, option === 'reviews' && s.active)}
            onClick={() => {
              setOption('reviews');
            }}
          >
            Reviews
          </button>
        </div>
        <div className={s.infoWrapper}>
          {option === 'features' ? <Features item={item} /> : <Reviews item={item} />}
          <BookCamperForm />
        </div>
      </CustomScrollWrapper>
    </div>
  );
};

export default Modal;
