import React from "react";

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
    <div className="container">
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
      {/* 
        <h3>Choice of Sauce</h3>
        <h3>Add Toppings</h3>
        <h3>Special Instructions</h3> */}
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="form-group inputs">
          <label>
            Name:
            <input
              id="name-input"
              type="text"
              value={values.name}
              onChange={onChange}
              name="name"
            />
          </label>
          <label>
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
              type="checkbox"
              value={values.pepperoni}
              name="pepperoni"
              onChange={onChange}
            />
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              value={values.sausage}
              name="sausage"
              onChange={onChange}
            />
            Sausage
          </label>
          <label>
            <input
              type="checkbox"
              value={values.peppers}
              name="peppers"
              onChange={onChange}
            />
            Peppers
          </label>
          <label>
            <input
              type="checkbox"
              value={values.meatballs}
              name="meatballs"
              onChange={onChange}
            />
            A'Spicy A'meat'a ball
          </label>
          <label>
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
        <button className="orderSubmitBtn" disabled={disabled}>
          Submit Your Order
        </button>
      </form>
    </div>
  );
}
