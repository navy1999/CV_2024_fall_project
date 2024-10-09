import React from 'react';
import {NavDropdown,NavItem,Container,NavLink,ListGroup,ListGroupItem,Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import Scroll from 'react-scroll';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const ScrollLink = Scroll.ScrollLink
const Topbar= () =>{
  return (
  <div>
    <Navbar id="navbar-main" smooth expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <NavbarBrand href='/'>Computer Vision Project Proposal Fall 2024 -Virginia Tech</NavbarBrand>
      <NavbarToggle aria-controls='basic-navbar-nav' />
      <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavLink activeClass="active" href="/#/model">Approach & Model</NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
    </Navbar>
  </div>
  );
}
export default Topbar;