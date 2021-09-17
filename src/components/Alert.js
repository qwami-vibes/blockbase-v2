import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  colorWhite,
  dangerColor,
  infoColor,
  successColor,
  warningColor,
} from "../Variables";
import { resetAlert } from "../actions";

const Alert = ({ message, type }) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(resetAlert());
  }, 3000);

  return <StyledAlert type={type}>{message}</StyledAlert>;
};

const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(prop) =>
    prop.type === "success"
      ? successColor
      : prop.type === "warning"
      ? warningColor
      : prop.type === "info"
      ? infoColor
      : dangerColor};

  width: 60%;
  margin: 0 auto;
  font-size: 1.5rem;
  color: ${colorWhite};
  padding: 1rem;
  border-radius: 1rem;
`;

export default Alert;
