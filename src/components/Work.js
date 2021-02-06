import React from 'react';
import { projects } from '../data';

function Work (props) {
  return (
    <>
      <div className='work'>
        <div className='projects-overview'>
          <h1>My Projects</h1>
          <p>
            The projects below are from my Treehouse Techdegree.  
            Click <a href='https://www.credential.net/d9882913-52a6-4f15-8485-c5387a836a81#gs.sptjqe'>here</a> to view my certification.
            In addition to JavaScript, I created each project using VSCode and Github.  
          </p>
        </div>
      </div>
      <div className='projects'>
        {projects.map((project, index) => (
          <a href={`/project/${project.id}`} key={index}>
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