import React from "react";
import "./SplitPerson.css";
import styled from "@emotion/styled";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  MiddleContainer,
  FormContainer,
  LabelElement,
  InputElement,
} from "../../styles/style-constans";

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
    <div className="split-line">
      <div className="edit-name">
        {editNameToggle ? (
          <FormContainer onSubmit={formChangeName}>
            <InputElement
              width={"5rem"}
              marginTop={0}
              marginBottom={0}
              // className="split-input-name"
              name="name"
              type="text"
              defaultValue={splObject.name}
              onChange={onChange}
            />
          </FormContainer>
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
            <FormContainer onSubmit={formSubmit}>
              <InputElement
                width={"3.5rem"}
                marginTop={0}
                marginBottom={0}
                // className="split-input"
                name="totalPerPersonWithoutTips"
                type="number"
                min="0"
                step=".01"
                defaultValue={splObject.totalPerPersonWithoutTips}
                onChange={onChange}
              />
            </FormContainer>
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
  );
}

export default SplitPersonContainer;
