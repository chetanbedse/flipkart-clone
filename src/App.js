import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import CartPage from "./components/Cart/CartPage";
import ProductDetails from "./components/ProductDetails/ProductDetailsPage";
import SearchPage from "./components/Search/SearchPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
