import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Alerts from "../../components/Alerts";
import { sendUserResetEmail } from "../../api/api";
import { setAlert } from "../../redux/actions";
import ErrorHandlers from "../../components/ErrorHandlers";

const PasswordReset = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const emailRef = useRef();

  const handleSubmitReset = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    sendUserResetEmail(email)
      .then(() => {
        dispatch(
          setAlert({
            message: "Password reset link sent successfully",
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
    <StyledPasswordReset>
      {alert.visible && <Alerts />}
      <StyledContainer>
        <StyledTitle>
          <h2>reset password</h2>
        </StyledTitle>
        <StyledForm onSubmit={handleSubmitReset}>
          <StyledGroup>
            <input
              ref={emailRef}
              type="email"
              placeholder="enter email address"
              required
            />
          </StyledGroup>
          <StyledGroup>
            <button>send reset link</button>
          </StyledGroup>
        </StyledForm>
        <div>
          <Link to="/login">back to homepage</Link>
        </div>
      </StyledContainer>
    </StyledPasswordReset>
  );
};

export default PasswordReset;

const StyledPasswordReset = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div``;

const StyledTitle = styled.div``;

const StyledForm = styled.form``;

const StyledGroup = styled.div``;
