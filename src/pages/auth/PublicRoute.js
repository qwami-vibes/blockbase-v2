import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ isLoggedIn, children }) =>
  isLoggedIn ? children : <Navigate to="login" />;

const mapPropsToState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapPropsToState)(PublicRoute);
