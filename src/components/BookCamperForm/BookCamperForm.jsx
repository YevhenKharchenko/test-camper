import React from 'react';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { validationSchema } from '../../schemas/validationSchema.js';
import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './BookCamperForm.module.css';
import toast from 'react-hot-toast';

const BookCamperForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      date: null,
      comment: '',
    },
  });

  const onSubmit = data => {
    toast.success('Successfully sent');
    window.location.reload();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Book your campervan now</h2>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input className={s.input} type="text" placeholder="Name" {...field} />
          )}
        />
        {errors.name && <div className={s.error}>{errors.name.message}</div>}

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input className={s.input} type="text" placeholder="Email" {...field} />
          )}
        />
        {errors.email && <div className={s.error}>{errors.email.message}</div>}

        <div
          className={s.dateWrapper}
          onClick={() => document.getElementById('date-input').focus()}
        >
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                id="date-input"
                className={s.dateInput}
                placeholderText="Booking date"
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          <svg className={s.icon}>
            <use xlinkHref={`${sprite}#icon-calendar`}></use>
          </svg>
        </div>
        {errors.date && <div className={s.error}>{errors.date.message}</div>}

        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <textarea className={s.textarea} placeholder="Comment" {...field} />
          )}
        />
        {errors.comment && <div className={s.error}>{errors.comment.message}</div>}

        <Button type="submit" title="Send" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default BookCamperForm;
