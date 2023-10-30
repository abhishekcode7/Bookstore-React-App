import "./App.css";
import Bookpage from "./components/Bookpage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthorPage from "./components/AuthorPage";
import AboutBook from "./components/AboutBook";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
    <Auth0Provider
      domain="dev-6wqphjmijo4tjbxf.us.auth0.com"
      clientId="eTrSBCOrWDCNSkx1Ky2rkBdxYwxSDTjP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
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
    </Auth0Provider>
  );
}

export default App;
