import React from "react";
import styled from "@emotion/styled";
import { ChevronLeft } from "@emotion-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@emotion-icons/boxicons-regular/ChevronRight";
import { Link, useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  const FooterDiv = styled("div")`
    width: 100%;
    height: 2rem;
    background-color: #a7a6a1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const FooterEelement = styled("div")`
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
  `;

  const SplitChevronLeft = styled(ChevronLeft)`
    color: white;
    width: 2rem;
  `;
  const SplitChevronRight = styled(ChevronRight)`
    color: white;
    width: 2rem;
  `;
  const SplitPage = styled("span")`
    color: white;
    letter-spacing: 0.2rem;
  `;

  return (
    <FooterDiv>
      {history.location.pathname === "/" ? (
        <Link to="/split" style={{ textDecoration: "none" }}>
          <FooterEelement>
            <SplitPage> Split</SplitPage>
            <SplitChevronRight />
          </FooterEelement>
        </Link>
      ) : (
        <Link to="/" style={{ textDecoration: "none" }}>
          <FooterEelement>
            <SplitChevronLeft />

            <SplitPage> Home</SplitPage>
          </FooterEelement>
        </Link>
      )}
    </FooterDiv>
  );
}

export default Footer;
