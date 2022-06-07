import React, { useState, useRef } from "react";
import styled from "styled-components";
import { sendUserEmailVerification, updateUserProfile } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";

import {
  accentColor,
  dangerColor,
  lightGrey,
  successColor,
} from "../../../helpers/Variables";
import ErrorHandlers from "../../../components/ErrorHandlers";
import { setAlert } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import Alerts from "../../../components/Alerts";

const Onboarding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const alert = useSelector((state) => state.alert);

  const [disabled, setDisabled] = useState(true);
  const [displayName, setDisplayName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const formEle = useRef();

  const handleEmailVerification = () => {
    sendUserEmailVerification()
      .then(
        dispatch(
          setAlert({
            message: "Email verification sent successfully",
            type: "success",
          })
        )
      )
      .catch((err) => {
        console.log(err);

        //* Error handler for the error actions
        ErrorHandlers(dispatch, err.code);
      });
  };

  const handleCheckValidity = () => {
    setDisabled(!formEle.current.checkValidity());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const data = { displayName, photoURL: null, phoneNumber };

    updateUserProfile(data)
      .then(() => {
        setTimeout(() => {
          navigate("/watch");
        }, 3500);

        dispatch(
          setAlert({
            message: "Profile updated successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        console.log(err);

        //* Error handler for the error actions
        ErrorHandlers(dispatch, err.code);
      });
  };

  return (
    <StyledOnboarding>
      {alert.visible && <Alerts />}
      <StyledContainer>
        <StyledTitle>
          <span>update profile</span>
        </StyledTitle>
        {auth.emailVerified ? (
          <StyledVerified>
            <span className="verified">Your email is verified!!</span>
            <button className="success" onClick={handleEmailVerification}>
              Verified email
            </button>
          </StyledVerified>
        ) : (
          <StyledVerified>
            <span>Your email is not verified, please verify email!!</span>
            <button onClick={handleEmailVerification}>Verify email</button>
          </StyledVerified>
        )}
        <StyledForm
          ref={formEle}
          onChange={handleCheckValidity}
          onSubmit={handleSubmitForm}
        >
          <StyledGroupPic>
            <label htmlFor="photoUrl">Choose a profile pic</label>
            <input type="file" name="photo" id="photoUrl" />
          </StyledGroupPic>
          <StyledGroup>
            <label htmlFor="fullname">Full Name</label>
            <input
              onChange={(e) => setDisplayName(e.target.value)}
              type="text"
              name="fullname"
              id="fullname"
              placeholder="eg. Kwaame Ofori-Adjekum"
              required
            />
          </StyledGroup>
          <StyledGroup>
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              name="phone"
              id="phone"
              placeholder="eg. +233658965656"
              required
            />
          </StyledGroup>
          <StyledButton>
            <button disabled={disabled} type="submit">
              Complete Profile Update
            </button>
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledOnboarding>
  );
};

const StyledOnboarding = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    font-size: large;
    font-family: "Clash Grotesk", sans-serif;
  }
`;

const StyledContainer = styled.div`
  width: 30%;
  max-width: 80%;
  height: 65vh;
  display: grid;
  grid-template-rows: 15% 10% 1fr;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font: 600 3rem "Clash Grotesk", sans-serif;
    text-transform: capitalize;
  }
`;

const StyledVerified = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button.success {
    background-color: ${successColor};
    cursor: default;
    /* opacity: 0.5; */
  }

  button {
    padding: 2rem 4rem;
    color: #fff;
    background-color: ${dangerColor};
    font-size: medium;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const StyledGroup = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  input[type="file"] {
    display: none;
  }

  input {
    padding: 2rem;

    &::placeholder {
      color: ${lightGrey};
    }
  }
`;

const StyledGroupPic = styled(StyledGroup)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  label {
    background-color: ${dangerColor};
    padding: 2rem 3rem;
    color: #fff;
    cursor: pointer;
  }
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin: 0 auto;

  button {
    background-color: ${successColor};
    cursor: pointer;
    padding: 2rem;
    text-transform: capitalize;
    font-size: large;
    border-radius: 0.5rem;
    color: #fff;

    &:disabled {
      background-color: ${accentColor};
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export default Onboarding;
