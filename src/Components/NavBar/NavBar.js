/** @jsxImportSource theme-ui */
import {useColorMode } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar =() => {

  const [colorMode,setColorMode] = useColorMode();
  const handleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
    sessionStorage.setItem('theme', colorMode === 'light' ? 'dark' : 'light')
  } 
  const [open,setOpen]=useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = colorMode === 'light' ? 'white' : 'black';
    document.body.style.color = colorMode === 'light' ? 'black' : 'white';
  }, [colorMode])
  return (
    <div>
        <nav>
            <div className="logo">Nav</div>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
            <Nav.Link as={ Link } to="/" eventKey={0}>Home</Nav.Link>
            <Nav.Link as={ Link } to="/download" eventKey={1}>Download</Nav.Link>
            <Nav.Link as={ Link } to="/get-trials" eventKey={2}>Get-Trials</Nav.Link>
            <Nav.Link as={ Link } to="/documentation" eventKey={3}>Documentation</Nav.Link>
            <Nav.Link as={ Link } to="/about" eventKey={4}>About</Nav.Link>

            <button className='toggle' onClick={handleColorMode} sx={{backgroundColor: 'primary' , color: 'InverseText', border: 0}}> {colorMode === 'light' ? '🌑' : '☀️'} </button>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
        </nav>
    </div>
  );
}

export default NavBar;