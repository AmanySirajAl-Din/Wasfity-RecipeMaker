import "./nav.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../redux/authAction";

const Nav = () => {
  const url = "#";
  const { currentUser } = useSelector((state) => state.user); //get data from redux
  const dispatch = useDispatch();
  // logic to hundle log out
  const hundleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-side">
          <a href={url}>
            <img src={logo} alt="logo" className="logo" />
          </a>
          <h3 className="nav__heading"> Wasfity </h3>
        </div>
        <div className="right-side">
          {currentUser ? (
            <button className="login__btn nav__btn" onClick={hundleAuth}>
              Log out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="login__btn nav__btn"> Login </button>
              </Link>
              <Link to="/register">
                <button className="register__btn nav__btn"> Register </button>
              </Link>
            </>
          )}
          <button className="language__btn btn"> عربي </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
