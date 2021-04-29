import React from "react";
import styled from "@emotion/styled";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { FormContainer, InputElement } from "../../styles/style-constans";

const SplitLine = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #e2e1d9;
  display: flex;
  margin: 10px 0;
  font-size: 0.9rem;
  color: #aeaea4;
  text-transform: uppercase;
  font-weight: 700;
`;
const EditName = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const SplitAmount = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const EditEAmount = styled("div")`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
`;
const Spl = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  margin-bottom: 0.8rem;
  color: grey;
  font-size: 1.2rem;
`;
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
    <SplitLine>
      <EditName>
        {editNameToggle ? (
          <FormContainer onSubmit={formChangeName}>
            <InputElement
              width={"5rem"}
              marginTop={0}
              marginBottom={0}
              name="name"
              type="text"
              defaultValue={splObject.name}
              onChange={onChange}
            />
          </FormContainer>
        ) : (
          <div>{splObject.name}</div>
        )}
        <EditEAmount
          onClick={() => editToggleName()}
          style={{ color: "grey", cursor: "pointer" }}
        >
          edit
        </EditEAmount>
      </EditName>

      <SplitAmount>
        <Spl>
          {editToggle ? (
            <FormContainer onSubmit={formSubmit}>
              <InputElement
                width={"4.5rem"}
                marginTop={0}
                marginBottom={0}
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
        </Spl>
        <EditEAmount>
          <div onClick={() => editToggleTotal()}>
            <EditIcon style={{ color: "green", cursor: "pointer" }} />
          </div>
          <DeleteForeverIcon
            style={{ color: "#A3001F", cursor: "pointer" }}
            onClick={() => deletePerson(splObject)}
          />
        </EditEAmount>
      </SplitAmount>
    </SplitLine>
  );
}

export default SplitPersonContainer;
