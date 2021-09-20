import React from "react";
import styled from "styled-components";

import UpdateForm from "../components/UpdateForm";
import { secondaryColor } from "../Variables";

const newUserProfile = () => {
  return (
    <StyledProfile>
      <StyledTitle>
        Please add the following details to complete the creation of your new
        account.
      </StyledTitle>
      <UpdateForm />
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  color: ${secondaryColor};
`;

export default newUserProfile;
