
   
import React from "react";
import "./NavAdmin.css";
import logo from "../../../assets/img/logo.png";
import profil from "../../../assets/img/profile_img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../redux/authAction";
import { Link } from "react-router-dom";



import { NavDropdown } from "react-bootstrap";
// jjjj
export default function Navbar() {
  
    const url = "#";
    const { currentUser } = useSelector((state) => state.user); //get data from redux
    const dispatch = useDispatch();
    // logic to hundle log out
    const hundleAuth = () => {
      if (currentUser) {
        dispatch(logoutInitiate());
      }
    }
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-container container-fluid">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={logo} width="60" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {/* <img src={logo} width="150"height="150"/> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link website-name" href="#">
                  Wasfity
                </a>
              </li>

              
            </ul>
            <form className="d-flex">
            <NavDropdown
                title={
                  <img
                    src={profil}
                    width="50"
                    height="50 "
                    className="rounded-circle profile-img"
                  />
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item eventKey="4.2">
                  My profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                Log out
                </NavDropdown.Item>
              </NavDropdown>
             <div className="p-2 ">
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
              <Link to="../register">
                <button className="register__btn nav__btn"> Register </button>
              </Link>
            </>
          )}
          <button className="language__btn btn"> عربي </button>
        </div>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="black"
                class="bi bi-bell mx-10"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
               </div>
               <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="black"
                class="bi bi-envelope  me-4"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                />
              </svg>
              </div>
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}