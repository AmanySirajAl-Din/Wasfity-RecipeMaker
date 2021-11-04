import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "../LoadingToRedirect/LoadingToRedirect";

const UserRout = ({ children, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user); // get data from redux
  //here I make rout depends on children to sure if their user rest him or not rediracte to home
  return currentUser ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRout;
