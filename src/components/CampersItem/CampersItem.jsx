import React from 'react';
import Button from '../../shared/components/Button/Button.jsx';
import s from './CampersItem.module.css';

const CampersItem = ({ item }) => {
  return (
    <div className={s.listItem}>
      <img src={item.gallery[0]} alt="" width={290} height={310} />
      <div className={s.descriptionWrapper}>
        <div className={s.nameWrapper}>
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
        <div className={s.ratingWrapper}>
          <p>
            {item.rating} ({item.reviews.length} Reviews)
          </p>
          <p>{item.location}</p>
        </div>
        <p className={s.description}>{item.description}</p>
        <ul className={s.detailsList}>
          <li>{item.adults} adults</li>
          <li>{item.transmission}</li>
          <li>{item.engine}</li>
          <li>{item.details.kitchen} kitchen</li>
          <li>{item.details.beds} beds</li>
          <li>{item.details.airConditioner} AC</li>
        </ul>
        <Button title="Show more" className={s.button} />
      </div>
    </div>
  );
};

export default CampersItem;
