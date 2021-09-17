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
const initialOrder = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //post new order

  const postNewOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
    console.log(orders);
  };

  //double check
  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

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
