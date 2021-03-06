import styled from "styled-components";

function Product(props) {
  const { name, image, price } = props;
  return (
    <>
      <Box>
        <Image>
          <img src={image} alt="Imagens que vão vir" />
        </Image>
        <Legenda>
          <h1>{name}</h1>
        </Legenda>
        <Price>
          <p>R$ {price}</p>
        </Price>
      </Box>
    </>
  );
}

export default Product;

const Box = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 10px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 3px 3px;

  :hover {
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;

  img {
    width: 80px;
    height: 80px;
  }
`;

const Legenda = styled.div`
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0px 6px;
  margin-top: 5px;

  h1 {
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 8px;
    margin-left: 3px;
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
    margin-right: 32px;
  }
`;
