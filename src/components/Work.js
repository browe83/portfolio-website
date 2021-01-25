import React from 'react';
// import { projects } from '../../src/data.json';
import { projects } from '../data';
// import '../css/work.css';

function Work (props) {
  return (
    <>
      <div className='work'>
        <h2>Below you'll find a compilation of my projects.  
          Each was created using vanilla JavaScript, VSCode, and GitHub.
          At present, the CSS and HTML were outsourced; although, I am currently in the
          process of refactoring projects using ReactJS and my own CSS and HMTL. </h2>
        {/* <h3>--by somebody really cool</h3> */}
      </div>
      {/* <div className='overlay'></div> */}
      <div className='projects'>
        {projects.map((project, index) => (
                <div className='project' key={index}>
                  <a href={`/work/${project.id}`}>
                    <h2>{project.project_name}</h2>
                    <img src={project.images[0]} alt='project pic'></img>
                  </a>
                </div>
              ))}
      </div>
    </>
  )
}


export default Work;
