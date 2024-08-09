import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../schemas/validationSchema.js';
import Button from '../../shared/components/Button/Button.jsx';
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
      date: '',
      comment: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    window.location.reload();
    toast.success('Successfully send');
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
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <input className={s.input} type="date" placeholder="Booking date" {...field} />
          )}
        />
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
