import React, { useState } from "react";
import "./Split.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import {
  setPeopleData,
  updateTotalAmount,
  updateTotalTip,
} from "../state/actions";

function SplitPerson({ spl }) {
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  const { totalAmount, totalTip } = useSelector((state) => state.amount);
  const { price, tipPercent } = useSelector((state) => state.amount);
  const [editToggle, setEditToggle] = useState(false);
  const [splObject, setSplObject] = useState(spl);
  const [splObjectOld] = useState(spl);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSplObject({
      ...splObject,
      totalPerPersonWithoutTips: e.target.value,
    });
  };
  const deletePerson = (person) => {
    let filterArr = peopleData.filter((el) => el.name !== person.name);
    dispatch(setPeopleData(filterArr));
    if (filterArr.length === 0) {
      dispatch(updateTotalAmount(0));
      dispatch(updateTotalTip(0));
    } else {
      dispatch(updateTotalAmount(totalAmount - person.totalPerPerson));
      dispatch(updateTotalTip(totalTip - person.tipPerPerson));
    }
  };
  const editToggleTotal = () => {
    setEditToggle(!editToggle);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const tipPP = (
      (Number(splObject.totalPerPersonWithoutTips) * Number(tipPercent)) /
      100
    ).toFixed(2);
    const tPP = (
      Number(splObject.totalPerPersonWithoutTips) + Number(tipPP)
    ).toFixed(2);

    setSplObject({
      ...splObject,
      tipPerPerson: tipPP,
      totalPerPerson: tPP,
    });

    dispatch(
      updateTotalAmount(
        totalAmount - Number(splObjectOld.totalPerPerson) + Number(tPP)
      )
    );

    const totalTipVar = (
      ((Number(price) -
        Number(splObjectOld.totalPerPersonWithoutTips) +
        Number(splObject.totalPerPersonWithoutTips)) *
        Number(tipPercent)) /
      100
    ).toFixed(2);
    dispatch(updateTotalTip(totalTipVar));

    let editPeopleData = [];
    setEditToggle(!editToggle);
    editPeopleData = peopleData.map((el) => {
      if (el.name === splObject.name) {
        return {
          name: splObject.name,
          id: splObject.id,
          tipPerPerson: tipPP,
          totalPerPerson: tPP,
          totalPerPersonWithoutTips: splObject.totalPerPersonWithoutTips,
        };
      } else return el;
    });

    dispatch(setPeopleData(editPeopleData));
  };

  return (
    <div>
      <div className="split-line">
        <div>{splObject.name}</div>
        <div className="split-amount">
          <div className="spl">
            {editToggle ? (
              <form onSubmit={formSubmit} className="split-form">
                <input
                  className="split-input"
                  name="totalPerPersonWithoutTips"
                  type="number"
                  min="0"
                  step=".01"
                  defaultValue={splObject.totalPerPersonWithoutTips}
                  onChange={onChange}
                />
              </form>
            ) : (
              <span> {splObject.totalPerPersonWithoutTips}</span>
            )}
            <span>&nbsp;+&nbsp;</span>
            <span>{splObject.tipPerPerson}</span> <span>&nbsp;=&nbsp;</span>
            <span>{splObject.totalPerPerson}</span>
          </div>
          <div className="edit-amount">
            <div onClick={() => editToggleTotal()}>
              <EditIcon style={{ color: "green", cursor: "pointer" }} />
            </div>
            <DeleteForeverIcon
              style={{ color: "#A3001F", cursor: "pointer" }}
              onClick={() => deletePerson(splObject)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitPerson;
