import food from "../../../assets/img/login-food.png";
import "./login.css";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../../../redux/authAction"; // import auth

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  // Social Login{
  const GoogleSignin = () => {
    dispatch(googleSignInInitiate());
  };
  const FBSignin = () => {
    dispatch(fbSignInInitiate());
  };
  //}

  const { currentUser } = useSelector((state) => state.user); //get data from redux

  const history = useHistory();
  // I made it to move user to home if he sign in
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    //validate auth
    e.preventDefault();
    if (!login.email || !login.password) {
      return;
    }
    dispatch(loginInitiate(login.email, login.password));
    setlogin({ email: "", password: "" });
  };

  //////////////////////////////// Email Validation //
  const eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidation = (e) => {
    // data for authentication{
    let { name, value } = e.target;
    setlogin({ ...login, [name]: value });
    //}
    if (e.target.name === "email") {
      setlogin({
        ...login,
        email: e.target.value,
      });
    }
    setErrors({
      ...errors,
      email:
        e.target.value.length === 0
          ? "field required"
          : !eRegex.test(e.target.value)
          ? "email not exist"
          : null,
    });
  };

  ////////////////////////// Password Validation //
  const pRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const passwordValidation = (e) => {
    // data for authentication{
    let { name, value } = e.target;
    setlogin({ ...login, [name]: value });
    //}
    if (e.target.name === "password") {
      setlogin({
        ...login,
        password: e.target.value,
      });
    }
    setErrors({
      ...errors,
      password:
        e.target.value.length === 0
          ? "field required"
          : !pRegex.test(e.target.value)
          ? "wrong password"
          : null,
    });
  };

  let url = "#";

  return (
    <>
      <main className="login__container">
        <img className="main__img" src={food} alt="..." />

        <section className="loginBox">
          <h2 className="login__title">Login</h2>
          <p className="login__text">
            Log in with yout data that you entered during your registration
          </p>

          {/* Email */}
          <form className="login__form" onSubmit={(e) => submitForm(e)}>
            {/* Social Login {*/}
            <div className="social-login">
              <button
                className="googleBtn button"
                type="button"
                onClick={(e) => GoogleSignin(e)}
              >
                <span>
                  <i className="fab fa-google-plus-g"></i> Sign in with google+
                </span>
              </button>
              <button
                className="facebookBtn button"
                type="button"
                onClick={(e) => FBSignin(e)}
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </span>
              </button>
            </div>

            <label for="email" className="emailLabel">
              Your email <br />
              <input
                type="email"
                className={errors.email ? "border-red email" : "email"}
                id="email"
                placeholder="Example@example.com"
                name="email"
                value={login.email}
                onChange={(e) => emailValidation(e)}
              />
              {/* {errors.email && (
                <small className='text-danger'>{errors.email}</small>
              )} */}
            </label>

            {/* Password */}
            <label for="password" className="passwordLabel">
              Password <br />
              <input
                type="password"
                className={errors.password ? "border-red password" : "password"}
                id="password"
                placeholder="at least 8 characters"
                name="password"
                value={login.password}
                onChange={(e) => passwordValidation(e)}
              />
              {/* <small className='text-danger'>{errors.password}</small> */}
            </label>

            <div className="btns">
              <div>
                <input type="checkbox" id="keep" className="keep" />
                <label for="keep" className="keepLabel">
                  Keep me logged in
                </label>
              </div>
              <a className="forgotPassword" href={url}>
                forgot Password?
              </a>
            </div>
            <button className="login__btn">Log in</button>
          </form>

          <div className="signup">
            <Link to="/register">Don't have account?</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
