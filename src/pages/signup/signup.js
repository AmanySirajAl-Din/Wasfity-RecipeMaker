<<<<<<< HEAD
import './signup.css';
import food from '../../assets/img/signup-food.png';
import { useState } from 'react';
=======
import "./signup.css";
import food from "../../assets/img/signupfood.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerInitiate } from "../../redux/authAction"; // import auth
>>>>>>> 34bb239624e4c5de09153e71c1b4b797d42fd252

function Signup() {
  const [signup, setSignup] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    displayName: null,
    email: null,
    password: null,
    confirmPass: null,
  });

  const { currentUser } = useSelector((state) => state.user); //get data from redux

  const history = useHistory();
  // I made it to move user to home if he sign up
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    //validate auth
    e.preventDefault();
    if (signup.password !== signup.confirmPass) {
      return;
    }
    dispatch(
      registerInitiate(signup.email, signup.password, signup.displayName)
    );
    setSignup({ email: "", displayName: "", password: "" });
  };

  const nameValidation = (e) => {
    // console.log(e.target.name, e.target.value);
    // data for authentication{
    let { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    //}
    if (e.target.name === "userName") {
      setSignup({
        ...signup,
        displayName: e.target.value,
      });
    }
    setErrors({
      ...errors,
      displayName:
        e.target.value.length === 0
          ? "field required"
          : e.target.value.length <= 3
          ? "at least 4 characters"
          : e.target.value.length > 20
          ? "maximum 20 characters"
          : null,
    });
  };

  const eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidation = (e) => {
    // data for authentication{
    let { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    //}
    if (e.target.name === "email") {
      setSignup({
        ...signup,
        email: e.target.value,
      });
    }
<<<<<<< HEAD

    const [showPassword, setShowPassword]= useState(false);

    const showHidePassword = ()=>{
        setShowPassword(!showPassword);
    }

    let url = '#';

  return (
      <>
        <main className="myContainer">

            <img className="main__img" src={food} alt="..." />

            <section className="signupBox">
                <h2 className="signup__title">Sign up</h2>
                <p className="signup__text">Give us some of your information to get free access to fiedly</p>

                <form className="signup__form" onSubmit={(e => submitForm(e))}>
                    {/* Name  */}
                    <label for="name" className="signupLabel">Your name <br />
                        <input 
                        type="text"
                        className='name'
                        // className={errors.userName ? 'border-red' : ''}
                        id="name"
                        placeholder="Ex: John Doe"
                        name="userName"
                        value={signup.userName}
                        onChange={(e) => nameValidation(e)}
                        />
                        {errors.userName && (<small className="error">{errors.userName}</small>)}
                    </label>

                    {/* Email */}
                    <label for="email" className="signupLabel">Your email <br />
                        <input 
                        type="email"
                        className="email"
                        id="email"
                        placeholder="Example@example.com"
                        name="email"
                        value={signup.email}
                        onChange={(e) => emailValidation(e)}
                        />
                        {errors.email && (<small className="error">{errors.email}</small>)}
                    </label>
                    
                    {/* Password */}
                    <label for="password" className="passwordLabel">Password <br />
                        <input
                        type={showPassword ? 'text' : 'password'}
                        className="password"
                        id="password"
                        placeholder="at least 8 characters"
                        name="password"
                        value={signup.password}
                        onChange={(e) => passwordValidation(e)}
                        />

                        {!errors.password && // Not Gone appear when there is error
                        <i 
                            onClick={showHidePassword}
                            className={showPassword ? 'bx bx-show show':'bx bx-hide hide'}
                        ></i>}
                        
                        {errors.password && <small className="error">{errors.password}</small>}
                    </label>

                    {/* confirmPassword */}
                    <label for="confirmPassword" className="passwordLabel">Confirm Password <br />
                        <input
                        type="password"
                        className="confirmPassword"
                        id="confirmPassword"
                        name="confirmPass"
                        value={signup.confirmPass}
                        onChange={(e)=> confirmPassword(e)}
                        />
                        {errors.confirmPass && <small className="text-danger">{errors.confirmPass}</small>}
                    </label>

                    <div className="btns">
                        <input type="checkbox" id="agree" className="agree" />
                        <label for="agree" className="agreelabel">By creating an account you agtee to the terms of use and our pricvacy policy
                        </label>
                    </div>
                    <button className="signup__btn" type="submit">Create account</button>
                </form>

                <div className="login">
                    <a href={url}>have account?</a>
                    <a href={url}>Login</a>
                </div>

                
            </section>
        </main>
=======
    setErrors({
      ...errors,
      email:
        e.target.value.length === 0
          ? "field required"
          : !eRegex.test(e.target.value)
          ? "Invalid email"
          : null,
    });
  };

  const pRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const passwordValidation = (e) => {
    // data for authentication{
    let { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    //}
    if (e.target.name === "password") {
      setSignup({
        ...signup,
        password: e.target.value,
      });
    }
    setErrors({
      ...errors,
      password:
        e.target.value.length === 0
          ? "field required"
          : !pRegex.test(e.target.value)
          ? "weak password"
          : null,
    });
  };

  const confirmPassword = (e) => {
    if (e.target.name === "confirmPass") {
      setSignup({
        ...signup,
        confirmPass: e.target.value,
      });
    }
    setErrors({
      ...errors,
      confirmPass:
        e.target.value.length === 0
          ? "field required"
          : !(e.target.value === signup.password)
          ? "password does not match"
          : null,
    });
  };

  let url = "#";

  return (
    <>
      <main className="myContainer">
        <img className="main__img" src={food} alt="..." />

        <section className="signupBox">
          <h2 className="signup__title">Sign up</h2>
          <p className="signup__text">
            Give us some of your information to get free access to fiedly
          </p>

          <form className="signup__form" onSubmit={(e) => submitForm(e)}>
            {/* Name  */}
            <label for="name" className="signupLabel">
              Your name <br />
              <input
                type="text"
                className="name"
                id="name"
                placeholder="Ex: John Doe"
                name="displayName"
                value={signup.displayName}
                onChange={(e) => nameValidation(e)}
              />
              {errors.userName && (
                <small className="text-danger">{errors.userName}</small>
              )}
            </label>

            {/* Email */}
            <label for="email" className="signupLabel">
              Your email <br />
              <input
                type="email"
                className="email"
                id="email"
                placeholder="Example@example.com"
                name="email"
                value={signup.email}
                onChange={(e) => emailValidation(e)}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </label>

            {/* Password */}
            <label for="password" className="passwordLabel">
              Password <br />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="at least 8 characters"
                name="password"
                value={signup.password}
                onChange={(e) => passwordValidation(e)}
              />
              <small className="text-danger">{errors.password}</small>
            </label>

            {/* confirmPassword */}
            <label for="confirmPassword" className="passwordLabel">
              Confirm Password <br />
              <input
                type="password"
                className="confirmPassword"
                id="confirmPassword"
                name="confirmPass"
                value={signup.confirmPass}
                onChange={(e) => confirmPassword(e)}
              />
              <small className="text-danger">{errors.confirmPass}</small>
            </label>

            <div className="btns">
              <input type="checkbox" id="agree" className="agree" />
              <label for="agree" className="agreelabel">
                By creating an account you agtee to the terms of use and our
                pricvacy policy
              </label>
            </div>
            <button className="signup__btn" type="submit">
              Create account
            </button>
          </form>

          <div className="login">
            <a href={url}>have account?</a>
            <Link to="/login">Login</Link>
          </div>
        </section>
      </main>
>>>>>>> 34bb239624e4c5de09153e71c1b4b797d42fd252
    </>
  );
}

export default Signup;
