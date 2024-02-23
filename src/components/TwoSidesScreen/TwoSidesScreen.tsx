import React from 'react';
import './twoSidesScreen.scss';

export const TwoSidesScreen = () => {
  return (
    <>
      <div className='tSS'>
        <div className='tSS__title'>TwoSidesScreen</div>

        <div className='tSS__choice choice'>
          <div className='choice__first choice__first:hover'>IT</div>
          <div className='choice__second choice__second:hover'>ART</div>
        </div>

      </div>

    </>
  );
};
