import React from "react";
import authorData from "../assets/authorData.json";
import { typeAuthor } from "./Author";
import Author from "./Author";

const AuthorPage = () => {
  return (
    <>
      <h2 className="text-center m-3">Author Gallery </h2>

      <div className="mt-5 d-flex justify-content-around">
        {authorData.map((author: typeAuthor) => (
          <Author author={author} />
        ))}
      </div>
    </>
  );
};

export default AuthorPage;
