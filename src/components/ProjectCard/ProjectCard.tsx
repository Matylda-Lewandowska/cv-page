import React from 'react';
import { TwoSidesScreen } from '../TwoSidesScreen/TwoSidesScreen';
import './projectCard.scss';
import { useMainContext } from '../../context/MainContext';
// import { ProjectCardType } from '../../types/ProjectCardType';
import cn from 'classnames';
import { ThemeEnum } from '../../enums/ThemeEnum';
import { ColorEnum } from '../../enums/ColorEnum';

type ProjectCardProps = {
  // props: ProjectCardType
  props: {title: string}
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ props }) => {
  const { color, theme } = useMainContext();

  return (
    <div className={cn('project-card__h border-s-solid border-radius05 flex-row-gap05 flex-direction-column border-w2 transition-all',
      `box-shadow-${color}-${theme} ${color}-medium`, {
        'border-blue-dark bg-DT-dark': theme === ThemeEnum.DARK && color === ColorEnum.BLUE,
        'border-purple-dark bg-DT-dark': theme === ThemeEnum.DARK && color === ColorEnum.PURPLE,
        'border-orange-dark bg-DT-dark': theme === ThemeEnum.DARK && color === ColorEnum.ORANGE,
        'border-red-dark bg-DT-dark': theme === ThemeEnum.DARK && color === ColorEnum.RED,
        'border-blue-medium bg-LT-light': theme === ThemeEnum.LIGHT && color === ColorEnum.BLUE,
        'border-purple-medium bg-LT-light': theme === ThemeEnum.LIGHT && color === ColorEnum.PURPLE,
        'border-orange-medium bg-LT-light': theme === ThemeEnum.LIGHT && color === ColorEnum.ORANGE,
        'border-red-medium bg-LT-light': theme === ThemeEnum.LIGHT && color === ColorEnum.RED
      }
    )}>
      <div
        className='flex-align-center flex-direction-column'
      >
        <h3>{props.title}</h3>
        <div>tech-stack</div>
        <div>tech-stack here</div>
      </div>
      <TwoSidesScreen titleLeft={'DEMO'} titleRight={'CODE'} />
    </div>
  );
};
