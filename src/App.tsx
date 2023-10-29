
import "./App.css";
import Bookpage from "./components/Bookpage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthorPage from "./components/AuthorPage";
import AboutBook from "./components/AboutBook";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Bookpage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/about" element={<AboutBook />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
