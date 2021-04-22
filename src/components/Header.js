import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import bannerImg from "../assets/banner2.jpeg";
const HeaderTop = styled("div")`
  width: 100%;
  height: 1.7rem;
  background-color: #449641;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Triangle = styled("div")`
  margin: 0.2rem;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid white;
  margin-right: 0.5rem;
`;
const Shape = styled("div")(
  {
    width: 8,
    height: 8,
    margin: "0.2rem",
    background: "white",
    borderRadius: 0,
  },
  (props) => ({
    borderRadius: props.radius,
  })
);
const TotalTip = styled("div")`
  height: 15em;
  border-bottom: 1px solid green;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const TotalTipPH1 = styled("div")(
  {
    textTransform: "uppercase",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    top: "45%",
  },
  (props) => ({
    fontSize: props.size,
    top: props.top,
  })
);
const BannerCircle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const LittleCircle = styled("div")(
  {
    width: "5px",
    height: "5px",
    margin: "0.15rem",
    marginRight: "1.3rem",
    background: "white",
    borderRadius: "50%",
    marginTop: 0,
  },
  (props) => ({
    marginTop: props.top,
  })
);

function Header() {
  const { totalAmount, tipPercent } = useSelector((state) => state.amount);

  return (
    <div className="header">
      <HeaderTop>
        <Shape></Shape>
        <Shape radius={"50%"}></Shape>

        <Triangle></Triangle>
      </HeaderTop>
      <TotalTip img={bannerImg}>
        <BannerCircle>
          <LittleCircle top={"1rem"}></LittleCircle>
          <LittleCircle></LittleCircle>
          <LittleCircle></LittleCircle>
        </BannerCircle>
        <TotalTipPH1>Total + {tipPercent}% tip </TotalTipPH1>
        <TotalTipPH1 size={"3rem"} top={"60%"}>
          ${totalAmount}
        </TotalTipPH1>
      </TotalTip>
    </div>
  );
}

export default Header;
