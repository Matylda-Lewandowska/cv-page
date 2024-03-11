import React from 'react';
import './header.scss';
import { useMainContext } from '../../context/MainContext';
import { ViewSizeEnum } from '../../enums/ViewSizeEnum';
import cn from 'classnames';
import { ColorOptionsButton } from '../ColorOptionsButton/ColorOptionsButton';
import { HamburgerMenuButton } from '../HamburgerMenuButton/HamburgerMenuButton';
import { menuData } from '../../assets/data/menuData';
import { ButtonLinkMenu } from '../utils/ButtonLinkMenu/ButtonLinkMenu';

export const Header = () => {
  const { viewSize, color, theme } = useMainContext();

  return (
    <>
      <nav className={cn('nav', `bg-${theme}-main`,
        `border-${color}-main`,
        'border-w2 border-down',
        `box-shadow-${color}-${theme}`,
        'tran-bg-color'
      )}>
        <div>
          <ColorOptionsButton />
        </div>

        {viewSize === ViewSizeEnum.DESKTOP &&
        <div
          className='nav__links'
        >
          {menuData.map((data, idx) => {
            return (<div key={idx}>
              <ButtonLinkMenu info={data} />
            </div>);
          })}
        </div>
        }

        {viewSize !== ViewSizeEnum.DESKTOP &&
          <div>
            <HamburgerMenuButton />
          </div>
        }
      </nav>
    </>
  );
};
