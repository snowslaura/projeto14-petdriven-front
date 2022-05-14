import axios from "axios"
import {GiConfirmed} from "react-icons/gi"
import { useEffect } from "react"
import styled from "styled-components"

export default function Checkout() {

  useEffect(() => {
    axios
    .delete("http://localhost:5000/checkout")
    .then()
    .catch(alert("Erro ao finalizar a compra"))
  },[])

  return (
    <>
      <ConfirmedPurchase>
        <GiConfirmed/>
        <h1>Compra finalizada!!!</h1>
      </ConfirmedPurchase>
      <ButtonMenu>
        <button>Voltar ao Menu</button>
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
