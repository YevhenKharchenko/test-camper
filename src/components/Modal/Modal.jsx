import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import sprite from '../../assets/icons/sprite.svg';
import Features from '../Features/Features.jsx';
import BookCamperForm from '../BookCamperForm/BookCamperForm.jsx';
import s from './Modal.module.css';
import Reviews from '../Reviews/Reviews.jsx';

const Modal = ({ item, closeModal }) => {
  const [option, setOption] = useState('features');

  console.log(item);

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
      <p className={s.price}>€{item.price}</p>
      <div className={s.imgWrapper}>
        <img src={item.gallery[0]} alt="" width={290} height={310} className={s.camperImage} />
        <img src={item.gallery[1]} alt="" width={290} height={310} className={s.camperImage} />
        <img src={item.gallery[2]} alt="" width={290} height={310} className={s.camperImage} />
      </div>
      <p className={s.description}>{item.description}</p>
      <div className={s.titlesWrapper}>
        <button
          className={s.subtitle}
          onClick={() => {
            setOption('features');
          }}
        >
          Features
        </button>
        <button
          className={s.subtitle}
          onClick={() => {
            setOption('reviews');
          }}
        >
          Reviews
        </button>
      </div>
      <div className={s.infoWrapper}>
        {option === 'features' && <Features item={item} />}
        {option === 'reviews' && <Reviews item={item} />}
        <BookCamperForm />
      </div>
    </div>
  );
};

export default Modal;
