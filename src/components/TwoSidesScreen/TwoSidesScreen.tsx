import React from 'react';
import './twoSidesScreen.scss';

export const TwoSidesScreen = () => {
  return (
    <>
      <div className='tSS'>
        <div className='tSS__title'>TwoSidesScreen</div>

        <div className='tSS__choice choice'>
          <div className='choice__first'>IT</div>
          <div className='choice__second'>ART</div>
        </div>

      </div>

    </>
  );
};
