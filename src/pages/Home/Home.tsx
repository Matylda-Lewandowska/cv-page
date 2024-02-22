import React from 'react';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { useMainContext } from '../../context/MainContext';

export const Home = () => {
  const { viewSize, theme } = useMainContext();

  return (
    <DefaultLayout>
      <div>Home</div>
      <div>
      Current view size: {viewSize}<br />
      Current theme: {theme}
      </div>
    </DefaultLayout>
  );
};
