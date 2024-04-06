import type { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className="spinner-container">
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
