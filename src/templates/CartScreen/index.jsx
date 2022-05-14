import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import {AiOutlineShoppingCart, AiFillMinusCircle} from "react-icons/ai"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {IoChevronBack} from "react-icons/io5"

export default function Cart() {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState([])
  const [update, setUpdate] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() =>{
    if(update){
    axios
    .get("http://localhost:5000/cart",{
      headers: {
        Authorization: "Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f"
      }
    })
    .then(response => {
      setProducts(() => response.data)
    })
    .catch((e) => {
      console.log(e)
    })
    setUpdate(false)
  }
  else{
    console.log("aa")
  }

  },[update])

  useEffect(() => {
    if(products.length === 0) return
    for(let product of products){
      const promise = axios.get(`http://localhost:5000/product/${product.idProduct}`,{
        headers: {
          Authorization: "Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f"
        }
      })
      promise.then((response) => {
        response.data.quantity = product.quantity
        setProductInfo((prev) => [response.data, ...prev])
      })
      promise.catch((e) => {
        console.log(e)
      })
    }
  },[products])

  useEffect(() => {
    setTotal(0)
    productInfo.forEach((product) => {
      const subTotal = parseFloat(product.price) * parseFloat(product.quantity)
      console.log(productInfo)
      setTotal((prev) => parseFloat(prev) + parseFloat(subTotal))
    })
  },[productInfo])

  return (
    <CartDiv>
      <Header>
        <IoChevronBack/>
        <Title> Meu carrinho  </Title>
        <AiOutlineShoppingCart/>
      </Header>
      <ProductList>
        {productInfo.map((data, index) => 
          <Product key={index}>
            <img src={data.image} alt="product"></img>
            <Information>
              <h1>{data.name}</h1>
              <p>R$ {data.price}</p>
            </Information>
            <Buttons>
              <h1 onClick={() => DeleteProduct(data._id)}><AiFillMinusCircle/></h1>
              <p>{data.quantity}</p>
              <h1 onClick={() => AddProduct(data._id)}><BsFillPlusCircleFill/></h1>
            </Buttons>
          </Product>
        )}
      </ProductList>
      <Checkout>
        <Total>
          <p>Total: </p>
          <p>R$ {parseFloat(total).toFixed(2)}</p>
        </Total>
          <button>Finalizar Compra</button>
      </Checkout>
    </CartDiv>
  )

  function DeleteProduct(id){
    axios.delete(`http://localhost:5000/cart/${id}`)
    setProducts(() => [])
    setProductInfo(() => [])
    setUpdate(() => true)
  }

  function AddProduct(id){
    axios.post(`http://localhost:5000/cart/${id}`,)
    setProducts(() => [])
    setProductInfo(() => [])
    setUpdate(() => true)
    }

  
}


const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  color: #015584;
  font-size: 30px;
`

const CartDiv = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
`
 
const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: #015584 ;
`

const ProductList = styled.div`
  padding-bottom: 25%;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85vw;
  height: 200px;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  color: #05A0F8;

  h1{
    margin-top: 10px;
  }
  
  p{
    font-weight: 700;
    margin: 10px 0;
  }

  img{
    width: 90px;
    height: 50%;
    border-radius: 5px;
    margin: auto 10px;
  }
`

const Information = styled.div`
  width: 50%;
  margin: auto 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Buttons = styled.div`
  display: flex;
  height: 20%;
  margin: auto 10px;
  justify-content: center;
  align-items: center;

  h1{
    color: #015584;
    font-size: 20px;
    margin: 0;
  }

  p{
    margin: 0 10px;
  }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;


  p{
    font-weight: 700;
    color: #ffffff;
  }
`

const Checkout = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFAD32 ;
  
  button{
   width: 85%;
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