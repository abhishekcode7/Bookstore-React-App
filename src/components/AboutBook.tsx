import React from "react";
import { useLocation } from "react-router-dom";
import { typeBook } from "./Book";
import Image from "react-bootstrap/Image";

const AboutBook = () => {
  const location = useLocation();
  const book: typeBook = location.state;

  return (
    <>
      <div
        className="d-flex flex-column align-items-center text-center justify-content-center"
        style={{ width: "100%" }}
      >
        <div className="mt-5" style={{ width: "300px", height: "450px" }}>
          <Image src={book.url} fluid />
        </div>
        <h3>{book.name}</h3>
        <h4>by {book.author_name}</h4>
        <h5>Genre: {book.genre}</h5>
        <h6 className="mt-4">{book.description}</h6>
      </div>
    </>
  );
};

export default AboutBook;
