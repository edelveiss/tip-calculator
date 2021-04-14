import React, { useEffect, useState } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import ListPeople from "./ListPeople";
import {
  setAmount,
  setPeopleData,
  updateTotalAmount,
  updateTotalTip,
} from "../state/actions";
function Form() {
  const { price, tipPercent, numberOfPeople, totalTip } = useSelector(
    (state) => state.amount
  );
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  const [formState, setFormState] = useState({
    price: price,
    tipPercent: tipPercent,
    numberOfPeople: numberOfPeople,
  });
  const [equal, setEqual] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const state = useSelector((state) => state);
  console.log("state", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAmount(formState));
  }, [formState]);

  useEffect(() => {
    if (peopleData.length === 0) {
      setEqual(0);
    } else if (peopleData.length > 1) {
      const equalAmount = peopleData.filter(
        (el) =>
          el.totalPerPersonWithoutTips ===
          peopleData[0].totalPerPersonWithoutTips
      );
      if (equalAmount.length !== peopleData.length) {
        setEqual(3);
      } else {
        setEqual(1);
      }
    } else {
      setEqual(1);
    }
  }, [peopleData]);

  const inputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const percentInput = (percent) => {
    setFormState({ ...formState, tipPercent: percent });
  };
  const calculate = (e) => {
    e.preventDefault();
    calculateTips();
  };
  const calculateTips = () => {
    const calculatedTip = ((price * tipPercent) / 100).toFixed(2);
    const calculatedAmount = (Number(price) + Number(calculatedTip)).toFixed(2);
    const calculatedWithoutTip =
      (calculatedAmount / numberOfPeople).toFixed(2) -
      (calculatedTip / numberOfPeople).toFixed(2);

    dispatch(updateTotalTip(calculatedTip));
    dispatch(updateTotalAmount(calculatedAmount));
    setTipPerPerson((calculatedTip / numberOfPeople).toFixed(2));
    setTotalPerPerson((calculatedAmount / numberOfPeople).toFixed(2));

    let tipArray = [];
    for (let i = 0; i < numberOfPeople; i++) {
      tipArray.push({
        id: i,
        tipPerPerson: (calculatedTip / numberOfPeople).toFixed(2),
        totalPerPerson: (calculatedAmount / numberOfPeople).toFixed(2),
        name: "Person" + " " + String(i + 1),
        totalPerPersonWithoutTips: calculatedWithoutTip,
      });
    }
    dispatch(setPeopleData(tipArray));
  };
  const resetForm = () => {
    setFormState({
      price: "",
      tipPercent: "",
      numberOfPeople: 1,
    });
    dispatch(updateTotalAmount(0));
    setTipPerPerson(0);
    setTotalPerPerson(0);

    let tipArray = [];
    for (let i = 0; i < numberOfPeople; i++) {
      tipArray.push({
        id: i,
        tipPerPerson: 0,
        totalPerPerson: 0,
        name: String(i + 1),
        totalPerPersonWithoutTips: 0,
      });
    }
    dispatch(setPeopleData(tipArray));
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
              <span>$0</span>
            </div>
            <div className="span-result">
              <span>Total Per Person:</span>
              <span>$0</span>
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
        {equal === 3 && <ListPeople />}
      </div>
    </div>
  );
}

export default Form;
