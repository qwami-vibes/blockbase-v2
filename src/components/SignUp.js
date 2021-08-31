import React, { useRef } from "react";
import styled from "styled-components";

import logoLarge from "../assets/blockbase-large.png";
import { accentColor, colorWhite, lightGrey, successColor } from "../Variables";

const SignUp = ({ authType, setAuthType }) => {
  const emailValue = useRef();
  const passwordValue = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContainerInputs onSubmit={submitHandler}>
      <StyledLogo>
        <img className="logo-large" src={logoLarge} alt="Logo" />
      </StyledLogo>
      <StyledIntroMain>Don't be a stranger</StyledIntroMain>
      <StyledIntroSub>
        Sign up with us and track all your favorite crypto currencies in one
        place as you transact on the go
      </StyledIntroSub>
      <StyledInput>
        <input
          ref={emailValue}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <label htmlFor="email">Email Address</label>
      </StyledInput>
      <StyledInput>
        <input
          ref={passwordValue}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <label htmlFor="password">Password</label>
      </StyledInput>
      <StyledSubmit>
        <button type="submit">Create Account</button>
      </StyledSubmit>
      <StyledDisclaimer>
        Already have an account?
        <span onClick={() => setAuthType(!authType)}> &nbsp; Login </span>
      </StyledDisclaimer>
    </StyledContainerInputs>
  );
};

export default SignUp;

const StyledContainerInputs = styled.form`
  height: 60vh;
  background: ${colorWhite};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: grid;
  grid-template-rows: 0.7fr 0.5fr repeat(4, 0.8fr) 0.5fr;
  padding: 1rem 5rem;
`;

const StyledLogo = styled.div`
  .logo-large {
    width: 14rem;
  }
`;

const StyledIntroMain = styled.div`
  color: ${accentColor};
  font-size: 2rem;
`;

const StyledIntroSub = styled.div`
  font-size: 1.5rem;
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  label {
    position: absolute;
    font-size: 1.3rem;
    left: 7%;
    top: 39%;
    transform: translateY(-2.5rem);
    transition: all 0.4s ease-in;
  }

  input {
    position: relative;
    font-size: 1.3rem;
    padding: 1rem 2rem;
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${lightGrey};
    border-left: 1px solid ${lightGrey};
    border-right: 1px solid ${lightGrey};
    z-index: 1;
  }

  input:placeholder-shown + label {
    transform: translateY(0);
  }
`;

const StyledSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: ${successColor};
    border: 0;
    padding: 1.5rem 5rem;
    color: ${colorWhite};
    width: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

const StyledDisclaimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.45rem;

  span {
    color: ${accentColor};
    cursor: pointer;
  }
`;
