import { ColorEnum } from '../enums/ColorEnum';
import { ThemeEnum } from '../enums/ThemeEnum';
import { ViewSizeEnum } from '../enums/ViewSizeEnum';

export interface MainContextType {
  viewSize: ViewSizeEnum | undefined;
  theme: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
  color: ColorEnum;
  setColor?: (color: ColorEnum) => void;
}
