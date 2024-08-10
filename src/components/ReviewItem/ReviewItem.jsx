import { FaStar } from 'react-icons/fa';
import s from './ReviewItem.module.css';

const ReviewItem = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.nameWrapper}>
        <span className={s.nameSpan}>{item.reviewer_name[0]}</span>
        <div className={s.ratingWrapper}>
          <p className={s.name}>{item.reviewer_name}</p>
          <div className={s.rating}>
            {Array.from({ length: item.reviewer_rating }, (_, index) => (
              <div key={index}>
                <FaStar className={s.star} />
              </div>
            ))}
            {Array.from({ length: 5 - item.reviewer_rating }, (_, index) => (
              <div key={index}>
                <FaStar className={s.empty} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={s.text}>{item.comment}</p>
    </div>
  );
};

export default ReviewItem;
