import { useState } from 'react';
import { ColorEnum } from '../enums/ColorEnum';

export const useColorChange = () => {
  const [color, setColor] = useState<ColorEnum>(ColorEnum.ORANGE);

  return {
    color,
    setColor
  };
};
