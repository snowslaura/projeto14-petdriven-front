import styled from "styled-components"
import {IoChevronBack} from "react-icons/io5"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Product(){

    const {id} = useParams();
    const [product, setProduct] = useState({})

    //const userDataLocalStorage = localStorage.getItem("userData")
    //const unserializedData = JSON.parse(userDataLocalStorage)
    //const tokenStorage = unserializedData.token
    
    useEffect( fetchProduct, [])

    function fetchProduct(){
        const config = {
            headers: {
                "Authorization": `Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f`
            }
        }
    
        const promise = axios.get(`http://localhost:5000/product/${id}`, config)
        promise.then(({data})=>{
            setProduct(data)
        })
        promise.catch((e)=>{
            console.log(e)
        })
    }   
    
    function postProductCart(){
        const config = {
            headers: {
                "Authorization": `Bearer 60e7b053-147f-4773-921e-8ee5d46e4f4f`
            }
        }

        const body = {
            id
        }

        const promise = axios.post(`http://localhost:5000/product/${id}`, body, config)
        promise.then(({data})=>{
            setProduct(data)
        })
        promise.catch((e)=>{
            console.log(e)
        })
    
    }
    
    return(
        <Container>
            <Header>
                <IoChevronBack/>

            </Header>
            <img src={product.image} alt={product.name}></img>
            <Footer>
                <div>
                    <Name>
                        {product.name}
                    </Name>                    
                    <Price>{product.price}</Price>
                </div>
                <Description>{product.description}</Description>
                <button>Adicione ao carrinho</button>                
            </Footer>        
        </Container>
        
    )
}

export default Product;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    margin-top: 80px;  

    img{
        height: 400px;
        width: 400px;
    }
`

const Header = styled.div`
    position:fixed;
    top:20px;
    left:20px;
    color:#015584;
    font-size: 40px;
` 
    
const Footer = styled.footer`
    height: 200px;
    border-radius:  50px 50px 0 0;
    background-color: #FFAD32;
    position: fixed;
    width: 100%;
    bottom:0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    div{
        height: 30px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    button{
        width: 326px;
        height: 46px;
        background: #05A0F8;
        border-radius: 15px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        border:none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;        
    }
    .tooltip{
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
    }
    .tooltip:hover {
        visibility: visible;
    }

`

const Name = styled.p`
   font-size:20px;
    color:  #015584; 
    width:80%;
    height: 70%;
    overflow: hidden;
`

const Price = styled.p`
    font-size:20px;
    color: #015584;  
`

const Description = styled.p`
    font-size:15px;
    color: #015584;  
    width: 300px;
    height: 70px;
    overflow-y: scroll;
    word-break: break-word;
`