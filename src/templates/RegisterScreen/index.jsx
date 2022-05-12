import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react"
import axios from "axios"
import user from "./../../assets/img/user.png"
import email from "./../../assets/img/email.png"
import padlock from "./../../assets/img/padlock.png"
import {Oval} from 'react-loader-spinner';

import UsuarioContext from "./../../contexts/UserContext";
import isLoadingContext from "./../../contexts/isLoadingContext"

function Register(){

    const{userData, setUserData} = useContext(UsuarioContext)
    const {isLoading, setIsLoading} = useContext(isLoadingContext)

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)

        const body ={
            name: userData.name,
            email:userData.email,
            password:userData.password,
            confirmation:userData.confirmation
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
        promise.then(()=>{
            setUserData({...userData,name:"", email:"", password:"", confirm:""});
            navigate("/");
            setIsLoading(false)

        })
        promise.catch((e) => {
            setUserData({...userData,name:"", email:"", password:"", confirm:""});
            setIsLoading(false)
            alert("Dados inválidos");
        })
    }
    return(
    <Container> 
        <Logo>Petdriven</Logo>
        <InitialMessage>Complete os campos com suas informações</InitialMessage>
        {isLoading?
        <form onSubmit={handleSubmit}>
            <InputIcone isLoading>
                <img src={user} alt="user-icon"></img>
                <input type="text" id="name" placeholder="Nome" disabled value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})} />
            </InputIcone>
            <InputIcone isLoading>
                <img src={email} alt="user-icon"></img>
                <input type="email" id="email" placeholder="E-mail" disabled  value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
            </InputIcone>
            <InputIcone isLoading>
                <img src={padlock} alt="user-icon"></img>
                <input type="password" id="password" placeholder="Senha" disabled value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} />
            </InputIcone>
            <InputIcone isLoading>
                <img src={padlock} alt="user-icon"></img>
                <input type="password" id="confirmation" placeholder="Confirme a senha" disabled value={userData.confirmation} onChange={(e)=> setUserData({...userData, confirmation:e.target.value})} />
            </InputIcone>
            <button type="submit" disabled> <Oval height="30" width="30" color='#FFAD32' disabled ariaLabel='loading'/></button>
        </form>:        
        <form onSubmit={handleSubmit}>
            <InputIcone>
                <img src={user} alt="user-icon"></img>
                <input type="text" id="name" placeholder="Nome"  value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})} />
            </InputIcone>
            <InputIcone>
                <img src={email} alt="user-icon"></img>
                <input type="email" id="email" placeholder="E-mail"  value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
            </InputIcone>
            <InputIcone>
                <img src={padlock} alt="user-icon"></img>
                <input type="password" id="password" placeholder="Senha"  value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} />
            </InputIcone>
            <InputIcone>
                <img src={padlock} alt="user-icon"></img>
                <input type="password" id="confirmation" placeholder="Confirme a senha"  value={userData.confirmation} onChange={(e)=> setUserData({...userData, confirmation:e.target.value})} />
            </InputIcone>
            <button type="submit">Registrar</button>  
        </form> } 
        <Link to="/"><Enter>Já tem uma conta? Entre agora!</Enter></Link>         
    </Container>

    )
}
export default Register;

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    width: 100vw;
    height: 100vh;
    background-color: #FFAD32;

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



