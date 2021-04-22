import React from "react";
import "./Split.css";
import { SplitPerson } from "./SplitPerson";
import { useSelector } from "react-redux";

function Split() {
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  const state = useSelector((state) => state);
  console.log("state split", state);

  return (
    <div className="split-container">
      <div className="split">
        {peopleData.map((spl) => (
          <SplitPerson spl={spl} key={spl.id} />
        ))}
      </div>
    </div>
  );
}

export default Split;
