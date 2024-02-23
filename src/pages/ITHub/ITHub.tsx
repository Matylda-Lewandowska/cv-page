import React from 'react';
import { DefaultLayout } from '../../layouts/DefaultLayout/DefaultLayout';

export const ITHub = () => {
  return (
    <DefaultLayout>
      <div>ITHub</div>
      <div> summary </div>
      <div> get know my
        <a href='http://localhost:3000/#/it/tech-stack'>
        tech-stack
        </a>
      </div>
      <div> section: my latest projects +
        <a href='http://localhost:3000/#/it/projects'>
        link to more projects
        </a>
      </div>
      <div> section: my ongoing projects?...</div>
      <div> section: my favourite implemented
        <a href='http://localhost:3000/#/it/functions'>
        function + more
        </a>
      </div>

    </DefaultLayout>
  );
};
