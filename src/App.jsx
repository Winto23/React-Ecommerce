import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Products } from "./pages/product/Products";
import { Cart } from "./pages/cart/Cart";
import { CartContextProvider } from "./context/Cartcontext";
import { Favorite } from "./pages/favorite/Favorite.jsx";
import { ProductDetail } from "./pages/product/ProductDetail";

function App() {
  return (
    <CartContextProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
