import React from 'react';

function Home (props) {
  
  return (
    <>
      <div className='flex' id='home'>
        <h2>Patagonia, Argentina</h2>
      </div>
      <div className='shade'>
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
