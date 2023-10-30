import { Button } from "react-bootstrap";
import data from "../assets/bookData.json";
import Book from "./Book.tsx";
import { typeBook } from "./Book.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";
const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  return (
    <>
      <div className="text-center p-4">
        <h2> Welcome to The BookStore 🎉</h2>
        <h4> Beyond the Pages: Navigating the Digital Realm of Literature </h4>
      </div>

      {isAuthenticated == true ? (
        <>
          <div
            className="pt-5"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
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
      ) : isLoading ? (
        <div className="w-100 text-center mt-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="w-100 text-center mt-5">
          <Button variant="dark" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        </div>
      )}
    </>
  );
};

export default HomePage;
