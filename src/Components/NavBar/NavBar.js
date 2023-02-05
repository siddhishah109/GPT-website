/** @jsxImportSource theme-ui */
import {useColorMode } from 'theme-ui';
import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBar =() => {

  const [colorMode,setColorMode] = useColorMode();
  const [open,setOpen]=useState(false);
  return (
    <div>
        <nav>
            <div className="logo">Nav</div>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
            <Nav.Link to="/" eventKey={0}>Home</Nav.Link>
            <Nav.Link to="/download" eventKey={1}>Download</Nav.Link>
            <Nav.Link to="/get-trials" eventKey={2}>Get-Trials</Nav.Link>
            <Nav.Link to="/documentation" eventKey={3}>Documentation</Nav.Link>
            <Nav.Link to="/about" eventKey={4}>About</Nav.Link>

            <button className='toggle' onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} sx={{backgroundColor: 'primary' , color: 'InverseText'}}> {colorMode === 'light' ? '🌑' : '☀️'} </button>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
        </nav>
    </div>
  );
}

export default NavBar;