import React, { useEffect, useState } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import RenderFormPage from "./RenderFormPage";
import {
  setAmount,
  setPeopleData,
  updateTotalAmount,
  updateTotalTip,
} from "../../state/actions";
function FormContainer() {
  const { price, tipPercent, numberOfPeople } = useSelector(
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
  const calculateResult = (e) => {
    console.log("here");
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
        name: `Person ${String(i + 1)}`,
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
    <RenderFormPage
      formState={formState}
      inputChange={inputChange}
      percentInput={percentInput}
      resetForm={resetForm}
      calculateResult={calculateResult}
      equal={equal}
    />
  );
}

export default FormContainer;
