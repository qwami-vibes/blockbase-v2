import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { setAlert } from "../actions";
import ErrorHandlers from "../components/ErrorHandlers";

import { signupUser } from "../api/api";

import logoLarge from "../assets/blockbase-large.png";
import { accentColor, colorWhite, lightGrey, successColor } from "../Variables";

const Signin = ({ authType, setAuthType }) => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(false);

  const emailValue = useRef();
  const passwordValue = useRef();
  const confirmPasswordValue = useRef();

  const submitHandler = (e) => {
    const password = passwordValue.current.value;
    const email = emailValue.current.value;
    const confirmPassword = confirmPasswordValue.current.value;

    //* Prevent form from reloading the page
    e.preventDefault();

    //* set the pending state to true
    setPending(true);

    if (password.length <= 6) {
      setPending(false);

      dispatch(
        setAlert({
          message: "Password too short. Should be more than 6 characters",
          type: "warning",
        })
      );
    } else if (password !== confirmPassword) {
      setPending(false);

      dispatch(
        setAlert({
          message: "Passwords do not match. Try again",
          type: "warning",
        })
      );
    } else {
      setPending(false);

      //* fires promise funciton to create account
      signupUser(email, password)
        .then((user) => {
          // * sigin out user after the verification code has ben sent
          // signoutUser()
          //   .then()
          //   .catch((err) => {
          //     <ErrorHandlers code={err.code} />;
          //   });

          //* shows alert to user that the account was created successfully
          dispatch(
            setAlert({
              message:
                "Successfully created account. Please verify email to continue",
              type: "success",
            })
          );

          //* Switch component to login page
          setAuthType(!authType);
        })
        .catch((err) => {
          console.log(err.code);

          //* Error handler functions
          ErrorHandlers(dispatch, err.code);

          //* remove disabled from button
          setPending(false);
        });
    }
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
          required
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
          required
        />
        <label htmlFor="password">Password</label>
      </StyledInput>
      <StyledInput>
        <input
          ref={confirmPasswordValue}
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password"
          required
        />
        <label htmlFor="password">Confirm Password</label>
      </StyledInput>
      <StyledSubmit>
        <button type="submit" disabled={pending}>
          Create Account
        </button>
      </StyledSubmit>
      <StyledDisclaimer>
        Already have an account?
        <span onClick={() => setAuthType(!authType)}> &nbsp; Login </span>
      </StyledDisclaimer>
    </StyledContainerInputs>
  );
};

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
    text-transform: capitalize;

    &:disabled {
      cursor: not-allowed;
      background: lightgreen;
      color: #ffffff83;
    }
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

export default Signin;
