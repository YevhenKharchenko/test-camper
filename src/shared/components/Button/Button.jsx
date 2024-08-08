import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ type = 'button', title, className, onClick, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.button, className && className)}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
