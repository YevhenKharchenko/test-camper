import React from 'react';
import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './CategoryItem.module.css';

const CategoryItem = ({ title, icon, fill }) => {
  return (
    <div className={s.wrapper}>
      <svg className={clsx(s.icon, fill && s.fill)}>
        <use xlinkHref={`${sprite}#${icon}`}></use>
      </svg>
      <p className={s.text}>{title}</p>
    </div>
  );
};

export default CategoryItem;
