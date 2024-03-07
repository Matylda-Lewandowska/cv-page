import React from 'react';
import './colorOptionsMenu.scss';
import cn from 'classnames';
import { useMainContext } from '../../context/MainContext';
import { ColorChoosingButton } from '../ColorChoosingButton/ColorChoosingButton';
import { ColorEnum } from '../../enums/ColorEnum';
import { ThemeEnum } from '../../enums/ThemeEnum';

type ColorOptionsMenuProps = {
  opened: boolean
}

export const ColorOptionsMenu: React.FC<ColorOptionsMenuProps> = ({ opened }) => {
  const { theme, color } = useMainContext();

  return (
    <div className={cn('color-menu border-radius1 border-s-solid',
      `box-shadow-${color}-${theme} border-${color}-main bg-${theme}-main`, {
        hidden: !opened,
        open: opened
      }
    )}>
      <div className='cb-group'>
        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ThemeEnum.LIGHT} disable={!opened} />
          <ColorChoosingButton colored={ThemeEnum.DARK} disable={!opened} />
        </div>

        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ColorEnum.BLUE} disable={!opened} />
          <ColorChoosingButton colored={ColorEnum.PURPLE} disable={!opened} />
        </div>

        <div className='cb-group__two-buttons'>
          <ColorChoosingButton colored={ColorEnum.ORANGE} disable={!opened} />
          <ColorChoosingButton colored={ColorEnum.RED} disable={!opened} />
        </div>
      </div>

    </div>
  );
};
