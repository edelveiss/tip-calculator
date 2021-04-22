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
export const InputElement = styled("input")(
  {
    margin: "5px 0 0",
    display: "block",
    border: "3px solid #87eb5d",
    borderRadius: 10,
    padding: 8,
    transition: "all 0.3s",
    fontSize: "1.1rem",
    letterSpacing: 0.5,
    backgroundColor: "white",
    width: "60%",
  },
  (props) => ({
    width: props.width,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
  })
);

const InputElementFocus = styled("input:focus")`
    outline: "none",
    borderColor: "#03be97",
`;
// export const InputElement = styled("input")`
//   margin: 5px 0 0;
//   display: block;
//   border: 3px solid #87eb5d;
//   border-radius: 10px;
//   padding: 8px;
//   transition: all 0.3s;
//   font-size: 1.1rem;
//   letter-spacing: 0.5px;
//   background-color: white;

//   &:focus {
//     outline: none;
//     border-color: #03be97;
//   }
// `;
