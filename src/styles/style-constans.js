import styled from "@emotion/styled";

export const MiddleContainer = styled("div")`
  background-color: #efedde;
  display: flex;
  flex-direction: column;
  height: 27rem;
  overflow: auto;
`;
export const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
`;

export const LabelElement = styled("label")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  font-size: 0.9rem;
  color: #aeaea4;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 1.2rem;
`;

export const InputElement = styled("input")`
  margin: 5px 0 0;
  display: block;
  border: 3px solid #87eb5d;
  border-radius: 10px;
  padding: 8px;
  transition: all 0.3s;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  background-color: white;
  width: ${(props) => props.width};
  margintop: ${(props) => props.marginTop};
  marginbottom: ${(props) => props.marginBottom};

  &:focus {
    outline: none;
    border-color: #03be97;
  }
`;
