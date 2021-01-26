import React from 'react';
import climbing from '../images/mtclimb.jpg';
import students from '../images/students.jpg';
import selfie from '../images/Profile_Pic.jpg';
import outlook from '../images/outlook.jpg';

function About (props) {
  return (
    <div className='wrapper'>
      {/* <div className='grid-wrapper'> */}
        <div  className='grid'>
          <div  id='students' className='img-wrapper'>
            <img src={students} alt='about-pic'></img>
          </div>
          <div id='climbing'  className='img-wrapper'>
            <img src={climbing} alt='about-pic'></img>
          </div>
          <div  id='selfie' className='img-wrapper'>
            <img src={selfie} alt='about-pic'></img>
          </div>
          <div id='outlook' className='img-wrapper'>
            <img src={outlook} alt='about-pic'></img>
          </div>
        </div>
      {/* </div> */}
      <div id='shade'>
        <div id='about'>
          <h2>ABOUT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas. 
            Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.
            Ultrices sagittis orci a scelerisque purus semper. Orci nulla pellentesque dignissim 
            enim sit amet venenatis urna cursus. Dolor sit amet consectetur adipiscing elit ut aliquam purus
            sit. 
          </p>
          <p>
            Convallis convallis tellus id interdum velit laoreet id. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique. Curabitur vitae nunc sed velit dignissim sodales ut eu. 
            Faucibus interdum posuere lorem ipsum dolor sit. Elementum pulvinar etiam non quam. Iaculis urna id volutpat
            lacus. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Enim sed faucibus turpis
            in. Tincidunt tortor aliquam nulla facilisi cras. Pretium nibh ipsum
            consequat nisl vel pretium. A iaculis at erat pellentesque adipiscing commodo
            elit at imperdiet.
          </p>
          <a href='#'><button>Gmail</button></a>
          <a href='#'><button>GitHub</button></a>
          <a href='#'><button>LinkedIn</button></a>
        </div>
      </div>
    </div>
  )
}

export default About;
