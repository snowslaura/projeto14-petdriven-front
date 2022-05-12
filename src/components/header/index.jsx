import { useContext } from 'react';
import UsuarioContext from './../../contexts/UserContext';

import styled from "styled-components";

import Imagem from "./../../assets/images/doglogo.jpg"

function Header() {
  return (
    <>
      <Top>
        <Left>
          <img src={Imagem} alt="Logo TrackIt" />
          <h1>PetDriven</h1>
        </Left>
        <Right>
          <ion-icon name="person-outline"></ion-icon>
          <h1>Olá Fulano</h1>
        </Right>
      </Top>
    </>
  );
}
  
  export default Header;


  const Top = styled.header`
  width: 100%;
  height: 70px;
  background-color: #FFAD32;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

  const Left = styled.div`
  width: 60px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;

  h1 {
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    line-height: 46.73px;
    color: #FFFFFF;
    margin-left: 5px;
  }

  img{
      width: 51px;
      heighr: 51px;
      border-radius: 5px;
  }
`;

const Right = styled.div`
  width: 90px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;

  h1 {
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 46.73px;
    color: #FFFFFF;
    text-align: center;
  }

  ion-icon{
    font-size: 22px;
    color: #FFFFFF;
  }

`;
  