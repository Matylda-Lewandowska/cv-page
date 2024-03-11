import React from 'react';
import { ButtonLinkMenuType } from '../../../types/ButtonLinkMenuType';
import './buttonLinkMenu.scss';
import cn from 'classnames';
import { ThemeEnum } from '../../../enums/ThemeEnum';
import { ColorEnum } from '../../../enums/ColorEnum';
import { useMainContext } from '../../../context/MainContext';

type ButtonLinkMenuProps = {
  info: ButtonLinkMenuType
}

export const ButtonLinkMenu: React.FC<ButtonLinkMenuProps> = ({ info }) => {
  const { theme, color } = useMainContext();

  return (
    <a
      href={info.link}
      className='no-decoration flex-centered w100 oxanium-regular-400'
    >
      <div
        className={cn('button-options border-s-solid border-radius1 padding08 min-w5 w100 flex-centered flex-align-center', {
          'bg-LT-main--hover': theme === ThemeEnum.LIGHT,
          'bg-DT-main--hover': theme === ThemeEnum.DARK,
          'blue-border-LT-main--hover blue-LT-main--hover box-shadow-blue-LT--hover': theme === ThemeEnum.LIGHT && color === ColorEnum.BLUE,
          'blue-border-DT-main--hover blue-DT-light--hover box-shadow-blue-DT--hover': theme === ThemeEnum.DARK && color === ColorEnum.BLUE,
          'purple-border-LT-main--hover purple-LT-main--hover box-shadow-purple-LT--hover': theme === ThemeEnum.LIGHT && color === ColorEnum.PURPLE,
          'purple-border-DT-main--hover purple-DT-light--hover box-shadow-purple-DT--hover': theme === ThemeEnum.DARK && color === ColorEnum.PURPLE,
          'orange-border-LT-main--hover orange-LT-main--hover box-shadow-orange-LT--hover': theme === ThemeEnum.LIGHT && color === ColorEnum.ORANGE,
          'orange-border-DT-main--hover orange-DT-main--hover box-shadow-orange-DT--hover': theme === ThemeEnum.DARK && color === ColorEnum.ORANGE,
          'red-border-LT-main--hover red-LT-main--hover box-shadow-red-LT--hover': theme === ThemeEnum.LIGHT && color === ColorEnum.RED,
          'red-border-DT-main--hover red-DT-main--hover box-shadow-red-DT--hover': theme === ThemeEnum.DARK && color === ColorEnum.RED
        }
        )}
      >
        {info.title}
      </div>
    </a>
  );
};
