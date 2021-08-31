import React, { useState } from "react";
import styled from "styled-components";

import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

import { bgColor, colorWhite } from "../Variables";
import topLeftSvg from "../assets/svg/top-left.svg";
import bottomRightSvg from "../assets/svg/bottom-right.svg";
import blockBaseImg from "../assets/blockbase-image.jpg";

const Signup = () => {
  const [authType, setAuthType] = useState(false);

  return (
    <StyledSignup>
      <StyledContainer>
        <img src={topLeftSvg} className="svg-left" alt="background-svg" />
        <img src={bottomRightSvg} className="svg-right" alt="background-svg" />
        <StyledContainerHolder>
          <StyledContainerAuth>
            {authType ? (
              <LogIn authType={authType} setAuthType={setAuthType} />
            ) : (
              <SignUp authType={authType} setAuthType={setAuthType} />
            )}
          </StyledContainerAuth>
          <StyledContainerImage>
            <img src={blockBaseImg} alt="Blockbase Asset" />
          </StyledContainerImage>
        </StyledContainerHolder>
      </StyledContainer>
    </StyledSignup>
  );
};

const StyledSignup = styled.div`
  background: ${bgColor};
  position: relative;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  background: ${colorWhite};
  max-height: 90vh;
  height: 90vh;
  width: 65vw;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  & img {
    width: 30rem;
    position: fixed;

    &.svg-right {
      right: 0;
      bottom: 0;
      transform: translate(-90%, -35px);
    }
  }
`;

const StyledContainerHolder = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;

const StyledContainerAuth = styled.div`
  flex: 0 0 50%;
  height: 80%;
  margin: auto 0;
`;

const StyledContainerImage = styled.div`
  flex: 1;

  img {
    width: 45%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Signup;
