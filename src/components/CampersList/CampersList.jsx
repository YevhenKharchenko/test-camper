import { useEffect } from 'react';
import CampersItem from '../CampersItem/CampersItem.jsx';
import s from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <ul className={s.list}>
        {campers.map(item => {
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
