import * as types from "./authActionTypes";
import { auth, google, facebook, auth2 } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// they are all action (sign up, sign in, sign out, loader, social media sign in)
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
// I made to sure if their user set hem not rediracte to login page
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

const googleSigninStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSigninSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSigninFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const FBSigninStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const FBSigninSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const FBSigninFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
});

//I import auth from firebase Config to make auth with user data

export const registerInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((user) => dispatch(registerSuccess(user)))
      .catch((err) => dispatch(registerFail(err.message)));
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => dispatch(loginSuccess(user)))
      .catch((err) => dispatch(loginFail(err.message)));
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    signOut(auth)
      .then((user) => dispatch(logoutSuccess()))
      .catch((err) => dispatch(logoutFail(err.message)));
  };
};

// I import auth2 from firebase Config to make user sign in with google and facebook(social login) but with different methods not like method up
export const googleSignInInitiate = () => {
  return (dispatch) => {
    dispatch(googleSigninStart());
    auth2
      .signInWithPopup(google)
      .then((user) => {
        dispatch(googleSigninSuccess(user));
      })
      .catch((err) => dispatch(googleSigninFail(err.message)));
  };
};

export const fbSignInInitiate = () => {
  return (dispatch) => {
    dispatch(FBSigninStart());
    auth2
      .signInWithPopup(facebook.addScope("email"))
      .then((user) => {
        dispatch(FBSigninSuccess(user));
      })
      .catch((err) => dispatch(FBSigninFail(err.message)));
  };
};
