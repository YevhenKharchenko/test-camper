import { useEffect } from 'react';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/selectors.js';
import { fetchMoreCampers } from '../../redux/campers/operations.js';
import s from './LoadMoreButton.module.css';
import { resetPage } from '../../redux/campers/slice.js';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const lastPage = page === 'lastPage';
  console.log(lastPage);

  useEffect(() => {
    if (lastPage) {
      toast.error('There are no more campers to load.');
    }
  }, [lastPage]);

  const handleMoreBtnClick = () => {
    dispatch(fetchMoreCampers(page));
  };

  return (
    <button type="button" className={clsx(s.btn, lastPage && s.none)} onClick={handleMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
