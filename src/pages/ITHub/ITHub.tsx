import React from 'react';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';
import './itHub.scss';
import cn from 'classnames';
import { useMainContext } from '../../context/MainContext';
import { ThemeEnum } from '../../enums/ThemeEnum';
import { Titles } from '../../components/utils/Titles/Titles';
import { DividerLine } from '../../components/utils/DividerLine/DividerLine';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Links } from '../../components/utils/Links/Links';

export const ITHub = () => {
  const { theme, color } = useMainContext();

  return (
    <DefaultLayout>
      <div className={cn('h100 padding-top2 flex-centered transition-all oxanium-medium-500', {
        'bg-LT-white': theme === ThemeEnum.LIGHT,
        'bg-DT-black': theme === ThemeEnum.DARK
      })}>
        <div className={ cn(
          'border-s-solid transition-all border-w2 border-radius1 padding15 w80 main-page',
          `bg-${theme}-main border-${color}-main box-shadow-${color}-${theme}`, {

          }
        )}>
          <div
            className='flex-direction-row flex-align-center flex-space-between'>
            <Titles title={'My Latest Projects:'} />
            <Links title={'More Projects'} link={'http://localhost:3000/#/it'} />
          </div>
          <DividerLine weight={1} />

          <ProjectCard props={{ title: 'here' }} />

          <div
            className='flex-direction-row flex-align-center flex-space-between'>
            <Titles title={'My Latest Features:'} />
            <Links title={'More Features'} link={'http://localhost:3000/#/it'} />
          </div>
          <DividerLine weight={1} />
        </div>
      </div>

    </DefaultLayout>
  );
};
