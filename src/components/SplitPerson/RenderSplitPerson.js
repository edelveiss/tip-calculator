import React from "react";
import "./SplitPerson.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function SplitPersonContainer({
  spl,
  formChangeName,
  splObject,
  onChange,
  editToggleTotal,
  deletePerson,
  formSubmit,
  editNameToggle,
  editToggleName,
  editToggle,
}) {
  return (
    <div>
      <div className="split-line">
        <div className="edit-name">
          {editNameToggle ? (
            <form onSubmit={formChangeName} className="split-form-name">
              <input
                className="split-input-name"
                name="name"
                type="text"
                defaultValue={splObject.name}
                onChange={onChange}
              />
            </form>
          ) : (
            <div>{splObject.name}</div>
          )}
          <div
            className="edit-amount"
            onClick={() => editToggleName()}
            style={{ color: "grey", cursor: "pointer" }}
          >
            edit
          </div>
        </div>

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

export default SplitPersonContainer;
