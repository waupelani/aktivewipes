import React from 'react';
import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main>
    <article className="post markdown" id="about">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Index;
