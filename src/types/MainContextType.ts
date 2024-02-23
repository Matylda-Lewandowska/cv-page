import { ViewSizeEnum } from '../enums/ViewSizeEnum';

export interface MainContextType {
  viewSize: ViewSizeEnum | undefined;
  theme: string;
}
