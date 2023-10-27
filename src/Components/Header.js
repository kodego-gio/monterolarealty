import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar} from 'react-bootstrap'

export const Header = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Monterola Realty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Find More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">For Sale</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                For Rent
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">For Closure</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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
