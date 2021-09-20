import React, { useRef, useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { currentUser } from "../api/api";
import { colorWhite, secondaryColor, successColor } from "../Variables";
import { setAlert } from "../actions";

const UpdateForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const fullName = useRef();
  const photoUrl = useRef();
  const [verifyStatus, setVerifyStatus] = useState(false);

  //* function handler that submits the form in this section
  const submitHandler = (e) => {
    //* prevent form from reloading the page
    e.preventDefault();

    currentUser
      .updateProfile({
        displayName: fullName.current.value,
        photoUrl: photoUrl.current.value,
      })
      .then(() => {
        setTimeout(() => {
          history.push("/dashboard");
        }, 3500);

        dispatch(
          setAlert({ message: "Profile update succesful", type: "success" })
        );
      })
      .catch((err) => console.log(err.code, err.message));
  };

  //* function handler to handle email verification
  const handleVerifyEmail = () => {
    currentUser
      .sendEmailVerification()
      .then(() => {
        setVerifyStatus(true);
      })
      .catch((err) => console.log(err.message, err.code));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledFormGroup>
        <label htmlFor="fullname">Update your full name (Required)</label>
        <input
          ref={fullName}
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full name"
          required
        />
      </StyledFormGroup>

      <StyledFormGroup>
        <label htmlFor="photoUrl">Insert your profile picture (Optional)</label>
        <input ref={photoUrl} type="file" name="photoUrl" id="photoUrl" />
      </StyledFormGroup>

      <StyledFormGroup>
        <button type="submit">Update Profile</button>
      </StyledFormGroup>

      <StyledFormGroup status={verifyStatus}>
        <label htmlFor="emailVerified">Please verify your email</label>
        <button className="email-verify" onClick={handleVerifyEmail}>
          {verifyStatus ? "Verification Email Sent" : "Send Verification Email"}
        </button>
      </StyledFormGroup>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 30vw;
  padding: 1rem;
  height: 70vh;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;

  label {
    font-size: 1.5rem;
  }

  input[type="text"] {
    border: 0;
    background: #dddddd;
    border-radius: 1rem;
    color: #747474;
    padding: 1.8rem 3rem;
    width: 90%;
    font-size: 1.5rem;
    margin: 0 auto;

    &::placeholder {
      color: currentColor;
    }
  }

  button {
    width: 90%;
    margin: 0 auto;
    background: ${successColor};
    color: ${colorWhite};
    border-radius: 1rem;
    padding: 2rem 5rem;
    font-size: 1.6rem;
    cursor: pointer;
  }

  .email-verify {
    width: 60%;
    padding: 1.5rem;
    background: ${(props) => (props.status ? successColor : secondaryColor)};
  }
`;

export default UpdateForm;
