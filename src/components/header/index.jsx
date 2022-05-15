import styled from "styled-components";

import Imagem from "./../../assets/images/doglogo.png";

function Header() {
  const userDataLocalStorage = localStorage.getItem("userData");
  const unserializedData = JSON.parse(userDataLocalStorage);
  const nameStorage = unserializedData.name;
  return (
    <>
      <Top>
        <Left>
          <img src={Imagem} alt="Logo" />
          <h1>PetDriven</h1>
        </Left>
        <Right>
          <RightIcon>
            <ion-icon name="person-outline"></ion-icon>
          </RightIcon>
          <RightName>
            <h1>Olá, {nameStorage}</h1>
          </RightName>
        </Right>
      </Top>
    </>
  );
}

export default Header;

const Top = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffad32;
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
    font-size: 38px;
    font-weight: 400;
    font-family: "Indie Flower", cursive;
    font-style: normal;
    line-height: 16.73px;
    color: #ffffff;
    margin-left: 5px;
  }

  img {
    width: 51px;
    heighr: 51px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;

const Right = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  margin-right: 10px;
`;

const RightIcon = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;

  ion-icon {
    font-size: 20px;
    color: #015584;
  }
`;

const RightName = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #015584;
    text-align: center;
  }
`;
