import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import sprite from '../../assets/icons/sprite.svg';
import Button from '../../shared/components/Button/Button.jsx';
import s from './FiltersBar.module.css';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/campers/slice.js';

const FiltersBar = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(setFilters(data));
  };

  return (
    <div className={s.container}>
      <form className={s.filtersForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={s.locationLabel} htmlFor="">
          Location
          <input
            className={s.locationInput}
            type="text"
            {...register('location')}
            placeholder="City"
          />
          <svg className={s.locationIcon}>
            <use xlinkHref={`${sprite}#icon-map-pin`}></use>
          </svg>
        </label>

        <p className={s.filtersText}>Filters</p>

        <fieldset className={s.equipmentFieldset}>
          <legend className={s.equipmentLegend}>Vehicle equipment</legend>
          <div className={s.checkboxWrapper}>
            <input
              type="checkbox"
              {...register('details.airConditioner')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="ac"
            />
            <label className={s.checkboxLabel} htmlFor="ac">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-conditioner`}></use>
                </svg>
                <span className={s.checkboxSpan}>AC</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('transmission')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              value="automatic"
              id="automatic"
            />
            <label className={s.checkboxLabel} htmlFor="automatic">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-automatic`}></use>
                </svg>
                <span className={s.checkboxSpan}>Automatic</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.kitchen')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="kitchen"
            />
            <label className={s.checkboxLabel} htmlFor="kitchen">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-kitchen`}></use>
                </svg>
                <span className={s.checkboxSpan}>Kitchen</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.TV')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="tv"
            />
            <label className={s.checkboxLabel} htmlFor="tv">
              <div className={s.wrapper}>
                <svg className={clsx(s.checkboxIcon)}>
                  <use xlinkHref={`${sprite}#icon-tv`}></use>
                </svg>
                <span className={s.checkboxSpan}>TV</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.shower')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="shower"
            />
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
              value="panelTruck"
              {...register('form')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="van"
              name="form"
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
              value="fullyIntegrated"
              {...register('form')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="integrated"
              name="form"
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
              value="alcove"
              {...register('form')}
              className={clsx(s.checkbox, s.visuallyHidden)}
              id="alcove"
              name="form"
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
