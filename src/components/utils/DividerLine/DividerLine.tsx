import React from 'react';
import cn from 'classnames';
import { useMainContext } from '../../../context/MainContext';

type DividerLineProps = {
  weight: number // 1-5
}

export const DividerLine: React.FC<DividerLineProps> = ({ weight }) => {
  const { theme, color } = useMainContext();

  return (
    <div
      className={cn('transition-all divider w100 flex-centered border-s-solid border-radius05',
        `box-shadow-${color}-${theme} border-${color}-medium border-w${weight}`
      )}
    >
    </div>
  );
};
