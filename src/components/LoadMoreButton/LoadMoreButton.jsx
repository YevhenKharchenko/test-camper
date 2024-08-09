import React from 'react';
import s from './LoadMoreButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/selectors.js';
import { fetchMoreCampers } from '../../redux/campers/operations.js';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  console.log(page);

  const handleMoreBtnClick = () => {
    dispatch(fetchMoreCampers(page));
  };

  return (
    <button type="button" className={s.btn} onClick={handleMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
