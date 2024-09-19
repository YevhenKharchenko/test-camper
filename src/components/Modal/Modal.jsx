import clsx from 'clsx';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { getFormattedPrice } from '../../utils/getFormattedPrice.js';
import Features from '../Features/Features.jsx';
import BookCamperForm from '../BookCamperForm/BookCamperForm.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './Modal.module.css';
import CustomScrollWrapper from '../../shared/components/CustomScrollWrapper/CustomScrollWrapper.jsx';

const Modal = ({ item, closeModal }) => {
  const [option, setOption] = useState('features');

  return (
    <section className={s.container}>
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
      <p className={s.price}>€{getFormattedPrice(item.price)}</p>

      <CustomScrollWrapper scrollClassName={s.scrollbarWrapper}>
        <ul className={s.imgContainer}>
          {item.gallery.map((el, idx) => {
            return (
              <li key={idx}>
                <img
                  src={el}
                  alt="Camper image"
                  width={290}
                  height={310}
                  className={s.camperImage}
                />
              </li>
            );
          })}
        </ul>
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
    </section>
  );
};

export default Modal;
