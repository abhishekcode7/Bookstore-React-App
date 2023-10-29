import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bookpage from "./components/Bookpage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthorPage from "./components/AuthorPage";
function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<Bookpage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/authors" element={<AuthorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
