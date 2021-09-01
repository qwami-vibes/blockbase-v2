import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ProfilePic from "../assets/background-image.png";
import ProfileImage from "../assets/blockbase-image.jpg";

import { ArrowForwardOutline } from "react-ionicons";
import { colorWhite, greyDarkest } from "../Variables";

const TransInfo = ({ amount }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledTransInfo className={theme ? "dark" : null}>
      <img src={ProfilePic} alt="Profile Pic" />
      <ArrowForwardOutline width="2rem" height="2rem" />
      {`$ ${amount}.00`}
      <ArrowForwardOutline width="2rem" height="2rem" />
      <img src={ProfileImage} alt="Profile Pic" />
    </StyledTransInfo>
  );
};

const StyledTransInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 100%;

  img {
    object-fit: cover;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  &.dark {
    background: ${greyDarkest};

    svg {
      color: ${colorWhite};
      fill: ${colorWhite};
    }
  }
`;

export default TransInfo;
