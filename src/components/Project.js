import React from 'react';
// import '../css/project.css';
// import '../css/overlay.css';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

console.log('projects:', projects);

function Project (props) {
  const { id } = useParams();
  const project = projects[id];

  return (
    <>
      <div id='project'>
        <div id='overview'>
          <h1>{project.project_name}</h1>
          <p>{project.description}</p>
          <a href={project.live_link}><button>Live Demo</button></a>
          <a href={project.github_link}><button>GitHub Repo</button></a>
        </div>
        <div className='flex' id='images-container'>
          {
            project.images.length === 3 ?
              <>
                <div id='image-wrapper' >
                  <img src={project.images[1]} alt='project pic' ></img>
                </div>
                <div id='image-wrapper' >
                  <img src={project.images[2]} alt='project pic' ></img>
                </div>
              </>
              :
              <>
                <div id='image-wrapper' >
                  <img src={project.images[0]} alt='project pic' ></img>
                </div>
                <div id='image-wrapper' >
                  <img src={project.images[1]} alt='project pic' ></img>
                </div>
              </>
          }
        </div>
    </div>
    <div id='side-banner'></div>

    </>
      // <div id='project' >
      //   <div id='overview'>
      //     {/* <div className='desc flex'>
      //       <h1>{project.project_name}</h1>
      //       <p>{project.description}</p>
      //     </div> */}
      //     <div className='flex tech'>
      //       {/* <h3>TECHNOLOGIES</h3>
      //       <ul>
      //         {project.technologies.map((tech, index) => (
      //           <li key={index}>{tech}</li>
      //         ))}
      //       </ul> */}
      //       {/* <div id='anchor-container'>
      //         <a href={project.live_link}><button>Live Demo</button></a>
      //         <a href={project.github_link}><button>GitHub Repo</button></a>
      //       </div>*/}
      //     </div> 
      //   </div>
      //   <div id='images-container'>
      //     <div className='desc flex'>
      //       <h1>{project.project_name}</h1>
      //       <p>{project.description}</p>
      //     </div>
      //      <div id='anchor-container'>
      //         <a href={project.live_link}><button>Live Demo</button></a>
      //         <a href={project.github_link}><button>GitHub Repo</button></a>
      //       </div>
      //     </div>
      //     {
      //     project.images.length === 3 ?
      //       <>
      //         <div id='image-wrapper' >
      //           <img src={project.images[1]} alt='project pic' ></img>
      //         </div>
      //         <div id='image-wrapper' >
      //           <img src={project.images[2]} alt='project pic' ></img>
      //         </div>
      //       </>
      //       :
      //       <>
      //         <div id='image-wrapper' >
      //           <img src={project.images[0]} alt='project pic' ></img>
      //         </div>
      //         <div id='image-wrapper' >
      //           <img src={project.images[1]} alt='project pic' ></img>
      //         </div>
      //     </>
      //     }
       

      // </div>    
  )
}

export default Project;
