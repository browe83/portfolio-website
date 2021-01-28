import React from 'react';
import avatar from '../images/selfie-mtb.jpg';
function Home (props) {
  
  const avatarStyles = {
    backgroundImage: `url(${avatar})`, 
    backgroundSize: 'cover',
  }
  return (
    <>
      <div className='flex' id='home'>
      </div>
      <div className='flex shade'>
        <div className='avatar' style={avatarStyles}>
        </div>
        <div  id='welcome'>
          <h1>WELCOME</h1>
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
