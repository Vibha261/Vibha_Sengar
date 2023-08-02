import React from 'react'
import {Navbar, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand} from 'reactstrap';
import White from '../../Assest/Logo/White.png';
import './Navigator.css';
import {Home} from '../Home/Home'

function Navigator() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className='navigation'>
        <Navbar light expand="md" fixed="top" className="lets" variant="dark">
          <NavbarBrand to="/">
              <img className="logo" src={White} alt='Logo'/>
          </NavbarBrand>
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar>
             <Nav className='lets-right' navbar>
                <NavLink href='#MainPage' className='link'>Home</NavLink>
                <NavLink href="#About" className='link'>About</NavLink>
                <NavLink href="#Skills" className='link'>Skills</NavLink>
                <NavLink href="#Project" className='link'>Projects</NavLink>
                <NavLink href="#Contact" className='link'>Contact</NavLink>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navigator

