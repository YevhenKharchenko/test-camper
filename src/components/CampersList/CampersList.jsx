import { useEffect } from 'react';
import CampersItem from '../CampersItem/CampersItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton.jsx';
import s from './CampersList.module.css';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {campers.map(item => {
          return (
            <li key={item._id} className={s.item}>
              <CampersItem item={item} />
            </li>
          );
        })}
      </ul>
      <LoadMoreButton />
    </div>
  );
};

export default CampersList;
