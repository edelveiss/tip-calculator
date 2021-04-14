import React from "react";
import { useState } from "react";
import "./Form.css";
function Form({ totalAmount, setTotalAmount, formState, setFormState }) {
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const inputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const percentInput = (percent) => {
    setFormState({ ...formState, tipPercent: percent });
    console.log(formState);
  };
  const calculate = (e) => {
    e.preventDefault();
    const calculatedTip = (
      (formState.price * formState.tipPercent) /
      100
    ).toFixed(2);
    const calculatedAmount = (
      Number(formState.price) + Number(calculatedTip)
    ).toFixed(2);
    setTip(calculatedTip);
    setTotalAmount(calculatedAmount);
    setTipPerPerson((calculatedTip / formState.numberOfPeople).toFixed(2));
    setTotalPerPerson((calculatedAmount / formState.numberOfPeople).toFixed(2));
  };
  const resetForm = () => {
    setFormState({
      price: "",
      tipPercent: "",
      numberOfPeople: 1,
    });
    setTotalAmount(0);
    setTip(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <div className="form-container">
      <form onSubmit={calculate}>
        <div className="input-label">
          <label htmlFor="price">
            Total cost (excluding tip)
            <input
              name="price"
              type="number"
              min="0"
              step=".01"
              value={formState.price}
              onChange={inputChange}
            />
          </label>
        </div>
        <div className="input-label">
          <label htmlFor="tipPercent">
            Tip percentage added
            <div className="percent-btn">
              <button
                className={
                  formState.tipPercent === 0
                    ? "percent active-percent"
                    : "percent"
                }
                onClick={() => percentInput(0)}
              >
                0%
              </button>
              <button
                className={
                  formState.tipPercent === 10
                    ? "percent active-percent"
                    : "percent"
                }
                onClick={() => percentInput(10)}
              >
                10%
              </button>
              <button
                className={
                  formState.tipPercent === 15
                    ? "percent active-percent"
                    : "percent"
                }
                onClick={() => percentInput(15)}
              >
                15%
              </button>
              <button
                className={
                  formState.tipPercent === 20
                    ? "percent active-percent"
                    : "percent"
                }
                onClick={() => percentInput(20)}
              >
                20%
              </button>
            </div>
          </label>
        </div>
        <div className="input-label">
          <label htmlFor="numberOfPeople">
            Number of People
            <input
              name="numberOfPeople"
              type="number"
              min="1"
              value={formState.numberOfPeople}
              onChange={inputChange}
            />
          </label>
        </div>
        <div className="btn">
          <button className="main-btn">Calculate</button>
          <button className="main-btn" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
      <div className="result">
        <div className="span-result">
          <span>Tip:</span>
          <span>${tip}</span>
        </div>
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
      </div>
    </div>
  );
}

export default Form;
