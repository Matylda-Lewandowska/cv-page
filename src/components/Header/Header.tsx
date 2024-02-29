import React, { useState } from 'react';
import './header.scss';
import { useMainContext } from '../../context/MainContext';
import { ViewSizeEnum } from '../../enums/ViewSizeEnum';
import cn from 'classnames';
import { ThemeEnum } from '../../enums/ThemeEnum';
import { ColorEnum } from '../../enums/ColorEnum';

export const Header = () => {
  const { viewSize, color, theme, setTheme, setColor } = useMainContext();
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  const handleOpeningMenu = () => {
    setOpenedMenu((prev) => { return (!prev); });
  };

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

  const handleColor = () => {
    if (color === ColorEnum.ORANGE && setColor) {
      setColor(ColorEnum.RED);
    }

    if (color === ColorEnum.RED && setColor) {
      setColor(ColorEnum.BLUE);
    }

    if (color === ColorEnum.BLUE && setColor) {
      setColor(ColorEnum.PURPLE);
    }

    if (color === ColorEnum.PURPLE && setColor) {
      setColor(ColorEnum.ORANGE);
    }
  };

  const handleTheme = () => {
    if (theme === ThemeEnum.DARK && setTheme) {
      setTheme(ThemeEnum.LIGHT);
    }

    if (theme === ThemeEnum.LIGHT && setTheme) {
      setTheme(ThemeEnum.DARK);
    }
  };

  return (
    <>
      <nav className={cn('nav', `bg-${theme}-main`,
        `border-${color}-main`,
        'border-w2 border-down',
        `box-shadow-${color}-${theme}`,
        'tran-bg-color'
      )}>
        <div>
          {/* <div>
            Logo Here or smth
          </div> */}
          <button
            onClick={() => handleColor()}>
            CLICK HERE TO CHANGE COLOR
          </button>

          <button
            onClick={() => handleTheme()}>
            CLICK HERE TO CHANGE THEME
          </button>

          <div> THEME: {theme}</div>
          <div> COLOR: {color}</div>

          {viewSize !== ViewSizeEnum.DESKTOP &&
              (<div>Menu OPENED {`${openedMenu}`}</div>)
          }
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
          (
            <button
              className='nav__menu-button'
              onClick={handleOpeningMenu}>
              HAMBURGER HERE
            </button>
          )
        }

        {openedMenu && viewSize !== ViewSizeEnum.DESKTOP &&
        (<div className='nav__menu menu'>
          <button
            className='menu__X-button'
            onClick={() => setOpenedMenu(false)}>
            X
          </button>

          {navList.map((navItem, idx) => {
            return (
              <div key={idx}>

                <a href={navItem.link}>
                  <div className='menu__list-item'>
                    {navItem.title}
                  </div>
                </a>
              </div>
            );
          })

          }
        </div>)
        }

      </nav>
    </>
  );
};
