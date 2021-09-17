import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/FormSchema";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";

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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
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
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      meatballs: formValues.meatballs,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
    </div>
  );
};
export default App;
