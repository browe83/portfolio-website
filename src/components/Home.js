import React from 'react';
import Profile from '../images/Profile_Pic.jpg';

function Home (props) {
  
  return (
    <>
      <div className='flex' id='home'>
        {/* <img src={Profile} alt='profile pic'></img>
        <h1>home</h1> */}
       
      </div>
      {/* <div className='overlay'></div>     */}
      <div className='shade'>
        <div  id='welcome'>
          <h1>WELCOME!</h1>
          <p>
            Thank you for visiting my site.  It was created using ReactJS, 
            VSCode, GitHub, and my own customized CSS.  
            Click the link below to view the source code.
          </p>
          <a href='https://github.com/browe83/portfolio-website'><button>GitHub Repo</button></a>
        </div>
      </div>
    </>
  )
}

export default Home;
