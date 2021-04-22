import React from "react";
import "./Form.css";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import {
  MiddleContainer,
  FormContainer,
  LabelElement,
  InputElement,
} from "../../styles/style-constans";

const InputLabel = styled("div")(
  {
    borderBottom: "1px solid #e2e1d9",
  },
  (props) => ({
    borderBottom: props.borderBottom,
  })
);
const PercentBtn = styled("div")`
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: black;
`;
const Btn = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const MainBtn = styled("button")`
  width: 150px;
  display: inline-block;
  padding: 8px 11px;
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  border: 0;
  border-radius: 5px;
  letter-spacing: 2px;
  outline: none;
  background-color: #16be70;
  background-image: linear-gradient(to right, #00ab41, #006e86);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: none;
    background-color: #16be70;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }
`;
const Result = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  font-size: 1.3rem;
  color: rgb(112, 110, 110);
`;
const SpanResult = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 0.3rem;
`;
const ResultPeople = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

function RenderFormPage({
  formState,
  inputChange,
  percentInput,
  resetForm,
  calculateResult,
  equal,
}) {
  const { totalTip } = useSelector((state) => state.amount);
  const peopleData = useSelector((state) => state.peopleData.peopleData);

  return (
    <MiddleContainer>
      <FormContainer onSubmit={calculateResult}>
        <InputLabel>
          <LabelElement htmlFor="price">
            Total cost (excluding tip)
            <InputElement
              name="price"
              type="number"
              min="0"
              step=".01"
              value={formState.price}
              onChange={inputChange}
            />
          </LabelElement>
        </InputLabel>
        <InputLabel>
          <LabelElement htmlFor="tipPercent">
            Tip percentage added
            <PercentBtn>
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
            </PercentBtn>
          </LabelElement>
        </InputLabel>
        <InputLabel borderBottom={"none"}>
          <LabelElement htmlFor="numberOfPeople">
            Number of People
            <InputElement
              name="numberOfPeople"
              type="number"
              min="1"
              value={formState.numberOfPeople}
              onChange={inputChange}
            />
          </LabelElement>
        </InputLabel>
        <Btn>
          <MainBtn type="submit">Calculate</MainBtn>
          <MainBtn onClick={resetForm}>Reset</MainBtn>
        </Btn>
      </FormContainer>
      {}
      <Result>
        <SpanResult>
          <span>Total Tip:</span>
          <span>${totalTip}</span>
        </SpanResult>
        {equal === 0 && (
          <ResultPeople>
            <SpanResult>
              <span>Tip per person: </span>
              <span>$0.00</span>
            </SpanResult>
            <SpanResult>
              <span>Total Per Person:</span>
              <span>$0.00</span>
            </SpanResult>
          </ResultPeople>
        )}
        {equal === 1 && (
          <ResultPeople>
            <SpanResult>
              <span>Tip per person: </span>
              <span>${peopleData[0].tipPerPerson}</span>
            </SpanResult>
            <SpanResult>
              <span>Total Per Person:</span>
              <span>${peopleData[0].totalPerPerson}</span>
            </SpanResult>
          </ResultPeople>
        )}
        {/** 
        {equal === 3 && <ListPeople />}
*/}
      </Result>
    </MiddleContainer>
  );
}

export default RenderFormPage;
