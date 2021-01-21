import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

console.log('projects:', projects);

function Project (props) {
  const { id } = useParams();
  const project = projects[id];

  return (
      <div id='project'>
        <div id='overview'>
          <div>
            <h1>{project.project_name}</h1>
            <p>{project.description}</p>
          </div>
          <div>
            <h3>TECHNOLOGIES</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a href={project.live_link}>Live Demo</a>
            <a href={project.github_link}>GitHub Repo</a>
          </div>
        </div>
        <div id='images'>
          {project.images.map((image, index) => (
            <img src={image} alt='project pic' key={index}></img>
          ))}
        </div>
      </div>    
  )
}

export default Project;
