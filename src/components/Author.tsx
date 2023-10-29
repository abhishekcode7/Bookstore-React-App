import React, { FC } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { typeBook } from "./Book";
export type typeAuthor = {
  author_name: string;
  books: string[];
};

interface authorProps {
  author: typeAuthor;
}

const Author: FC<authorProps> = ({ author }): JSX.Element => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleShow}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/450px-Franz_Kafka%2C_1923.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">{author.author_name}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Books by {author.author_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {author.books.map((book) => (
            <div>{book}</div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Author;
