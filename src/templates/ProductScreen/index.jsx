import styled from "styled-components"
import {IoChevronBack} from "react-icons/io5"
import {BsPiggyBank} from "react-icons/bs"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Tippy from '@tippyjs/react';

function Product(){

    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [promotion, setPromotion] = useState(false)

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token
    
    useEffect( fetchProduct, [tokenStorage,id])

    const navigate = useNavigate();

    function fetchProduct(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }
    
        const promise = axios.get(`http://localhost:5000/product/${id}`, config)
        promise.then(({data})=>{
            setPromotion(data.promotion)
            setProduct(data)
        })
        promise.catch((e)=>{
            console.log(e)
        })
    }   
    
    function postProductCart(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }       

        const promise = axios.post(`http://localhost:5000/product/${id}`,{}, config)
        promise.then(({data})=>{
            navigate("/mycart")
        })
        promise.catch((e)=>{
            console.log(e)
        })
    
    }

    function leavePage(){
        setProduct({})
        navigate("/home")
    }
    
    return(
        <Container>
            <Header>
                <div><IoChevronBack onClick={leavePage}/></div>
                {promotion?
                <Tippy content="Esse produto está em promoção. Aproveite!" >
                     <Promotion><BsPiggyBank/></Promotion>
                </Tippy> :""}
            </Header>
            <img src={product.image} alt={product.name}></img>
            <Footer>
                <div>
                    <Tippy content={product.name} >
                        <Name>{product.name}</Name>
                    </Tippy> 
                    <Price>R${product.price}</Price>
                </div>
                <Description>{product.description}</Description>
                <button onClick={postProductCart}>Adicione ao carrinho</button>                
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
    width: 100%;
    height: 100%;

    img{
        margin-top: 150px;
        width: 250px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
    }
`
const Promotion = styled.div`
    color: green;
    display: ${props => props.promotion===true?"flex":"hidden"};
    justify-content: center;
    width: 50px;
    border-radius: 10px;;
`

const Header = styled.div`
    position:fixed;
    top:0px; 
    width: 100%;
    display: flex;
    justify-content: space-between;       
    color:#015584;
    font-size: 40px;
    padding: 20px;

    div{
        cursor: pointer;  
    }
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
    font-weight: 700;
    

    div{
        height: 30px;
        width: 80%;
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

`

const Name = styled.p`
    font-size:20px;
    color: #ffffff;
    width:90%;
    height: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700; 
`

const Price = styled.p`
    font-size:20px;
    font-weight: 700; 
    color: #ffffff; 
`

const Description = styled.p`
    font-size:15px;
    font-weight: 700; 
    color: #ffffff; 
    width: 80%;
    height: 80px;
    overflow-y: scroll;
    word-break: break-word;
`