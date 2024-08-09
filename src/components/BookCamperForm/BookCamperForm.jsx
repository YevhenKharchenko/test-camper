import React from 'react';
import s from './BookCamperForm.module.css';
import Button from '../../shared/components/Button/Button.jsx';

const BookCamperForm = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Book your campervan now</h2>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <form className={s.form}>
        <input className={s.input} type="text" placeholder="Name" />
        <input className={s.input} type="text" placeholder="Email" />
        <input
          className={s.input}
          type="date"
          placeholder="Booking date"
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => (e.target.type = e.target.value ? 'date' : 'text')}
        />
        <textarea className={s.textarea} type="text" placeholder="Comment" />
        <Button type="submit" title="Send" />
      </form>
    </div>
  );
};

export default BookCamperForm;
