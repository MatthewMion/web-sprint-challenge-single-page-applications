import React from "react";
import { useHistory } from "react-router";

export default function Home() {
  return (
    <div className="home-header">
      <h2>Your Favorite Food, Delivered While Coding</h2>
      <button id="order-pizza">Order Now</button>
    </div>
  );
}
