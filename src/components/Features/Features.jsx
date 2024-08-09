import React from 'react';
import s from './Features.module.css';

const Features = ({ item }) => {
  console.log(item);

  return (
    <div className={s.container}>
      <ul className={s.list}></ul>
    </div>
  );
};

export default Features;
