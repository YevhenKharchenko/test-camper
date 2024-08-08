import React from 'react';
import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './FiltersBar.module.css';
import Button from '../../shared/components/Button/Button.jsx';

const FiltersBar = () => {
  return (
    <div className={s.container}>
      <form className={s.filtersForm}>
        <label className={s.locationLabel} htmlFor="">
          Location
          <input className={s.locationInput} type="text" defaultValue="Kyiv, Ukraine" />
          <svg className={s.locationIcon}>
            <use xlinkHref={`${sprite}#icon-map-pin`}></use>
          </svg>
        </label>

        <p className={s.filtersText}>Filters</p>

        <fieldset className={s.equipmentFieldset}>
          <legend className={s.equipmentLegend}>Vehicle equipment</legend>
          <div className={s.checkboxWrapper}>
            <input type="checkbox" className={clsx(s.checkbox, s.visuallyHidden)} id="ac" />
            <label className={s.checkboxLabel} htmlFor="ac">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-conditioner`}></use>
                </svg>
                <span className={s.checkboxSpan}>AC</span>
              </div>
            </label>

            <input type="checkbox" className={clsx(s.checkbox, s.visuallyHidden)} id="automatic" />
            <label className={s.checkboxLabel} htmlFor="automatic">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-automatic`}></use>
                </svg>
                <span className={s.checkboxSpan}>Automatic</span>
              </div>
            </label>

            <input type="checkbox" className={clsx(s.checkbox, s.visuallyHidden)} id="kitchen" />
            <label className={s.checkboxLabel} htmlFor="kitchen">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-kitchen`}></use>
                </svg>
                <span className={s.checkboxSpan}>Kitchen</span>
              </div>
            </label>

            <input type="checkbox" className={clsx(s.checkbox, s.visuallyHidden)} id="tv" />
            <label className={s.checkboxLabel} htmlFor="tv">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-tv`}></use>
                </svg>
                <span className={s.checkboxSpan}>TV</span>
              </div>
            </label>

            <input type="checkbox" className={clsx(s.checkbox, s.visuallyHidden)} id="shower" />
            <label className={s.checkboxLabel} htmlFor="shower">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-shower`}></use>
                </svg>
                <span className={s.checkboxSpan}>Shower</span>
              </div>
            </label>
          </div>
        </fieldset>

        <fieldset className={s.typeFieldset}>
          <legend className={s.typeLegend}>Vehicle type</legend>

          <div className={s.radioWrapper}>
            <input
              type="radio"
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="van"
              name="type"
            />
            <label className={s.checkboxLabel} htmlFor="van">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-camper-van`}></use>
                </svg>
                <span className={s.checkboxSpan}>Van</span>
              </div>
            </label>

            <input
              type="radio"
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="integrated"
              name="type"
            />
            <label className={s.checkboxLabel} htmlFor="integrated">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-camper-integrated`}></use>
                </svg>
                <span className={clsx(s.checkboxSpan, s.integrated)}>Fully Integrated</span>
              </div>
            </label>

            <input
              type="radio"
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="alcove"
              name="type"
            />
            <label className={s.checkboxLabel} htmlFor="alcove">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-camper-alcove`}></use>
                </svg>
                <span className={s.checkboxSpan}>Alcove</span>
              </div>
            </label>
          </div>
        </fieldset>

        <Button type="submit" title="Search" />
      </form>
    </div>
  );
};

export default FiltersBar;
