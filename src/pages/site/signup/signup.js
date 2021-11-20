import { registerInitiate } from "../../../redux/authAction"; // import auth
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import food from "../../../assets/img/signup-food.png";
import "./signup.css";

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
  const EmailValidation = (e) => {
    // data for authentication{
    let { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    //}
    if (e.target.name === "email") {
      setSignup({
        ...signup,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        email:
          e.target.value.length === 0
            ? "field required"
            : !eRegex.test(e.target.value)
            ? "weak email"
            : null,
      });
    }
  };

  const pRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const PasswordValidation = (e) => {
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

  const ConfirmPassword = (e) => {
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

  const [showPassword, setShowPassword] = useState(false);

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className="signup__container">
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
                className={errors.displayName ? "border-red name" : "name"}
                id="name"
                placeholder="Ex: John Doe"
                name="userName"
                value={signup.displayName}
                onChange={(e) => nameValidation(e)}
              />
              {/* {errors.displayName && (
                <small className='error'>{errors.displayName}</small>
              )} */}
            </label>

            {/* Email */}
            <label for="email" className="signupLabel">
              Your email <br />
              <input
                type="email"
                className={errors.email ? "border-red email" : "email"}
                id="email"
                placeholder="Example@example.com"
                name="email"
                value={signup.email}
                onChange={(e) => EmailValidation(e)}
              />
              {/* {errors.email && <small className='error'>{errors.email}</small>} */}
            </label>

            {/* Password */}
            <label for="password" className="passwordLabel">
              Password <br />
              <input
                type={showPassword ? "text" : "password"}
                className={errors.password ? "border-red password" : "password"}
                id="password"
                placeholder="at least 8 characters"
                name="password"
                value={signup.password}
                onChange={(e) => PasswordValidation(e)}
              />
              <i
                onClick={showHidePassword}
                className={showPassword ? "bx bx-show show" : "bx bx-hide hide"}
              ></i>
              {/* {errors.password && (
                <small className='error'>{errors.password}</small>
              )} */}
            </label>

            {/* confirmPassword */}
            <label for="confirmPassword" className="passwordLabel">
              Confirm Password <br />
              <input
                type="password"
                className={
                  errors.confirmPass
                    ? "border-red confirmPassword"
                    : "confirmPassword"
                }
                id="confirmPassword"
                name="confirmPass"
                value={signup.confirmPass}
                onChange={(e) => ConfirmPassword(e)}
              />
              {/* {errors.confirmPass && (
                <small className='text-danger'>{errors.confirmPass}</small>
              )} */}
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
            <Link to="login">have account?</Link>
            <Link to="login">Login</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;
