import styled from "styled-components";

function Modal(props) {

    const {setIsmodalOpen,errorMessage} = props

    return (
      <ModalBackground>
        <ModalContainer>
          <Body>
            <p>{errorMessage}.</p>
          </Body>
          <Footer>
            <button onClick={() => setIsmodalOpen(false)}>OK</button>
          </Footer>
        </ModalContainer>
      </ModalBackground>
    );
  }
  
export default Modal;

const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #EFEEF3;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
`

const ModalContainer = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2.5px dotted #FFAD32;
    display: flex;
    flex-direction: column;
    padding: 25px;    

`

const Body = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #015584;
    line-height: 20px;
`

const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 150px;
        height: 45px;
        margin: 10px;
        border: none;
        background: #05A0F8;
        color: white;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;
    }

    #cancelBtn {
        background-color: crimson;
    }

`
