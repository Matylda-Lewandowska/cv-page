import React from 'react';
import { ButtonTechStackType } from '../../../types/ButtonTechStackType';

type ButtonTeckStackProps = {
  techStack: ButtonTechStackType,
  handleOnClick: (techStack: ButtonTechStackType) => void,
}

export const ButtonTeckStack: React.FC<ButtonTeckStackProps> = ({ techStack, handleOnClick }) => {
  return (
    <button
      onClick={() => handleOnClick(techStack)}
    >
      <div>{techStack.icon}</div>
      <div>{techStack.name}</div>
    </button>
  );
};
