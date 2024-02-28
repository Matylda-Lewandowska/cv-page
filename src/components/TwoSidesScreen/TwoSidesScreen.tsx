import React from 'react';
import './twoSidesScreen.scss';

type TwoSidesScreenProps = {
  titleLeft: string,
  titleRight: string,
}

export const TwoSidesScreen: React.FC<TwoSidesScreenProps> = ({ titleLeft, titleRight }) => {
  return (
    <>
      <div className='tSS'>
        <div className='tSS__title'>TwoSidesScreen</div>

        <div className='tSS__choice choice'>
          <div className='choice__first bg-blue-main choice__first:hover'>{titleLeft}</div>
          <div className='choice__second bg-purple-main choice__second:hover'>{titleRight}</div>
        </div>

      </div>

    </>
  );
};
