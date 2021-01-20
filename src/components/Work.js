import React from 'react';
// import { projects } from '../../src/data.json';
import { projects } from '../data';


function Work (props) {
  return (
    <>
      <div className='work'>
        <h1>Cool quote about coding/creativity</h1>
        <h3>--by somebody really cool</h3>
      </div>
      {/* <div className='overlay'></div> */}
      <div className='projects'>
        {projects.map((project, index) => (
                <div class='project' key={index}>
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
