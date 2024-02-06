import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "rgb(31, 115, 205)" }}
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          style={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "white",
          }}
        >
          CosmoBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Aggiungi la classe ms-auto qui */}
            <Nav.Link
              href="#"
              style={{
                fontSize: "18px",
                fontFamily: "Arial, sans-serif",
                color: "white",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{
                fontSize: "18px",
                fontFamily: "Arial, sans-serif",
                color: "white",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{
                fontSize: "18px",
                fontFamily: "Arial, sans-serif",
                color: "white",
              }}
            >
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
