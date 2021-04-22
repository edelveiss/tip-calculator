import React from "react";
import styled from "@emotion/styled";
import { SplitPerson } from "./SplitPerson";
import { useSelector } from "react-redux";
import { MiddleContainer } from "../styles/style-constans";

const SplitGrid = styled("div")`
  margin: 0 auto;
  width: 80%;
  margin-top: 2rem;
`;

function Split() {
  const peopleData = useSelector((state) => state.peopleData.peopleData);
  const state = useSelector((state) => state);
  console.log("state split", state);

  return (
    <MiddleContainer>
      <SplitGrid>
        {peopleData.map((spl) => (
          <SplitPerson spl={spl} key={spl.id} />
        ))}
      </SplitGrid>
    </MiddleContainer>
  );
}

export default Split;
