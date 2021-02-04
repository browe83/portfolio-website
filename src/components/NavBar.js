import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function NavBar(props) {
  const { pathname } = props.location;
  
  return (
    <div id='navContainer'>
      <div id='navbar'>
        <Link to='/' className={'link ' + (pathname === '/' ? 'active' : '')} >HOME</Link>
        <Link to='/about' className={'link ' + (pathname === '/about' ? 'active' : '')} >ABOUT</Link>
        <Link to='/projects' className={'link ' + (pathname === '/work' ? 'active' : '')} >PROJECTS</Link>
      </div>
    </div>
  )
}

export default withRouter(NavBar);
