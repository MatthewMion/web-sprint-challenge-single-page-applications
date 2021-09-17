import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/FormSchema";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";
import { useHistory } from "react-router";

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
};
const initialFormErrors = {
  name: "",
  size: "",
};

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
