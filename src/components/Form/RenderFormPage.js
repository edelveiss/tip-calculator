import React from "react";
import "./Form.css";
import { useSelector } from "react-redux";

function RenderFormPage({
  formState,
  inputChange,
  percentInput,
  resetForm,
  calculate,
  equal,
}) {
  const { totalTip } = useSelector((state) => state.amount);
  const peopleData = useSelector((state) => state.peopleData.peopleData);

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
                    ? "percent grow active-percent"
                    : "percent grow"
                }
                onClick={() => percentInput(0)}
              >
                0%
              </button>
              <button
                className={
                  formState.tipPercent === 10
                    ? "percent grow active-percent"
                    : "percent grow"
                }
                onClick={() => percentInput(10)}
              >
                10%
              </button>
              <button
                className={
                  formState.tipPercent === 15
                    ? "percent grow active-percent"
                    : "percent grow"
                }
                onClick={() => percentInput(15)}
              >
                15%
              </button>
              <button
                className={
                  formState.tipPercent === 20
                    ? "percent grow active-percent"
                    : "percent grow"
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
      {}
      <div className="result">
        <div className="span-result">
          <span>Total Tip:</span>
          <span>${totalTip}</span>
        </div>
        {equal === 0 && (
          <div className="result-people">
            <div className="span-result">
              <span>Tip per person: </span>
              <span>$0.00</span>
            </div>
            <div className="span-result">
              <span>Total Per Person:</span>
              <span>$0.00</span>
            </div>
          </div>
        )}
        {equal === 1 && (
          <div className="result-people">
            <div className="span-result">
              <span>Tip per person: </span>
              <span>${peopleData[0].tipPerPerson}</span>
            </div>
            <div className="span-result">
              <span>Total Per Person:</span>
              <span>${peopleData[0].totalPerPerson}</span>
            </div>
          </div>
        )}
        {/** 
        {equal === 3 && <ListPeople />}
*/}
      </div>
    </div>
  );
}

export default RenderFormPage;
