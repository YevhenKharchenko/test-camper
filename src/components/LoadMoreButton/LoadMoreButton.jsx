import { useEffect, useState } from 'react';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/selectors.js';
import { fetchMoreCampers } from '../../redux/campers/operations.js';
import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handleMoreBtnClick }) => {
  return (
    <button type="button" className={clsx(s.btn)} onClick={handleMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
