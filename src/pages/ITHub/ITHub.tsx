import React from 'react';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';
import './itHub.scss';
import cn from 'classnames';
import { useMainContext } from '../../context/MainContext';
import { ThemeEnum } from '../../enums/ThemeEnum';

export const ITHub = () => {
  const { theme, color } = useMainContext();

  return (
    <DefaultLayout>
      <div className={cn('h100 padding-top2 flex-centered transition-all', {
        'bg-LT-white': theme === ThemeEnum.LIGHT,
        'bg-DT-black': theme === ThemeEnum.DARK
      })}>
        <div className={ cn(
          'border-s-slid border-w2 border-radius1 padding15 w75 main-page',
          `bg-${theme}-main border-red-main box-shadow-${color}-${theme}`, {

          }
        )}>
          <div>ITHub</div>
          <div> summary </div>
          <div> get know my
            <a href='http://localhost:3000/#/it/tech-stack'>
        tech-stack
            </a>
          </div>
          <div> section: my latest projects +
            <a href='http://localhost:3000/#/it/projects'>
        link to more projects
            </a>
          </div>
          <div> section: my ongoing projects?...</div>
          <div> section: my favourite implemented
            <a href='http://localhost:3000/#/it/functions'>
        function + more
            </a>
          </div>
        </div>
      </div>

    </DefaultLayout>
  );
};
