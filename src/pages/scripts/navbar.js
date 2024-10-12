import React from 'react';
import {NavDropdown,NavItem,Container,NavLink,ListGroup,ListGroupItem,Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import Scroll from 'react-scroll';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import  {Link} from 'react-scroll';
const ScrollLink = Scroll.ScrollLink
//<NavLink activeClass="active" href="/#/approach">Approach & Model</NavLink>
const Topbar= () =>{
  return (
  <div>
    <Navbar id="navbar-main" smooth expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      
    <Container>
      <NavbarBrand href='/CV_2024_fall_project'>Computer Vision Project Proposal Fall 2024 -Virginia Tech</NavbarBrand>
      <NavbarToggle aria-controls='basic-navbar-nav' />
      <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
        <NavLink activeClass="active" spy={true} smooth={true} active={true} to="PS" duration={500}>Problem System</NavLink>
        <NavLink activeClass="active" spy={true} smooth={true} active={true} to="model" duration={500}>Approach & Model</NavLink>
        <NavLink activeClass="active" spy={true} smooth={true}  active={true} to="exp" duration={500}>Experimental Plan</NavLink>
        <NavLink activeClass="active" spy={true} smooth={true} active={true} to="success" duration={500}>Success Definition</NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
    </Navbar>
  </div>
  );
}
export default Topbar;