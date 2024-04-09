import type { CSSProperties, FC } from 'react';

export const Spinner: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <div className="spinner-container" style={style}>
      <div className="spinner">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
      </div>
    </div>
  );
};

Spinner.displayName = 'Spinner';
