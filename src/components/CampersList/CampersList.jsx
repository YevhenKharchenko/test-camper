import { useEffect, useState, useMemo } from 'react';
import toast from 'react-hot-toast';
import CampersItem from '../CampersItem/CampersItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFilters } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import { resetFilters } from '../../redux/campers/slice.js';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton.jsx';
import s from './CampersList.module.css';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const [count, setCount] = useState(4);

  useEffect(() => {
    setCount(4);
    dispatch(resetFilters());
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredCampers = useMemo(() => {
    const { location = '', details = {}, form = '', transmission = '' } = filters;

    return campers.filter(el => {
      const camperLocation = el.location?.toLowerCase() || '';
      const camperDetails = el.details || {};
      const camperForm = el.form || '';
      const camperTransmission = el.transmission || '';

      const matchesLocation = camperLocation.includes(location.toLowerCase());

      const matchesForm = !form || camperForm === form;

      const matchesTransmission = !transmission || camperTransmission === transmission;

      const matchesEquipment = Object.keys(details).every(
        key => !details[key] || camperDetails[key] === 1
      );

      return matchesLocation && matchesEquipment && matchesForm && matchesTransmission;
    });
  }, [campers, filters]);

  useEffect(() => {
    if (count >= filteredCampers.length) {
      toast.error('There are no more campers to load.');
    }
  }, [count, filteredCampers.length]);

  const handleMoreBtnClick = () => {
    setCount(prevCount => prevCount + 4);
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredCampers.slice(0, count).map(item => {
          return (
            <li key={item._id} className={s.item}>
              <CampersItem item={item} />
            </li>
          );
        })}
      </ul>
      {count < filteredCampers.length && <LoadMoreButton handleMoreBtnClick={handleMoreBtnClick} />}
    </div>
  );
};

export default CampersList;
