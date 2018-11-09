import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import AddMovie from "../movies/AddMovie";

const AppNavbar = () => {
  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="https://shlommi.github.io/deployedassignment/">
          Herolo Cinema
        </NavbarBrand>
        <Nav className="ml-5" navbar>
          <NavItem>
            <NavLink>
              <AddMovie />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default AppNavbar;
