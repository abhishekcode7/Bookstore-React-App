import data from "../assets/bookData.json";
import Book from "./Book.tsx";
import { typeBook } from "./Book.tsx";
const HomePage = () => {
  return (
    <>
      <div className="text-center p-4">
        <h2> Welcome to The BookStore 🎉</h2>
        <h4> Beyond the Pages: Navigating the Digital Realm of Literature </h4>
      </div>

      <div
        className="pt-5"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />

        <div className="text-center">
          <h5 className="ms-4 me-4"> Our Featured Books</h5>
        </div>
        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
      </div>

      <div className="d-flex justify-content-around p-4 mt-3">
        {data.map((book: typeBook) =>
          book.isFeatured == true ? <Book book={book} /> : ""
        )}
      </div>
    </>
  );
};

export default HomePage;
