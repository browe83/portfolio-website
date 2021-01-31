import React from 'react';
// import '../css/project.css';
// import '../css/overlay.css';
import { useParams } from 'react-router-dom';
import { projects } from '../data';
import test from '../images/Project_1_Img_1.png';

function Project (props) {
  const { id } = useParams();
  const project = projects[id];
  const imageStyles = {
    backgroundImage: `url(${project.images[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: `top`,
    // overflow: 'scroll',
  }
  return (
    <>
      <div className='project-links'>
        <a href={project.live_link}><button>Live Demo</button></a>
          <a href={project.github_link}><button>GitHub Repo</button></a>
      </div>
      <div className='project-banner'>
        <div id='overview'>
          <h1>{project.project_name}</h1>
          <p>{project.description}</p>
          {/* <a href={project.live_link}><button>Live Demo</button></a>
          <a href={project.github_link}><button>GitHub Repo</button></a> */}
        </div>
      </div>
      <div className='images-container'>
        {  project.images.length === 3 ?
          <>
              <div className='image-wrapper'>
                <div className='image'></div>
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
    // <>
    //   <div id='project'>
    //     <div id='overview'>
    //       <h1>{project.project_name}</h1>
    //       <p>{project.description}</p>
    //       <a href={project.live_link}><button>Live Demo</button></a>
    //       <a href={project.github_link}><button>GitHub Repo</button></a>
    //     </div>
    //     <div className='flex' id='images-container'>
    //       {
    //         project.images.length === 3 ?
    //           <>
    //             <div id='image-wrapper' >
    //               <img src={project.images[1]} alt='project pic' ></img>
    //             </div>
    //             <div id='image-wrapper' >
    //               <img src={project.images[2]} alt='project pic' ></img>
    //             </div>
    //           </>
    //           :
    //           <>
    //             <div id='image-wrapper' >
    //               <img src={project.images[0]} alt='project pic' ></img>
    //             </div>
    //             <div id='image-wrapper' >
    //               <img src={project.images[1]} alt='project pic' ></img>
    //             </div>
    //           </>
    //       }
    //     </div>
    // </div>
    // <div id='side-banner'></div>
    // </>
     
  )
}

export default Project;
