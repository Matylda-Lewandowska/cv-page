import React, { useState } from 'react';
import { ButtonTechStackType } from '../../types/ButtonTechStackType';
import { ButtonTeckStack } from '../utils/ButtonTechStack/ButtonTechStack';

type TechStackSelectorProps = {
techStacks: ButtonTechStackType[],
}

export const TechStackSelector: React.FC<TechStackSelectorProps> = ({ techStacks }) => {
  const [selectedTechStacks, setSelectedTechStack] = useState<ButtonTechStackType[]>([]);

  const handleOnClick = (clicked: ButtonTechStackType) => {
    if (selectedTechStacks.some((selectedTechStack) => selectedTechStack === clicked)) {
      setSelectedTechStack((prev) => {
        return [...prev.filter((p) => p !== clicked)];
      });
    } else {
      setSelectedTechStack((prev) => {
        return [...prev, clicked];
      });
    }
  };

  return (
    <>
      <div>TechStackSelector</div>
      <section>
        {techStacks.map((techStack) => {
          return (
            <ButtonTeckStack techStack={techStack} handleOnClick={handleOnClick} />
          );
        })}
      </section>
    </>
  );
};
