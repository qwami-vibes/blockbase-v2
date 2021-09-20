import { setAlert } from "../actions";

const ErrorHandlers = (dispatch, code) => {
  switch (code) {
    case "auth/timeout":
      //* shows alert to user indicating failure in account creation
      dispatch(
        setAlert({
          message: "Time out. Please try again",
          type: "danger",
        })
      );
      break;

    case "auth/network-request-failed":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "Please check internet connection and try again!",
          type: "danger",
        })
      );
      break;

    case "auth/user-not-found":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "User not found. Please sign up!",
          type: "danger",
        })
      );
      break;

    case "auth/unverified-email":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "User email not verified!",
          type: "danger",
        })
      );
      break;

    case "auth/invalid-phone-number":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "Invalid phone number!",
          type: "danger",
        })
      );
      break;

    case "auth/invalid-email":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "Invalid email address. Please enter a valid email!",
          type: "danger",
        })
      );
      break;

    case "auth/wrong-password":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "Invalid login credentials. Please check and try again!",
          type: "danger",
        })
      );
      break;

    case "auth/user-disabled":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "User account disabled. Please contact admin!",
          type: "danger",
        })
      );
      break;

    case "auth/email-already-in-use":
      //* shows alert to user indicating failure in due to internet connection
      dispatch(
        setAlert({
          message: "Email address already exist. Please login to continue!",
          type: "danger",
        })
      );
      break;

    default:
      //* shows alert to user indicating failure in account creation
      dispatch(
        setAlert({
          message: "An error occured making this action. Please try again",
          type: "danger",
        })
      );
  }
};

export default ErrorHandlers;
