import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export type typeBook = {
  name: string;
  genre: string;
  author_name: string;
  isFeatured: Boolean;
  url: string;
  description:string;
};

interface bookProps {
  book: typeBook;
}

const Book: FC<bookProps> = ({ book }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (book:typeBook) => {
    navigate("/about",{state:book});
  };

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={() =>handleClick(book)}>
        <Card.Img variant="top" src={book.url} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;
