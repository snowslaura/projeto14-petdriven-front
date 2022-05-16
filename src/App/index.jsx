import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../templates/LoginScreen";
import Register from "../templates/RegisterScreen";
import Home from "../templates/HomeScreen";
import Product from "../templates/ProductScreen"
import Cart from "../templates/CartScreen";
import Checkout from "../templates/CheckoutScreen";

import UsuarioContext from "./../contexts/UserContext";
import isLoadingContext from "./../contexts/isLoadingContext"
import IsModalOpenContext from "./../contexts/IsModalOpenContext"
import ErrorMessageContext from "./../contexts/ErrorMessageContext"


function App() {

  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isModalOpen, setIsmodalOpen] = useState(false)



  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{userData,setUserData}}>
      <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
        <IsModalOpenContext.Provider value={{isModalOpen, setIsmodalOpen}}>
          <ErrorMessageContext.Provider value={{errorMessage, setErrorMessage}}>
            <Routes>          
                <Route path="/" element={<Login />}></Route>
                <Route path="/sign-up" element={<Register />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
                <Route path="/mycart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </ErrorMessageContext.Provider>
        </IsModalOpenContext.Provider>
      </isLoadingContext.Provider>    
      </UsuarioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
