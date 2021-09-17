import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import bgImg from "../Assets/Pizza.jpg";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  padding: 5% 0%;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    text-shadow: 2px 2px #ff0000;
  }
  button {
    font-family: "Cedarville Cursive", cursive;
    padding: 2%;
    font-size: 2.5rem;
    font-weight: bold;
    background-color: red;
    border-radius: 15%;
    box-shadow: 5px 5px #888888;
  }
`;
export default function Home() {
  const history = useHistory();
  const goOrder = () => {
    history.push("/pizza");
  };

  return (
    <HeaderWrapper>
      <h2>Your Favorite Food, Delivered While Coding</h2>
      <button onClick={goOrder} id="order-pizza">
        Order Now
      </button>
    </HeaderWrapper>
  );
}
