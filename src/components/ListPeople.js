import React from "react";
import "./ListPeople.css";
import { useSelector } from "react-redux";
function ListPeople() {
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  return (
    <div className="list-people">
      {peopleData.map((el) => (
        <div key={el.id} className="result-non-equal">
          <div>{el.name}</div>
          <div>tip:&nbsp;${el.tipPerPerson}</div>
          <div>total:&nbsp;${el.totalPerPerson}</div>
        </div>
      ))}
    </div>
  );
}

export default ListPeople;
