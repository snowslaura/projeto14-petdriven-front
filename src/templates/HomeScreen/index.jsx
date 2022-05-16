import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./../../components/header";
import Footer from "./../../components/footer";
import Product from "./../../components/products";

import Food from "./../../assets/images/food.png";
import Antpulga from "./../../assets/images/antpulga.png";
import Houses from "./../../assets/images/house.png";
import Med from "./../../assets/images/med.png";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [etapa, setEtapa] = useState("");

  const userDataLocalStorage = localStorage.getItem("userData")
  const unserializedData = JSON.parse(userDataLocalStorage)
  const tokenStorage = unserializedData.token

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/home",{
      headers: {
        Authorization: `Bearer ${tokenStorage}`
      }
    });

    promise.then((response) => {
      const { data } = response;
      setProducts(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  useEffect(() => {
    setFiltro([]);
    products.forEach((product) => {
      if (product.type === etapa) {
        setFiltro((prev) => [...prev, product]);
      }
    });
  }, [etapa, products]);

  return (
    <>
      <Header />
      <Main>
        <DivNav>
          <DivFilter onClick={() => setEtapa("dog food")}>
            <img src={Food} alt="Comida para animais" />
          </DivFilter>
          <DivFilter onClick={() => setEtapa("anti-flea")}>
            <img src={Antpulga} alt="Anti-pulgas" />
          </DivFilter>
          <DivFilter onClick={() => setEtapa("medicine")}>
            <img src={Med} alt="Medicamento para animais" />
          </DivFilter>
          <DivFilter onClick={() => setEtapa("dog house")}>
            <img src={Houses} alt="Casinha para animais" />
          </DivFilter>
        </DivNav>
        <DivGuideNav>
          <h1>Ração</h1>
          <h2>Anti-pulgas </h2>
          <h1>Medicamentos</h1>
          <p>Casinhas</p>
        </DivGuideNav>
        <DivGuide>
          <h1>Todos os produtos</h1>
          <p onClick={() => setEtapa("")}>Veja todos</p>
        </DivGuide>
        <DivProducts>
          {etapa === ""
            ? products.map((product) => {
                const { _id, name, price, type, image } = product;
                return (
                  <Link to={`/product/${_id}`} key={_id + name}>
                    <Product
                      name={name}
                      price={price}
                      type={type}
                      image={image}
                    />
                  </Link>
                );
              })
            : filtro.map((product) => {
                const { _id, name, price, type, image } = product;
                return (
                  <Link to={`/product/${_id}`} key={_id + name}>
                    <Product
                      name={name}
                      price={price}
                      type={type}
                      image={image}
                    />
                  </Link>
                )
              })}
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
  margin-bottom: 80px;
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
    width: 45px;
    height: 45px;
  }
  img:hover {
    cursor: pointer;
  }
`;

export const DivGuideNav = styled.div`
  width: 355px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  margin-left: 14px;
  margin-top: 10px;

  h1 {
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #000000;
    margin-left: 30px;
    margin-right: 5px;
  }

  h2 {
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #000000;
    margin-left: 40px;
    margin-right: 5px;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #000000;
    margin-left: 26px;
  }
`;

export const DivGuide = styled.div`
  width: 375px;
  height: 60px;
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
  p:hover {
    cursor: pointer;
  }
`;

export const DivProducts = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  margin-left: 7px;
  padding-bottom: 80px;
`;
