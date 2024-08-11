import toast from 'react-hot-toast';
import { useEffect, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFilters } from '../../redux/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import { resetFilters } from '../../redux/campers/slice.js';
import CampersItem from '../CampersItem/CampersItem.jsx';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton.jsx';
import s from './CampersList.module.css';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const [count, setCount] = useState(4);
  const [hasMounted, setHasMounted] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setCount(4);
    dispatch(resetFilters());
    dispatch(fetchCampers());
    setHasMounted(true);
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
    if (!hasMounted) return;

    if (filteredCampers.length === 0) {
      toast.error('No campers available.');
    } else if (count >= filteredCampers.length) {
      toast.success('All campers are loaded.');
    }
  }, [count, filteredCampers.length, hasMounted]);

  useEffect(() => {
    if (count > 4) {
      setTimeout(() => {
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    }
  }, [count]);

  const handleMoreBtnClick = () => {
    setCount(prevCount => prevCount + 4);
  };

  return (
    <div className={s.container}>
      {filteredCampers.length > 0 ? (
        <>
          <ul className={s.list} ref={listRef}>
            {filteredCampers.slice(0, count).map(item => (
              <li key={item._id} className={s.item}>
                <CampersItem item={item} />
              </li>
            ))}
          </ul>
          {count < filteredCampers.length && (
            <LoadMoreButton handleMoreBtnClick={handleMoreBtnClick} />
          )}
        </>
      ) : (
        <div className={s.empty}>
          <p className={s.emptyText}>
            No campers are available at the moment. Try adjusting your filters to see different
            results.
          </p>
        </div>
      )}
    </div>
  );
};

export default CampersList;
