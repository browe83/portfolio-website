import React from 'react';
// import { projects } from '../../src/data.json';
import { projects } from '../data';
// import '../css/work.css';

function Work (props) {
  return (
    <>
      <div className='work'>
        <div className='projects-overview'>
          <h1>My Projects</h1>
          <p>
            Below you'll find a compilation of my projects.  
            I created each using vanilla JavaScript, VSCode, and GitHub.
            At present, the CSS and HTML are outsourced. Although, I am currently in the
            process of refactoring projects using ReactJS and my own custom CSS and HMTL. 
          </p>
        </div>
      </div>
    <div className='projects'>
      {projects.map((project, index) => (
        <a href={`/work/${project.id}`}>
          <div className='project-card'>
            <div className='project-img' style={{backgroundImage: `url(${project.images[0]})`, backgroundSize: 'cover'}}>
            </div>
            <div className='project-title'>
              <h2>{project.project_name}</h2>
            </div>
          </div>
        </a>
      ))}
    </div>
    </>
  )


}


export default Work;


  // return (
  //   <>
  //     <h2 id='chile'>
  //       Valparaiso, Chile
  //     </h2>
  //     <div className='work'>
  //       <div className='projects-overview'>
  //         <h1>My Projects</h1>
  //         <p>
  //           Below you'll find a compilation of my projects.  
  //           Each was created using vanilla JavaScript, VSCode, and GitHub.
  //           At present, the CSS and HTML are outsourced; although, I am currently in the
  //           process of refactoring projects using ReactJS and my own CSS and HMTL. 
  //         </p>
  //       </div>
  //     </div>
  //     <div className='projects'>
  //       {projects.map((project, index) => (
  //               <div className='project' key={index}>
  //                 <a href={`/work/${project.id}`}>
  //                   <h2>{project.project_name}</h2>
  //                   <img src={project.images[0]} alt='project pic'></img>
  //                 </a>
  //               </div>
  //             ))}
  //     </div>
  //   </>
  // )