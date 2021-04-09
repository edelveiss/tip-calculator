import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";
function Form() {
  const [formState, setFormState] = useState({
    price: 0,
    tipPercent: 0,
    numberOfPeople: 0,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    setTotalAmount((Number(formState.price) + Number(tip)).toFixed(2));
    setTipPerPerson((tip / formState.numberOfPeople).toFixed(2));
    setTotalPerPerson((totalAmount / formState.numberOfPeople).toFixed(2));
  }, [
    tip,
    totalAmount,
    tipPerPerson,
    totalPerPerson,
    formState.numberOfPeople,
    formState.price,
    formState.tipPercent,
  ]);

  const inputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const calculate = (e) => {
    e.preventDefault();
    setTip(((formState.price * formState.tipPercent) / 100).toFixed(2));
  };
  const resetForm = () => {
    setFormState({
      price: 0.0,
      tipPercent: 0.0,
      numberOfPeople: 0,
    });
    setTotalAmount(0);
    setTip(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <div className="form-container">
      <form onSubmit={calculate}>
        <label htmlFor="price">
          Price $
          <input
            name="price"
            type="number"
            min="0"
            step=".01"
            value={formState.price}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="tipPercent">
          Tip %
          <input
            name="tipPercent"
            type="number"
            min="0"
            step=".01"
            value={formState.tipPercent}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="numberOfPeople">
          Number of People
          <input
            name="numberOfPeople"
            type="number"
            min="0"
            value={formState.numberOfPeople}
            onChange={inputChange}
          />
        </label>
        <div className="btn">
          <button>Calculate</button>
          <button onClick={resetForm}>Reset</button>
        </div>
      </form>
      <div className="result">
        <h3>Result</h3>
        <div className="span-result">
          <span>Tip:</span>
          <span>${tip}</span>
        </div>
        <div className="span-result">
          <span>Total Amount:</span>
          <span>${totalAmount}</span>
        </div>
        {formState.numberOfPeople > 1 && totalAmount > 0 ? (
          <div className="result-people">
            <div className="span-result">
              <span>Tip per person: </span>
              <span>${tipPerPerson}</span>
            </div>
            <div className="span-result">
              <span>Total Per Person:</span>
              <span>${totalPerPerson}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Form;
