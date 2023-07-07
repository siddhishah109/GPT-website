import { HashLink } from 'react-router-hash-link';
import './NavBarr.css';
import { useState } from 'react';

const NavBar =() => {
const [open, setOpen] = useState(false)
  return (
    <div>
        <nav className='sticky'>
            <div className="logo">Suraksha</div>
            <ul className="nav-links" onClick={() => setOpen(!open)} style={{transform: open ? "translateX(0px)" : ""}}>
            <HashLink  to="#home" eventKey={0}>Home</HashLink>
            <HashLink  to="#download" eventKey={1}>Download</HashLink>
            <HashLink  to="#about" eventKey={2}>Contact Us</HashLink>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
        </nav>
    </div>
  );
}

export default NavBar;