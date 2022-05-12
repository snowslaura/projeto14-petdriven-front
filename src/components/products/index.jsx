import styled from "styled-components";

import Imagem from "./../../assets/images/doglogo.jpg";

function Product() {
  return (
    <>
      <Box>
        <Image>
          <img src={Imagem} alt="Imagens que vão vir" />
        </Image>
        <Legenda>
          <h1>Petisco Massa</h1>
        </Legenda>
        <Price>
          <p>R$ 7,55</p>
        </Price>
      </Box>
    </>
  );
}

export default Product;

const Box = styled.div`
  width: 130px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin: 10px 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const Image = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;

  img {
    width: 70px;
    height: 70px;
  }
`;

const Legenda = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0px 10px;
  margin-top: 10px;

  h1 {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #000000;
  }
`;

const Price = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;

  p {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 12.73px;
    color: #05a0f8;
    margin-right: 35px;
  }
`;
