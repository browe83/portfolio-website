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
            I'm Brandon Rowe. Thank you for visiting my site.  
            I'm a career-transitioning educator seeking a junior web development position.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;
