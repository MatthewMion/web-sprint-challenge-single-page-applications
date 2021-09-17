import React from "react";

export default function PizzaForm() {
  return (
    <div className="container">
      <h2>Build Your Own Pizza</h2>
      <img src="../Assets/Pizza.jpg" alt="its'a pizza" />
      {/* <h3>Choice of Size</h3>
        <h3>Choice of Sauce</h3>
        <h3>Add Toppings</h3>
        <h3>Special Instructions</h3> */}
      <form id="pizza-form"></form>
    </div>
  );
}
