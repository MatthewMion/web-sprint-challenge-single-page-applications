import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();
  const goOrder = () => {
    history.push("/pizza");
  };

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </nav>
      <Route exact path="/">
        <div className="home-header">
          <h2>Your Favorite Food, Delivered While Coding</h2>
          <button onClick={goOrder} id="order-pizza">
            Order Now
          </button>
        </div>
        );
      </Route>
      <Route exact path="/pizza">
        <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
