import React from 'react';

function Footer (props) {
  
  return (
    <div className='footer'>
      <p>
        I created this site using ReactJS, 
        VSCode, GitHub, and my own customized HTML and CSS.  
        Click the link to view the source code.
      </p>
      <a href='https://github.com/browe83/portfolio-website' rel="noopener noreferrer" target='_blank'><button>GitHub Repo</button></a>
    </div>
  )
}

export default Footer;
