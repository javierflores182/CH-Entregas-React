import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


export const NavBar= () => {
    return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="#home">JaviShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Electronics">Electronics</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Office Equipment">Office Equipment</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Furniture">Furniture</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Kitchen Appliances">Kitchen Appliances</Nav.Link>
          </Nav>
        <CartWidget/> 
        </Container>
      </Navbar>

    
    </>
    );
};