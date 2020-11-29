import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";

function Layout(): JSX.Element {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            {/* <Nav.Link href="/jugadores">Jugadores</Nav.Link> */}
            <NavDropdown title="Proyectos" id="basic-nav-dropdown">
              <Dropdown.Header>Fácil</Dropdown.Header>
              <NavDropdown.Item href="proyectos/uno">
                1. Four Card Feature Section
              </NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>

              <Dropdown.Header>Medio</Dropdown.Header>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />

              <Dropdown.Header>Difícil</Dropdown.Header>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Layout;
