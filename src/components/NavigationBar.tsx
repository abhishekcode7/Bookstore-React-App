import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import OffCanvas from "./OffCanvas";
const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="home">BookStore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="books">Books</Nav.Link>
          <Nav.Link href="authors">Authors</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleShow}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    {show == true? <OffCanvas handleClose={handleClose} show={show}/>:""}
    </>
  );
};

export default NavigationBar;
