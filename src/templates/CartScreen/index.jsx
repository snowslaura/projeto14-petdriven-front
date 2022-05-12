import axios from "axios"
import { useState, useEffect } from "react"


export default function Cart() {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState([])
  
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
  },[])

  useEffect(() => {
    products.forEach((data) => {
      axios
      .get(`http://localhost:5000/product/${data.idProduct}`,{
        headers: {
          Authorization: "Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f"
        }
      })
      .then((response) => {
        setProductInfo([response.data])
      })
      .catch((e) => {
        console.log(e)
      })
    })
  },)

console.log(productInfo)

  return (
    <div>
      <h1>Meu carrinho</h1>
      <div>
        {productInfo.map((data) => 
          <div>
            <img src={data.image} alt="product"></img>
            <div>
              <p>{data.price}</p>
              <p>{data.name}</p>
            </div>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  function deleteProduct(id){
    axios
    .delete("http://localhost:5000/cart", id)
    .then((response) => {
      console.log(response.data)
    })
    .catch((e) =>{
      console.log(e)
    })
  }
}


