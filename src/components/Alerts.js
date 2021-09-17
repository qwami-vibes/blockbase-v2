import React from "react";
import styled, { keyframes } from "styled-components";
import Alert from "./Alert";

import { useSelector } from "react-redux";

const Alerts = () => {
  const alert = useSelector((state) => state.alert);

  return (
    <StyledAlerts>
      {alert && <Alert message={alert.message} type={alert.type} />}
    </StyledAlerts>
  );
};

const slideIn = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  
  to {
    transform: translate(0);
    opacity: 1;
  }
`;

const StyledAlerts = styled.div`
  position: fixed;
  z-index: 100;
  width: 40%;
  top: 3%;
  left: 30%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0.5rem 1rem;
  animation: ${slideIn} 0.5s ease-in 0.1s alternate backwards;
`;

export default Alerts;
