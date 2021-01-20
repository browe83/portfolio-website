import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function NavBar(props) {
  const { pathname } = props.location;
  
  return (
    <div id='navContainer'>
      <div id='navbar'>
        {pathname !== '/' && <Link to='/' className='link' >HOME</Link>}
        {pathname !== '/about' && <Link to='/about' className='link' >ABOUT</Link>}
        {pathname !== '/work' && <Link to='/work' className='link' >WORK</Link>}
        {pathname !== '/contact' && <Link to='/contact' className='link' >CONTACT</Link>}
      </div>
    </div>
  )
}

export default withRouter(NavBar);
