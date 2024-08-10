import clsx from 'clsx';
import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handleMoreBtnClick }) => {
  return (
    <button type="button" className={clsx(s.btn)} onClick={handleMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
