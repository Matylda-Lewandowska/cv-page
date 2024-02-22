import React from 'react';
import './header.scss';

export const Header = () => {
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

        </div>

        <div className='nav__list'>
          {navList.map(navItem => {
            return (
              <a href={navItem.link}>
                <div className='nav__list-item'>
                  {navItem.title}
                </div>
              </a>
            );
          })

          }
        </div>
      </nav>
    </>
  );
};
