import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, googleProvider } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        console.log(state);
      });
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button className="login-button" onClick={login} type="submit">
        Sign In
      </Button>
    </div>
  );
};

export default Login;
