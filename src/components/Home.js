import React from "react";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const goOrder = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-header">
      <h2>Your Favorite Food, Delivered While Coding</h2>
      <button onClick={goOrder} id="order-pizza">
        Order Now
      </button>
    </div>
  );
}
