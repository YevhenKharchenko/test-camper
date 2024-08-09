import React, { useState } from 'react';
import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campers/slice.js';
import s from './LikeButton.module.css';
import { selectIsFavorite } from '../../redux/selectors.js';

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
