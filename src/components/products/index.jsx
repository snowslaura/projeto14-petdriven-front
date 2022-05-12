import styled from "styled-components";

import Imagem from "./../../assets/images/doglogo.jpg"

function Product() {
  return (
    <>
    <Box>
      <Div>
          <img src={Imagem} alt="Imagens que vão vir" />
      </Div>
      <Legenda>
          <h1>Petisco Massa e sua descrição</h1>
          <p>R$ 7,55</p>
      </Legenda>
      </Box>
    </>
  );
}

export default Product;

const Box = styled.div`
  width: 100px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
`;

const Div = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img{
      width: 80px;
      height: 80px;
  }
`;

const Legenda = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #000000;
    margin-left: 15px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #05A0F8;
    margin-right: 15px;
  }
`;
