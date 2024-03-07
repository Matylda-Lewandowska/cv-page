import React from 'react';
import './header.scss';
import { useMainContext } from '../../context/MainContext';
import { ViewSizeEnum } from '../../enums/ViewSizeEnum';
import cn from 'classnames';
import { ColorOptionsButton } from '../ColorOptionsButton/ColorOptionsButton';
import { HamburgerMenuButton } from '../HamburgerMenuButton/HamburgerMenuButton';

export const Header = () => {
  const { viewSize, color, theme } = useMainContext();

  const navList = [
    {
      title: 'IT',
      link: 'http://localhost:3000/#/it'
    },
    // {
    //   title: 'Art',
    //   link: 'http://localhost:3000/#/art'
    // },
    {
      title: 'About',
      link: 'http://localhost:3000/#/about'
    }
  ];

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
        (<div className='nav__list'>
          {navList.map((navItem, idx) => {
            return (
              <div key={idx}>

                <a href={navItem.link}>
                  <div className='nav__list-item'>
                    {navItem.title}
                  </div>
                </a>
              </div>
            );
          })

          }
        </div>)
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
