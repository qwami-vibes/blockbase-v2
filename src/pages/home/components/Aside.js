import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signoutUser } from "../../../api/api";

import logoSmall from "../../../assets/blockbase-small.png";
import ProfilePic from "../../../assets/background-image.png";
import FeatherIcons from "feather-icons-react";

import {
  colorWhite,
  grey,
  lighterGrey,
  lightGrey,
  primaryColor,
  secondaryColor,
} from "../../../helpers/Variables";
import { resetUser } from "../../../redux/actions";

const Aside = () => {
  const theme = useSelector((state) => state.theme);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    //* prevent form from reloading
    e.preventDefault();

    //* sign out user function added and called fron api
    signoutUser()
      .then(() => {
        //* reset current user in state
        dispatch(resetUser());

        //* send user to login page
        navigate("login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledAside className={theme ? "dark" : null}>
      <StyledLogo>
        <img src={logoSmall} alt="Blockbase Logo" />
      </StyledLogo>
      <StyledLinks>
        <StyledLink className={pathname === "/watch" ? "active" : null}>
          <Link className={theme ? "dark" : null} to="/watch">
            <FeatherIcons icon="grid" />
          </Link>
        </StyledLink>
        <StyledLink className={pathname === "/trends" ? "active" : null}>
          <Link className={theme ? "dark" : null} to="trends">
            <FeatherIcons icon="trending-up" />
          </Link>
        </StyledLink>
        <StyledLink className={pathname === "/transactions" ? "active" : null}>
          <Link className={theme ? "dark" : null} to="transactions">
            <FeatherIcons icon="repeat" />
          </Link>
        </StyledLink>
        <StyledLink className={pathname === "/wallet" ? "active" : null}>
          <Link className={theme ? "dark" : null} to="wallet">
            <FeatherIcons icon="credit-card" />
          </Link>
        </StyledLink>
      </StyledLinks>
      <StyledProfile>
        <img
          onClick={() => navigate("/settings")}
          src={ProfilePic}
          alt="Profile Pic"
        />
      </StyledProfile>
      <StyledLinks>
        <StyledLink className={theme ? "dark" : null}>
          <form onSubmit={handleLogout}>
            <button type="submit">
              <FeatherIcons icon="log-out" />
            </button>
          </form>
        </StyledLink>
      </StyledLinks>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  grid-area: 1 / 1 / -1 / 2;
  background: ${lighterGrey};
  display: grid;
  grid-template-rows: 15vh 55vh 20vh 10vh;

  &.dark {
    background: ${grey};
    color: ${colorWhite};
    fill: ${colorWhite};
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(StyledFlex)`
  img {
    width: 5rem;
  }
`;

const StyledLinks = styled(StyledFlex)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  margin: auto;
`;

const StyledLink = styled(StyledFlex)`
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 50%;
  transition: all 0.5s ease-in;

  a {
    width: 24px;
    height: 24px;
  }

  svg {
    color: ${lightGrey};
  }

  form {
    button {
      cursor: pointer;
    }
  }

  &.dark,
  a.dark {
    svg {
      color: ${colorWhite};
      fill: ${colorWhite};
    }
  }

  &.active {
    background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
    transition: all 0.5s ease-in;

    svg {
      color: ${colorWhite};
      fill: ${colorWhite};
    }
  }
`;

const StyledProfile = styled(StyledFlex)`
  img {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    cursor: pointer;
  }
`;

export default Aside;
