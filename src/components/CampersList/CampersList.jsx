import React from 'react';
import data from '../../shared/data/campers.json';
import s from './CampersList.module.css';
import CampersItem from '../CampersItem/CampersItem.jsx';

console.log(data);

const CampersList = () => {
  return (
    <div>
      <ul className={s.list}>
        {data.map(item => {
          return (
            <li key={item._id} className={s.item}>
              <CampersItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersList;
