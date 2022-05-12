import styled from "styled-components";

import Header from "./../../components/header";
import Footer from "./../../components/footer";
import Product from "./../../components/products";

import Food from "./../../assets/images/food.jpg";
import Antpulga from "./../../assets/images/antpulga.jpg";
import Houses from "./../../assets/images/house.jpg";
import Med from "./../../assets/images/med.jpg";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <DivNav>
          <DivFilter>
            <img src={Food} alt="Comida para animais" />
          </DivFilter>
          <DivFilter>
            <img src={Antpulga} alt="Anti-pulgas" />
          </DivFilter>
          <DivFilter>
            <img src={Med} alt="Medicamento para animais" />
          </DivFilter>
          <DivFilter>
            <img src={Houses} alt="Casinha para animais" />
          </DivFilter>
        </DivNav>
        <DivGuide>
          <h1>Todos os produtos</h1>
          <p>Veja todos</p>
        </DivGuide>
        <DivProducts>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </DivProducts>
      </Main>
      <Footer />
    </>
  );
}

export default Home;

export const Main = styled.main`
  width: 375px;
  height: 810px;
  margin-top: 70px;
`;

export const DivNav = styled.div`
  width: 355px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  margin-top: 100px;
`;

export const DivFilter = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: solid 1px #989898;
  border-radius: 30%;
  margin: 0 10px;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const DivGuide = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 18.73px;
    color: #000000;
    margin-left: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #989898;
    margin-right: 15px;
  }
`;

export const DivProducts = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
