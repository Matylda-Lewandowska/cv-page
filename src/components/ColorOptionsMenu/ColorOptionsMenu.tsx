import React from 'react';
import './colorOptionsMenu.scss';
import cn from 'classnames';
import { useMainContext } from '../../context/MainContext';
import { ColorChoosingButton } from '../ColorChoosingButton/ColorChoosingButton';
import { ColorEnum } from '../../enums/ColorEnum';
import { ThemeEnum } from '../../enums/ThemeEnum';

export const ColorOptionsMenu: React.FC = () => {
  const { theme, color } = useMainContext();

  return (
    <div className={cn('color-menu border-radius1 border-s-solid',
      `box-shadow-${color}-${theme} border-${color}-main bg-${theme}-main`
    )}>
      <div className='cb-group'>
        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ThemeEnum.LIGHT} />
          <ColorChoosingButton colored={ThemeEnum.DARK} />
        </div>

        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ColorEnum.BLUE} />
          <ColorChoosingButton colored={ColorEnum.PURPLE} />
        </div>

        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ColorEnum.ORANGE} />
          <ColorChoosingButton colored={ColorEnum.RED} />
        </div>
      </div>

    </div>
  );
};
