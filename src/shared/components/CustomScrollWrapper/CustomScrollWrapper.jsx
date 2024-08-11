import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import clsx from 'clsx';
import './CustomScrollWrapper.css';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
  return (
    <OverlayScrollbarsComponent
      element="div"
      className={clsx('myScroll', wrapClassName && wrapClassName)}
      options={{
        scrollbars: { autoHide: 'never', theme: 'no-theme' },
      }}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default CustomScrollWrapper;
