import React from 'react';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';
import { useMainContext } from '../../context/MainContext';
import { TwoSidesScreen } from '../../components/TwoSidesScreen/TwoSidesScreen';
import './home.scss';

export const Home = () => {
  const { viewSize, theme } = useMainContext();

  return (
    <DefaultLayout>
      <div className='hp-content'>

        <div>Home</div>
        <div>
        Current view size: {viewSize}<br />
        Current theme: {theme}
        </div>
        <div className='hp-content__tSS'>
          <TwoSidesScreen titleLeft={'IT'} titleRight={'Art'} />
        </div>
      </div>
    </DefaultLayout>
  );
};
