import React from 'react';
import { useMainContext } from '../../../context/MainContext';
import './links.scss';
import cn from 'classnames';

type LinksProps = {
  title: string,
  link: string,
}

export const Links: React.FC<LinksProps> = ({ title, link }) => {
  const { color, theme } = useMainContext();

  return (
    <a
      href={link}
      className={
        cn('padding05 border-s-solid transition-all border-w1 border-radius05 no-decoration flex-direction-row flex-column-gap05',
          `${color}-${theme}-main--hover box-shadow-${color}-${theme}--hover bg-${theme}-main--hover`)
      }
    >
      <div>
        {title}
      </div>
      <div
        className='links__arr-right'
      ></div>
    </a>
  );
};
