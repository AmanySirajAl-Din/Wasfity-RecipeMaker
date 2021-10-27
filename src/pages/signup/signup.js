import './signup.css';
import food from '../../assets/img/signupfood.png';
import { useState } from 'react';

function Signup() {

    const [signup, setSignup] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const [errors, setErrors] = useState({
        userName: null,
        email: null,
        password: null,
        confirmPass: null
    })

    const submitForm = (e)=>{
        e.preventDefault();
    }

    const nameValidation = (e)=>{
        // console.log(e.target.name, e.target.value);
        if(e.target.name === 'userName'){
            setSignup({
                ...signup,
                userName: e.target.value
            })
        }
        setErrors({
            ...errors,
            userName: e.target.value.length === 0 
                    ? 'field required'
                    : e.target.value.length <= 3
                    ? 'at least 4 characters'
                    : e.target.value.length > 20
                    ? 'maximum 20 characters'
                    : null
        })
    }

    const eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidation = (e)=>{
        if(e.target.name === 'email'){
            setSignup({
                ...signup,
                email: e.target.value
            })
        }
        setErrors({
            ...errors,
            email: e.target.value.length === 0 
                    ? 'field required'
                    : !eRegex.test(e.target.value)
                    ? 'Invalid email'
                    : null
        })
    }

    const pRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const passwordValidation = (e)=>{
        if(e.target.name === 'password'){
            setSignup({
                ...signup,
                password: e.target.value
            })
        }
        setErrors({
            ...errors,
            password: e.target.value.length === 0 
                    ? 'field required'
                    : !pRegex.test(e.target.value)
                    ? 'weak password'
                    : null
        })
    }

    const confirmPassword = (e)=>{
        if(e.target.name === 'confirmPass'){
            setSignup({
                ...signup,
                confirmPass: e.target.value
            })
        }
        setErrors({
            ...errors,
            confirmPass: e.target.value.length === 0 
                    ? 'field required'
                    : !(e.target.value === signup.password)
                    ? 'password does not match'
                    : null
        })
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
                        className="name"
                        id="name"
                        placeholder="Ex: John Doe"
                        name="userName"
                        value={signup.userName}
                        onChange={(e) => nameValidation(e)}
                        />
                        {errors.userName && (<small className="text-danger">{errors.userName}</small>)}
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
                        {errors.email && (<small className="text-danger">{errors.email}</small>)}
                    </label>
                    
                    {/* Password */}
                    <label for="password" className="passwordLabel">Password <br />
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
                    <label for="confirmPassword" className="passwordLabel">Confirm Password <br />
                        <input
                        type="password"
                        className="confirmPassword"
                        id="confirmPassword"
                        name="confirmPass"
                        value={signup.confirmPass}
                        onChange={(e)=> confirmPassword(e)}
                        />
                        <small className="text-danger">{errors.confirmPass}</small>
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
    </>
  );
}

export default Signup;