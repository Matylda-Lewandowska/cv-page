import React from 'react';
import { ColorEnum } from '../../enums/ColorEnum';
import { ThemeEnum } from '../../enums/ThemeEnum';
import './colorChoosingButton.scss';
import { useMainContext } from '../../context/MainContext';
import cn from 'classnames';

type ColorChoosingButtonProp = {
  colored: ColorEnum | ThemeEnum,
  disable: boolean,
}

export const ColorChoosingButton: React.FC<ColorChoosingButtonProp> = ({ colored, disable }) => {
  const { theme, color, setColor, setTheme } = useMainContext();

  const handleColorChange = () => {
    if ((colored === ColorEnum.BLUE ||
      colored === ColorEnum.PURPLE ||
      colored === ColorEnum.ORANGE ||
      colored === ColorEnum.RED) && setColor) {
      setColor(colored);
    }
    if ((colored === ThemeEnum.DARK ||
      colored === ThemeEnum.LIGHT) && setTheme) {
      setTheme(colored);
    }
  };

  return (
    <button className={cn(`color-button border-radius05 border-s-solid bg-${colored}-LT-main--hover`, {
      'blue-border-LT-dark--hover blue-LT-dark--hover': theme === ThemeEnum.LIGHT && colored === ColorEnum.BLUE,
      'border-blue-light blue-LT-light--hover': theme === ThemeEnum.DARK && colored === ColorEnum.BLUE,
      'purple-border-LT-dark--hover purple-LT-dark--hover': theme === ThemeEnum.LIGHT && colored === ColorEnum.PURPLE,
      'border-purple-light purple-LT-light--hover': theme === ThemeEnum.DARK && colored === ColorEnum.PURPLE,
      'orange-border-LT-dark--hover orange-LT-dark--hover': theme === ThemeEnum.LIGHT && colored === ColorEnum.ORANGE,
      'border-orange-light orange-LT-light--hover': theme === ThemeEnum.DARK && colored === ColorEnum.ORANGE,
      'red-border-LT-dark--hover red-LT-dark--hover': theme === ThemeEnum.LIGHT && colored === ColorEnum.RED,
      'border-red-light red-LT-light--hover': theme === ThemeEnum.DARK && colored === ColorEnum.RED,
      'bg-LT-main--hover border-LT-light LT-medium': theme === ThemeEnum.DARK && colored === ThemeEnum.LIGHT,
      'bg-LT-main--hover border-LT-lighter--hover LT-medium': theme === ThemeEnum.LIGHT && colored === ThemeEnum.LIGHT,
      'bg-DT-lighter--hover border-DT-medium DT-light': theme === ThemeEnum.DARK && colored === ThemeEnum.DARK,
      'bg-DT-lighter--hover border-DT-dark--hover DT-light': theme === ThemeEnum.LIGHT && colored === ThemeEnum.DARK
    })}
    onClick={() => handleColorChange()}
    disabled={disable}
    >
      {(theme === colored || color === colored) && <div className='icon-ok'></div>}</button>
  );
};
