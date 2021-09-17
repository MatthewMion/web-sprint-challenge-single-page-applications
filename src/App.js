import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import formSchema from "./validation/FormSchema";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";

const AppWrapper = styled.div`
  font-family: "Cedarville Cursive", cursive;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: green;
    border-bottom: solid black 4px;
  }
  nav h1 {
    font-size: 4rem;
    text-shadow: 2px 2px #ff0000;
  }
  nav a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    background-color: red;
    padding: 0.5% 1%;
    border-radius: 15%;
    box-shadow: 5px 5px #888888;
  }
`;

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  peppers: false,
  meatballs: false,
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
  const getOrders = () => {
    axios
      .get(`https://reqres.in/api/orders`)
      .then((res) => {})
      .catch((err) => console.error(err));
  };
  const postNewOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        console.log(res.data);
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
  };

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
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      meatballs: formValues.meatballs,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <AppWrapper>
      <nav>
        <h1>Mama Mia's Pizzeria</h1>
        <Link to="/">Home</Link>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
    </AppWrapper>
  );
};
export default App;
