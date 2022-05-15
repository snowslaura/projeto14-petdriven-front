import axios from "axios"
import {GiConfirmed} from "react-icons/gi"
import { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const navigate = useNavigate()
  const userDataLocalStorage = localStorage.getItem("userData")
  const unserializedData = JSON.parse(userDataLocalStorage)
  const tokenStorage = unserializedData.token

  useEffect(() => {
    axios
    .delete("http://localhost:5000/checkout",{
        headers: {
          Authorization: `Bearer ${tokenStorage}`
        }
      })
  },[tokenStorage])

  return (
    <>
      <ConfirmedPurchase>
        <GiConfirmed/>
        <h1>Compra finalizada!!!</h1>
      </ConfirmedPurchase>
      <ButtonMenu>
        <button onClick={() => navigate("/home")}>Voltar ao Menu</button>
      </ButtonMenu>
    </>
  )
}

const ConfirmedPurchase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  margin-top: 50%;
  color: #05A0F8 ;

  h1{
    font-size: 35px;
    color: black;
    margin-top: 10px;
  }

`

const ButtonMenu = styled.div`
  margin-top: 30%;
  justify-content: center;
  align-items: center;

  button{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #05A0F8;
    color: #ffffff;
    border: 0;
    font-size: 20px;
    font-weight: 700;
  }
  
`
