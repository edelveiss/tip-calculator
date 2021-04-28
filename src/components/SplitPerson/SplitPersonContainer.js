import React, { useState } from "react";
import RenderSplitPerson from "./RenderSplitPerson";
import { useSelector, useDispatch } from "react-redux";
import {
  setPeopleData,
  updateTotalAmount,
  updateTotalTip,
} from "../../state/actions";

function SplitPersonContainer({ spl }) {
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  const { totalAmount, totalTip } = useSelector((state) => state.amount);
  const { price, tipPercent } = useSelector((state) => state.amount);
  const [editToggle, setEditToggle] = useState(false);
  const [editNameToggle, setEditNameToggle] = useState(false);
  const [splObject, setSplObject] = useState(spl);
  const [splObjectOld] = useState(spl);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSplObject({
      ...splObject,
      [e.target.name]: e.target.value,
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
  const editToggleName = () => {
    setEditNameToggle(!editNameToggle);
  };
  const formChangeName = (e) => {
    e.preventDefault();
    let editPeopleData = [];
    setEditNameToggle(!editNameToggle);
    editPeopleData = peopleData.map((el) => {
      if (el.id === splObject.id) {
        return {
          ...el,
          name: splObject.name,
        };
      } else return el;
    });

    dispatch(setPeopleData(editPeopleData));
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
      if (el.id === splObject.id) {
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
    <RenderSplitPerson
      spl={spl}
      formChangeName={formChangeName}
      splObject={splObject}
      onChange={onChange}
      editToggleTotal={editToggleTotal}
      deletePerson={deletePerson}
      formSubmit={formSubmit}
      editNameToggle={editNameToggle}
      editToggleName={editToggleName}
      editToggle={editToggle}
    />
  );
}

export default SplitPersonContainer;
