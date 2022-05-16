import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

function Footer() {
  const userDataLocalStorage = localStorage.getItem("userData")
  const unserializedData = JSON.parse(userDataLocalStorage)
  const tokenStorage = unserializedData.token
  const navigate = useNavigate();
  function logOut() {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    const URL = "http://localhost:5000/home";
    const body = {};
    const promise = axios.put(URL, body, config);
    promise.then(() => {
      localStorage.setItem("userData", "")
      navigate("/");
    });
    promise.catch((err) => console.log(err));
  }
  return (
    <>
      <Bot>
        <Link to={`/home`}>
          <ion-icon name="home-outline"></ion-icon>
        </Link>
        <Link to={`/mycart`}>
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
        <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
      </Bot>
    </>
  );
}

export default Footer;

const Bot = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  ion-icon {
    font-size: 28px;
    color: #989898;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
