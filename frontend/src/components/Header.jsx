import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <NavbarBrand href="/">ProShop</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/cart">
                <FaShoppingCart>Cart</FaShoppingCart>
              </NavLink>
              <NavLink href="/login">
                <FaUser>Sign In</FaUser>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
