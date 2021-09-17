import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  border: solid red 3px;
  text-shadow: 2px 2px #ff0000;

  h2 {
    font-size: 2.5rem;
  }
  .errors {
    font-size: 2rem;
  }
  #pizza-form {
    display: flex;
    flex-direction: column;
    padding: 2%;
    border: solid green 5px;
    margin: 5%;
    align-items: center;
    row-gap: 20px;
    font-size: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  #size-dropdown {
    text-align: center;
  }
  .dropdown {
    display: flex;
    flex-direction: column;
  }
  input.checkbox {
    width: 30px;
    height: 30px;
  }
  .checkboxes {
    align-items: flex-start;
    font-size: 2.5rem;
  }

  .instructions {
    font-size: 2rem;
    width: 90%;
    align-items: center;z
  }
  #special-text {
    display: block;
    width: 100%;
  }
  .orderSubmitBtn {
    align-items: center;
    width: 50%;
  }
`;

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <ContainerWrapper>
      <h2>Build Your Own Pizza</h2>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.pepperoni}</div>
        <div>{errors.sausage}</div>
        <div>{errors.peppers}</div>
        <div>{errors.meatballs}</div>
        <div>{errors.special}</div>
      </div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="form-group inputs">
          <label>
            Name:{"  "}
            <input
              id="name-input"
              type="text"
              value={values.name}
              onChange={onChange}
              name="name"
            />
          </label>
          <label className="dropdown">
            Choice of Size
            <select
              id="size-dropdown"
              onChange={onChange}
              value={values.size}
              name="size"
            >
              <option value="">- Select a size -</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
        <div className="form-group checkboxes">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value={values.pepperoni}
              name="pepperoni"
              onChange={onChange}
            />
            Pepperoni
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value={values.sausage}
              name="sausage"
              onChange={onChange}
            />
            Sausage
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value={values.peppers}
              name="peppers"
              onChange={onChange}
            />
            Peppers
          </label>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value={values.meatballs}
              name="meatballs"
              onChange={onChange}
            />
            A'Spicy A'meat'a ball
          </label>

          <label className="instructions">
            Special Instructions
            <input
              id="special-text"
              type="text"
              value={values.special}
              name="special"
              onChange={onChange}
            />
          </label>
        </div>
        <button
          id="order-button"
          className="orderSubmitBtn"
          disabled={disabled}
        >
          Submit Your Order
        </button>
      </form>
    </ContainerWrapper>
  );
}
