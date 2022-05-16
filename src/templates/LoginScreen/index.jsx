import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import {useContext, useState} from "react"
import axios from "axios"
import email from "./../../assets/img/email.png"
import padlock from "./../../assets/img/padlock.png"
import pawprint from "./../../assets/img/pawprint.svg"
import {Oval} from 'react-loader-spinner';
import Modal from "./../../components/modal/index.jsx"

import UsuarioContext from "./../../contexts/UserContext";
import isLoadingContext from "./../../contexts/isLoadingContext"
import isModalOpenContext from "../../contexts/IsModalOpenContext";
import ErrorMessageContext from "../../contexts/ErrorMessageContext";

function Login(){
  
    const{userData, setUserData} = useContext(UsuarioContext)
    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const {isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)

    const[showTip, setShowTip]= useState(false);    

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)

        const body ={
            email: userData.email,
            password:userData.password,
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body)
        promise.then(({data})=>{
            setUserData({...userData, email:"", password:""});  
            const serializedDataString = JSON.stringify({token: data.token, name:data.name})            
            localStorage.setItem("userData", serializedDataString)          
            navigate("/home");
            setIsLoading(false)
        })
        
        promise.catch((e) => {
            const message = e.response.data
            setUserData({...userData,email:"", password:""});
            setIsLoading(false)
            setIsmodalOpen(true)
            setErrorMessage(message)            
        })
    }

    function showTipBelow(){
        setShowTip(!showTip)
    }

    return(
    <Container>     
        <Logo>Petdriven</Logo>
        <InitialMessage>Digite seu e-mail e senha para entrar!</InitialMessage>
        {isLoading?
        <>
            <form onSubmit={handleSubmit}>
                <InputIcone isLoading>
                    <img src={email} alt="user-icon"></img>
                    <input type="email" id="email" placeholder="E-mail" disabled  value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
                </InputIcone>
                <InputIcone isLoading>
                    <img src={padlock} alt="user-icon"></img>
                    <input type="password" id="password" placeholder="Senha" disabled value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} />
                </InputIcone>
                <button type="submit" disabled> <Oval height="30" width="30" color='#FFAD32' disabled ariaLabel='loading'/></button>
            </form>            
        </>:
        <>        
            <form onSubmit={handleSubmit}>
                <InputIcone>
                    <img src={email} alt="user-icon"></img>
                    <input type="email" id="email" placeholder="E-mail"  value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
                </InputIcone>
                <InputIcone>
                    <img src={padlock} alt="user-icon"></img>
                    <input onClick={showTipBelow} type="password" id="password" placeholder="Senha*"  value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} />
                </InputIcone>
                {!showTip?"":
                    <Warn><span>*Deve ser alfanumérica e deve conter</span> <span> no mínimo 6 dígitos e no máximo 12</span></Warn>}

                <button type="submit">Entrar</button>  
            </form>
            {isModalOpen?<Modal setIsmodalOpen={setIsmodalOpen} errorMessage={errorMessage}/>:null}
        </>} 
        <Link to="/sign-up"><Enter>Não tem uma conta? Registre-se aqui!</Enter></Link>         
    </Container>

    )
}
export default Login;

const Logo = styled.p`
    font-family: 'Indie Flower', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 50px;
    color: #015584;
`

const InitialMessage = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 50px;
    color: #015584;

`

const InputIcone = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    width: 326px;
    height: 46px;
    border-radius: 15px;
    border: 2.5px dotted #FFAD32;
    margin-bottom: 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    padding: 10px;
    background-color: ${props => props.isLoading===true?"#beb3b3":"#FFF"};    

        img{
        height: 20px;
        }

        input{ 
            margin-left: 10px;
            width: 100%;
            height: 100%;
            border: none;
            cursor: pointer;
            background-color: ${props => props.isLoading===true?"#beb3b3":"#FFF"}; 
            ::placeholder {
                        color:#015584;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 23px;                        
            };     
        }
`

const Warn = styled.p`
    font-size: 12px;
    margin-bottom: 13px;
    color:  #015584;    
    span{
        display:block;        
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    margin-top: 150px;    
    width: 350px;
    height: 350px;
    background-image: url(${pawprint}) ;
    background-size: cover;
    background-repeat: no-repeat;
    

   form{
        display: flex;
        flex-direction: column; 
        justify-content: center;
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
const Enter = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #015584;
    margin-top: 30px;
`



