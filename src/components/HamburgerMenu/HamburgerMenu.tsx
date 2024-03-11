import React from 'react';
import './hamburgerMenu.scss';
import { useMainContext } from '../../context/MainContext';
import cn from 'classnames';
import { menuData } from '../../assets/data/menuData';
import { ButtonLinkMenu } from '../utils/ButtonLinkMenu/ButtonLinkMenu';

type HamburgerMenuProp = {
  opened: boolean
}

export const HamburgerMenu: React.FC<HamburgerMenuProp> = ({ opened }) => {
  const { theme, color } = useMainContext();

  return (

    <div className={cn('menu-right color-menu border-radius1 border-s-solid',
      `box-shadow-${color}-${theme} border-${color}-main bg-${theme}-main`, {
        hidden: !opened,
        open: opened
      }
    )}
    >
      <div
        className='menu-right__links'
      >
        { menuData.map((data, idx) => {
          return (<div key={idx}>
            <ButtonLinkMenu info={data} />
          </div>);
        })}
      </div>
    </div>
  );
};
