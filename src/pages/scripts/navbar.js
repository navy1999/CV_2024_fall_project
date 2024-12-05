import React from 'react';
import {NavDropdown,NavItem,Container,NavLink,ListGroup,ListGroupItem,Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import Scroll from 'react-scroll';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
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
        <LinkScroll className="nav-link" activeClass='active' spy={true} smooth={true} active={true} to="PS" duration={500}>Problem Statement</LinkScroll>
        <LinkScroll className="nav-link" activeClass="active" spy={true} smooth={true} active={true} to="model" duration={500}>Approach & Model</LinkScroll>
        <LinkScroll className="nav-link" activeClass="active" spy={true} smooth={true}  active={true} to="exp" duration={500}>Experimental Plan</LinkScroll>
        <LinkScroll className="nav-link" activeClass="active" spy={true} smooth={true} active={true} to="success" duration={500}>Success Definition</LinkScroll>
        <LinkScroll className="nav-link" activeClass="active" spy={true} smooth={true} active={true} to="project" duration={500}>Code</LinkScroll>
        <LinkScroll className="nav-link" activeClass="active" spy={true} smooth={true} active={true} to="project" duration={500}>Figures & Tables</LinkScroll>
        </Nav>
      </NavbarCollapse>
    </Container>
    </Navbar>
  </div>
  );
}
export default Topbar;