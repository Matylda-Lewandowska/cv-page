import React from 'react';
import { ButtonTechStackType } from '../../../types/ButtonTechStackType';

type ButtonTeckStackProps = {
  prop: ButtonTechStackType,
  ver: 'project' | 'about'
}

export const ButtonTeckStack: React.FC<ButtonTeckStackProps> = ({ prop }) => {
  return (
    <>
      <div>ButtonTeckStack</div>
      <div>{prop.id}</div>
      <div>{prop.icon}</div>
      <div>{prop.description}</div>
      <div>{prop.link}</div>
      <div>{prop.name}</div>
    </>
  );
};
