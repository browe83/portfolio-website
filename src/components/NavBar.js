import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function NavBar(props) {
  const { pathname } = props.location;
  
  return (
    <div id='navContainer'>
      <div id='navbar'>
        {pathname !== '/' && <Link to='/' className='link' >Home</Link>}
        {pathname !== '/about' && <Link to='/about' className='link' >About</Link>}
        {pathname !== '/work' && <Link to='/work' className='link' >Work</Link>}
        {pathname !== '/contact' && <Link to='/contact' className='link' >Contact</Link>}
      </div>
    </div>
  )
}

export default withRouter(NavBar);
