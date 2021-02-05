import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

function Project (props) {
  
  const { id } = useParams();
  const project = projects[id];
 
  return (
    <>
      <div className='project-banner'>
        <div id='overview'>
          <h1>{project.project_name}</h1>
          <div className='project-links'>
            <a href={project.live_link} rel="noopener noreferrer" target='_blank'><button>Live Demo</button></a>
            <a href={project.github_link} rel="noopener noreferrer" target='_blank'><button>GitHub Repo</button></a>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
      <div className='images-container'>
        {  project.images.length === 3 ?
          <>
              <div className='image-wrapper'>
                <img src={project.images[1]} alt='project pic' ></img>
              </div>
              <div className='image-wrapper'>
                <img src={project.images[2]} alt='project pic' ></img>
              </div>
          </>
            :
          <>
              <div className='image-wrapper'>
                <img src={project.images[0]} alt='project pic' ></img>
              </div>
              <div className='image-wrapper'>
                <img src={project.images[1]} alt='project pic' ></img>
              </div>
          </>
        }
      </div> 
    </>
  )
}

export default Project;
