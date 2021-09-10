import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <article className="post" id="projects">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
