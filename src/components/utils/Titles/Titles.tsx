import React from 'react';
import { useMainContext } from '../../../context/MainContext';

type TitlesProps = {
  title: string,
}

export const Titles: React.FC<TitlesProps> = ({ title }) => {
  const { color } = useMainContext();

  return (
    <h2
      className={`${color}-main`}
    >
      {title}
    </h2>
  );
};
