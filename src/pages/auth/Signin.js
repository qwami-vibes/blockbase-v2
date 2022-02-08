import React, { useState, useRef } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signinUser } from "../../api/api";
import { setAlert, setUser } from "../../redux/actions";

import Signup from "./Signup";
import Alerts from "../../components/Alerts";
import ErrorHandlers from "../../components/ErrorHandlers";

import { device } from "../../helpers/Mediaqueries";
import logoLarge from "../../assets/blockbase-large.png";
import topLeftSvg from "../../assets/svg/top-left.svg";
import bottomRightSvg from "../../assets/svg/bottom-right.svg";
import blockBaseImg from "../../assets/blockbase-image.jpg";

import {
  accentColor,
  colorWhite,
  lightGrey,
  successColor,
  bgColor,
} from "../../helpers/Variables";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useSelector((state) => state.alert);

  const [authType, setAuthType] = useState(false);
  const [pending, setPending] = useState(false);

  const emailValue = useRef();
  const passwordValue = useRef();

  const submitHandler = (e) => {
    const email = emailValue.current.value;
    const password = passwordValue.current.value;

    //* preventing the form from reloading the page
    e.preventDefault();

    //* set true pending to disable button
    setPending(true);

    //* sign in user with the sigin from firebase auth
    signinUser(email, password)
      .then((userCredentials) => {
        //* creating user data to add to state
        const data = {
          user: userCredentials.user.providerData[0],
          userId: userCredentials.user.uid,
          emailVerified: userCredentials.user.emailVerified,
        };

        //* push current user data to sate
        dispatch(setUser(data));

        //* log user in by sending user to dashboard page if verified
        setTimeout(() => {
          userCredentials.user.displayName
            ? navigate("/watch")
            : navigate("/onboarding");
        }, 3500);

        //* alert user on login
        dispatch(
          setAlert({
            message: "Successfully logged in",
            type: "success",
          })
        );
      })
      .catch((err) => {
        //* remove disabled from button
        setPending(false);

        console.log(err);

        //* Error handler for the error actions
        ErrorHandlers(dispatch, err.code);
      });
  };

  return (
    <StyledSignup>
      {alert.visible && <Alerts />}
      <StyledContainer>
        <img src={topLeftSvg} className="svg-left" alt="background-svg" />
        <img src={bottomRightSvg} className="svg-right" alt="background-svg" />
        <StyledContainerHolder>
          <StyledContainerAuth>
            {authType ? (
              <Signup authType={authType} setAuthType={setAuthType} />
            ) : (
              <StyledContainerInputs onSubmit={submitHandler}>
                <StyledLogo>
                  <img className="logo-large" src={logoLarge} alt="Logo" />
                </StyledLogo>
                <StyledIntroMain>Welcome back!!</StyledIntroMain>
                <StyledIntroSub>
                  Your account is around the corner monitoring what you asked
                  for. Login to continue
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
                  <button type="submit" disabled={pending}>
                    Log in
                  </button>
                </StyledSubmit>
                <StyledDisclaimer>
                  Don't have an account? Dont worry!
                  <span onClick={() => setAuthType(!authType)}>
                    &nbsp; Signup
                  </span>
                </StyledDisclaimer>
              </StyledContainerInputs>
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

  @media screen and (${device.desktop}) {
    max-width: 125rem;
  }

  & img {
    width: 30rem;
    position: fixed;

    &.svg-right {
      right: 0;
      bottom: 0;
      transform: translate(-90%, -35px);

      @media screen and (${device.desktop}) {
        transform: translate(-110%, -15%);
      }
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

  @media screen and (${device.desktop}) {
    flex: 0 0 40%;
  }
`;

const StyledContainerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 45%;
    height: 100%;
    object-fit: cover;

    @media screen and (${device.desktop}) {
      width: 50%;
    }
  }
`;

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
