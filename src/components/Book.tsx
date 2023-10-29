import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
export type typeBook = {
  name: string;
  genre: string;
  author_name: string;
  isFeatured: Boolean;
  url: string;
  description: string;
  id: string;
  price:number;
};

interface bookProps {
  book: typeBook;
}

const Book: FC<bookProps> = ({ book }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (book: typeBook) => {
    navigate("/about", { state: book });
  };

  const cartContext = useCart();

  const quantity = cartContext.getItemCount(book.id);
  console.log(book)
  console.log(quantity)
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.url} onClick={() => handleClick(book)}/>
        <Card.Body>
          <Card.Title onClick={() => handleClick(book)}>{book.name}</Card.Title>
          <Card.Text onClick={() => handleClick(book)}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => cartContext.increaseItemCount(book.id)}
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    onClick={() => cartContext.decreaseItemCount(book.id)}
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => cartContext.increaseItemCount(book.id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => cartContext.removeItemCount(book.id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;
