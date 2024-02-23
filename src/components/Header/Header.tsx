import React, { useState } from 'react';
import './header.scss';
import { useMainContext } from '../../context/MainContext';
import { ViewSizeEnum } from '../../enums/ViewSizeEnum';

export const Header = () => {
  const { viewSize } = useMainContext();
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  const handleOpeningMenu = () => {
    setOpenedMenu((prev) => { return (!prev); });
  };

  const navList = [
    {
      title: 'IT',
      link: 'http://localhost:3000/#/IT'
    },
    {
      title: 'Art',
      link: 'http://localhost:3000/#/Art'
    },
    {
      title: 'About',
      link: 'http://localhost:3000/#/about'
    }
  ];

  return (
    <>
      <div>Header</div>
      <nav className='nav'>
        <div>
          <div>
            Logo Here or smth
          </div>

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
