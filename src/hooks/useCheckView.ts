import { useEffect, useState } from 'react';
import { ViewSizeEnum } from '../enums/ViewSizeEnum';

export const useCheckView = () => {
  const [view, setView] = useState<ViewSizeEnum>(ViewSizeEnum.DESKTOP);

  const MOBILE_WIDTH = 768;
  const TABLET_WIDTH = 1024;

  const getViewSize = (): ViewSizeEnum => {
    const width = window.innerWidth;
    if (width < MOBILE_WIDTH) return ViewSizeEnum.MOBILE;
    else if (width >= MOBILE_WIDTH && width < TABLET_WIDTH) return ViewSizeEnum.TABLET;
    else return ViewSizeEnum.DESKTOP;
  };

  useEffect(() => {
    const handleResize = () => {
      setView(getViewSize());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    view,
    setView,
    MOBILE_WIDTH,
    TABLET_WIDTH
  };
};
