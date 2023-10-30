import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import OffCanvas from "./OffCanvas";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isAuthenticated, logout } = useAuth0();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">BookStore</Navbar.Brand>
          {isAuthenticated == true ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="books">Books</Nav.Link>
                <Nav.Link href="authors">Authors</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={handleShow}>Cart</Nav.Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </Button>
              </Nav>
            </>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
      {show == true ? <OffCanvas handleClose={handleClose} show={show} /> : ""}
    </>
  );
};

export default NavigationBar;
