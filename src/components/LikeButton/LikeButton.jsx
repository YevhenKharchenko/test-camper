import React from 'react';
import sprite from '../../assets/icons/sprite.svg';
import s from './LikeButton.module.css';

const LikeButton = () => {
  return (
    <button className={s.likeButton}>
      <svg className={s.likeIcon}>
        <use xlinkHref={`${sprite}#icon-like-default`}></use>
      </svg>
    </button>
  );
};

export default LikeButton;
