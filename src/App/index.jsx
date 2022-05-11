import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../templates/LoginScreen";
import Register from "../templates/RegisterScreen";
import Home from "../templates/HomeScreen";
import Cart from "../templates/CartScreen";
import Checkout from "../templates/CheckoutScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/mycart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
