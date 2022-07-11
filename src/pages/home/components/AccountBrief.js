import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ProfilePic from "../../../assets/background-image.png";

import TransInfo from "./TransInfo";

import {
  colorWhite,
  grey,
  greyDarkest,
  lighterGrey,
  lightestGrey,
  primaryColor,
  secondaryColor,
} from "../../../helpers/Variables";
import FeatherIcons from "feather-icons-react";

const AccountBrief = () => {
  const theme = useSelector((state) => state.theme);
  const auth = useSelector((state) => state.auth);
  const [duration, setDuration] = useState("all");

  return (
    <StyledAccountBrief className={theme ? "dark" : null}>
      <StyledAccountDetails className={theme ? "dark" : null}>
        <StyledAccountProfile>
          <img src={auth.user.photoURL ?? ProfilePic} alt="Profile Pic" />
        </StyledAccountProfile>
        <StyledAccountName className={theme ? "dark" : null}>
          {auth.user.displayName}
        </StyledAccountName>
        <StyledAccountBalance className={theme ? "dark" : null}>
          $0.00
        </StyledAccountBalance>
        <StyledAccountType className={theme ? "dark" : null}>
          investor
        </StyledAccountType>
      </StyledAccountDetails>
      <StyledAccountTrans className={theme ? "dark" : null}>
        <div className="header">
          <div className="header-title">transactions</div>
          <div className="controls">
            <button className="controls-back">
              <FeatherIcons icon="chevron-left" />
            </button>
            <button className="controls-forward">
              <FeatherIcons icon="chevron-right" />
            </button>
          </div>
        </div>
        <StyledDuration className={theme ? "dark" : null}>
          <span
            onClick={() => setDuration("all")}
            className={duration === "all" ? "duration active" : "duration"}
          >
            all
          </span>
          <span
            onClick={() => setDuration("week")}
            className={duration === "week" ? "duration active" : "duration"}
          >
            last week
          </span>
          <span
            onClick={() => setDuration("month")}
            className={duration === "month" ? "duration active" : "duration"}
          >
            last 30 days
          </span>
        </StyledDuration>
        <StyledTransDetails>
          {false
            ? [120, 150, 100].map((info) => (
                <TransInfo key={info} amount={info} />
              ))
            : "No transcations yet"}
        </StyledTransDetails>
      </StyledAccountTrans>
    </StyledAccountBrief>
  );
};

const StyledAccountBrief = styled.div`
  display: grid;
  grid-template-rows: 0.7fr 1fr;
  background: ${lighterGrey};
  grid-area: 1 / 2 / -1 / -1;

  &.dark {
    background: ${grey};
    color: ${colorWhite};
  }
`;

const StyledAccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.8rem;
  text-transform: capitalize;

  &.dark {
    color: ${lightestGrey};
  }
`;

const StyledAccountProfile = styled.div`
  img {
    border-radius: 50%;
    height: 15rem;
    width: 15rem;
    object-fit: cover;
  }
`;

const StyledAccountTrans = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.2fr 0.1fr 1fr;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
      flex: 0 0 70%;
      text-transform: capitalize;
      font-size: 1.8rem;
    }

    .controls {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20%;
        cursor: pointer;
        padding: 0.1rem 0.2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }
    }
  }
  &.dark {
    .controls {
      button {
        background: ${greyDarkest};
        svg {
          color: ${colorWhite};
          fill: ${colorWhite};
        }
      }
    }
  }
`;

const StyledAccountName = styled.div``;

const StyledAccountBalance = styled.div`
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 2px;

  &.dark {
    color: ${colorWhite};
  }
`;

const StyledAccountType = styled.div`
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  border: 1px solid ${grey};
  font-size: 1.6rem;

  &.dark {
    border: 1px solid ${lightestGrey};
  }
`;

const StyledDuration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.3rem;

  .duration {
    text-transform: capitalize;
    padding: 0.2rem 2rem;
    border-radius: 10rem;
    cursor: pointer;
    border: 1px solid ${grey};

    &.active {
      color: ${colorWhite};
      border: 1px solid transparent;
      background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
    }
  }

  &.dark {
    color: ${lightestGrey};

    .duration {
      border: 1px solid ${colorWhite};

      &.active {
        border: 1px solid transparent;
      }
    }
  }
`;

const StyledTransDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
`;

export default AccountBrief;
