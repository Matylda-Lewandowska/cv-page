import React from 'react';
import { TwoSidesScreen } from '../TwoSidesScreen/TwoSidesScreen';
import { ProjectCardType } from '../../types/ProjectCardType';

type ProjectCardProps = {
  props: ProjectCardType
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ props }) => {
  return (
    <>
      <div>ProjectCard</div>
      <div>{props.title}</div>
      <div>tech-stack here</div>
      <TwoSidesScreen titleLeft={'DEMO'} titleRight={'CODE'} />
    </>
  );
};
