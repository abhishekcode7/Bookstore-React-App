import React from "react";
import Book from "./Book.tsx";
import data from "../assets/bookData.json";

const Bookpage = () => {
  return (
    <>
      <h3 className="text-center p-4">All Books</h3>
      <div className="d-flex justify-content-around">
        {data.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </>
  );
};

export default Bookpage;
