import React from 'react'
import { Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'

export const Header = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={require('../imgs/monterola-realty-logo1.png')} alt='monterola realty' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Find More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/forsale">For Sale</NavDropdown.Item>
              <NavDropdown.Item href="/forrent">
                For Rent
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projectselling">
                Project Selling
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}
