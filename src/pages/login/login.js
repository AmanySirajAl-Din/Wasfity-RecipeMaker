import './login.css';
import food from '../../assets/img/login-food.png';
import { useState } from 'react';

function Login() {

    const [login, setlogin] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: null,
        password: null
    })

    const submitForm = (e)=>{
        e.preventDefault();
    }

    const eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidation = (e)=>{
        if(e.target.name === 'email'){
            setlogin({
                ...login,
                email: e.target.value
            })
        }
        setErrors({
            ...errors,
            email: e.target.value.length === 0 
                    ? 'field required'
                    : !eRegex.test(e.target.value)
                    ? 'email not exist'
                    : null
        })
    }

    const pRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const passwordValidation = (e)=>{
        if(e.target.name === 'password'){
            setlogin({
                ...login,
                password: e.target.value
            })
        }
        setErrors({
            ...errors,
            password: e.target.value.length === 0 
                    ? 'field required'
                    : !pRegex.test(e.target.value)
                    ? 'wrong password'
                    : null
        })
    }

    let url = '#';

  return (
      <>
        <main className="container">

            <img className="main__img" src={food} alt="..." />

            <section className="loginBox">
                <h2 className="login__title">Login</h2>
                <p className="login__text">Log in with yout data that you entered during yout registration</p>

                {/* Email */}
                <form className="login__form" onSubmit={(e => submitForm(e))}>
                    <label for="email" className="emailLabel">Your email <br />
                        <input
                        type="email"
                        className="email"
                        id="email"
                        placeholder="Example@example.com"
                        name="email"
                        value={login.email}
                        onChange={(e) => emailValidation(e)}
                        />
                        {errors.email && (<small className="error">{errors.email}</small>)}
                    </label>

                    {/* Password */}
                    <label for="password" className="passwordLabel">Password <br />
                        <input
                        type="password"
                        className="password"
                        id="password"
                        placeholder="at least 8 characters"
                        name="password"
                        value={login.password}
                        onChange={(e) => passwordValidation(e)}
                        />
                        {errors.password && <small className="error">{errors.password}</small>}
                    </label>

                    <div className="btns">
                        <div>
                            <input type="checkbox" id="keep" className="keep" />
                            <label for="keep" className="keepLabel">Keep me logged in
                        </label>
                        </div>
                        <a className="forgotPassword" href={url}>forgot Password?</a>
                    </div>
                    <button className="login__btn">Log in</button>
                </form>

                <div className="signup">
                    <a href={url}>Don't have account?</a>
                    <a href={url}>Sign Up</a>
                </div>

                
            </section>
        </main>
    </>
  );
}

export default Login;