import React, { useState } from 'react';
import { ButtonTechStackType } from '../../types/ButtonTechStackType';
import { ButtonTeckStack } from '../utils/ButtonTechStack/ButtonTechStack';

type TechStackSegmentProps = {
techStacks: ButtonTechStackType[],
}

export const TechStackSegment: React.FC<TechStackSegmentProps> = ({ techStacks }) => {
  const [chosenTechStack, setChosenTechStack] = useState<ButtonTechStackType | null>(null);

  const handleOnClick = (clicked: ButtonTechStackType) => {
    if (chosenTechStack !== null && chosenTechStack === clicked) {
      setChosenTechStack(null);
    } else {
      setChosenTechStack(clicked);
    }
  };

  return (
    <>
      <div>TechStackSegment</div>
      <section>
        {techStacks.map((techStack) => {
          return (
            <ButtonTeckStack techStack={techStack} handleOnClick={handleOnClick} />
          );
        })}
      </section>
      <section>
        {chosenTechStack && (
          <div>
            <div>{chosenTechStack.icon}</div>
            <div>{chosenTechStack.name}</div>
            <div>{chosenTechStack.description}</div>
            <div>
            Learn more about this technology...
              <a href={chosenTechStack.link}>
                LINK
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
