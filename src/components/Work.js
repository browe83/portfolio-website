import React from 'react';
import { projects } from '../data';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function Work (props) {
  return (
    <>
      <div className='work'>
        <div className='projects-overview'>
          <h1>My Projects</h1>
          <p>
            The projects below are from my Full Stack JavaScript Treehouse Techdegree.  
            Click <a href='https://www.credential.net/d9882913-52a6-4f15-8485-c5387a836a81#gs.sptjqe'>here</a> to view my certification.
          </p>
        </div>
      </div>
      <div className='projects'>
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={index}>
            <div className='project-card'>
              <div className='project-img' style={{backgroundImage: `url(${project.images[0]})`, backgroundSize: 'cover'}}>
              </div>
              <div className='project-title'>
                <h2>{project.project_name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}


export default withRouter(Work);


