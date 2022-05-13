import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"


export default function Cart() {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState([])
  const [change, setChange] = useState(0)

  useEffect(() =>{
    axios
    .get("http://localhost:5000/cart",{
      headers: {
        Authorization: "Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f"
      }
    })
    .then(response => {
      setProducts(response.data)
    })
  },[change])

  useEffect(() => {
    if(products.length === 0) return
    for(let product of products){
      const promise = axios.get(`http://localhost:5000/product/${product.idProduct}`,{
        headers: {
          Authorization: "Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f"
        }
      })
      promise.then((response) => {
        setProductInfo((prev) => [response.data, ...prev])
      })
      promise.catch((e) => {
        console.log(e)
      })
    }
  },[products])

  return (
    <div>
      <Title>Meu carrinho</Title>
      <div>
        {productInfo.map((data) => 
          <Product>
            <img src={data.image} alt="product"></img>
            <Information>
              <p>{data.name}</p>
              <p>R$ {data.price}</p>
            </Information>
            <Buttons>
              <button onClick={() => deleteProduct(data._id)}>-</button>
              <p>1</p>
              <button onClick={() => addProduct(data._id)}>+</button>
            </Buttons>
          </Product>
        )}
      </div>
    </div>
  )

  function deleteProduct(id){
    console.log(id)
    axios
    .delete(`http://localhost:5000/cart/${id}`)
    .then((response) => {
      console.log(response.data)
      setChange(((prev) => 1 - prev))
      setProductInfo([])
    })
    .catch((e) =>{
      console.log(e)
    })
  }

  function addProduct(id){
    console.log(id)
    axios
    .post(`http://localhost:5000/cart/${id}`)
    .then((response) => {
      setChange(((prev) => 1 + prev))
      setProductInfo([])
      console.log(response.data)
    })
    .catch((e) =>{
      console.log(e)
    })
  }

  
}

const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
`

const Product = styled.div`
  display: flex;
  width: 85%;
  margin: 20px auto;
  
  img{
    width: 90px;
    height: 90%;
    margin: auto;
  }
`

const Information = styled.div`
  width: 50%;
  margin: auto 6px;
`

const Buttons = styled.div`
  display: flex;
  height: 20%;
  margin: auto;
  justify-content: center;
  align-items: center;

  button{
    border-radius: 100px;
    width: 25%;
    border: 0;
    background-color: #FFAD32
  }
  p{
    margin: 0 10px;
  }
`