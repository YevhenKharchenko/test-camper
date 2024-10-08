import { formatString } from '../../utils/formatString.js';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';
import CategoryItem from '../CategoryItem/CategoryItem.jsx';
import s from './Features.module.css';

const Features = ({ item }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <CategoryItem icon="icon-users" title={`${item.adults} adults`} fill={true} />
        </li>
        <li>
          <CategoryItem icon="icon-automatic" title={capitalizeFirstLetter(item.transmission)} />
        </li>
        <li>
          <CategoryItem icon="icon-petrol" title={capitalizeFirstLetter(item.engine)} fill={true} />
        </li>
        {item.details.kitchen > 0 && (
          <li>
            <CategoryItem icon="icon-kitchen" title="Kitchen" />
          </li>
        )}
        <li>
          <CategoryItem icon="icon-bed" title={`${item.details.beds} beds`} className=".stroke" />
        </li>
        {item.details.airConditioner > 0 && (
          <li>
            <CategoryItem icon="icon-ac" title="AC" />
          </li>
        )}
        {item.details.CD > 0 && (
          <li>
            <CategoryItem icon="icon-cd" title="CD" />
          </li>
        )}
        {item.details.TV > 0 && (
          <li>
            <CategoryItem icon="icon-tv" title="TV" />
          </li>
        )}
        {item.details.radio > 0 && (
          <li>
            <CategoryItem icon="icon-radio" title="Radio" />
          </li>
        )}
        {item.details.freezer > 0 && (
          <li>
            <CategoryItem icon="icon-freezer" title="Freezer" />
          </li>
        )}
        {item.details.hob > 0 && (
          <li>
            <CategoryItem icon="icon-plate" title={`${item.details.hob} hob`} />
          </li>
        )}
        {item.details.microwave > 0 && (
          <li>
            <CategoryItem icon="icon-microwave" title="Microwave" />
          </li>
        )}
        {item.details.shower > 0 && (
          <li>
            <CategoryItem icon="icon-shower" title="Shower" />
          </li>
        )}
        {item.details.toilet > 0 && (
          <li>
            <CategoryItem icon="icon-toilet" title="Toilet" fill={true} />
          </li>
        )}
        {item.details.water !== '' && (
          <li>
            <CategoryItem icon="icon-water" title={`${parseFloat(item.details.water)} l`} />
          </li>
        )}
        {item.details.gas !== '' && (
          <li>
            <CategoryItem
              icon="icon-gas"
              title={`${parseFloat(item.details.gas)} kg`}
              fill={true}
            />
          </li>
        )}
      </ul>
      <h2 className={s.detailsTitle}>Vehicle details</h2>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Form</span>
          <span className={s.detailsSpan}>{formatString(item.form)}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Length</span>
          <span className={s.detailsSpan}>{`${parseFloat(item.length)} m`}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Width</span>
          <span className={s.detailsSpan}>{`${parseFloat(item.width)} m`}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Height</span>
          <span className={s.detailsSpan}>{`${parseFloat(item.height)} m`}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Tank</span>
          <span className={s.detailsSpan}>{`${parseFloat(item.tank)} l`}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsSpan}>Consumption</span>
          <span className={s.detailsSpan}>{item.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
