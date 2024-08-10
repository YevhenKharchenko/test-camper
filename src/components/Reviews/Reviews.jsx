import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import s from './Reviews.module.css';

const Reviews = ({ item }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {item.reviews.map(el => {
          return (
            <li key={el.reviewer_name}>
              <ReviewItem item={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
