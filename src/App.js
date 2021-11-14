<<<<<<< HEAD
import './App.css';
// import Header from './components/header/header';
// import Signup from './pages/signup/signup';
import Home from './pages/home/home';
=======
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";
import Signup from "./pages/signup/signup";
import UserRout from "./components/UserRout/UserRout";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/authAction"; //set user or rediracte
>>>>>>> 34bb239624e4c5de09153e71c1b4b797d42fd252

function App() {
  const dispatch = useDispatch();
  // I made to sure if their user set hem not rediracte to login page
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
<<<<<<< HEAD
    <div className="App">
          {/* <Login /> */}
          {/* <Signup /> */}
          <Home />
    </div>
=======
    <Router>
      <div className="App">
        <Switch>
          <UserRout exact path="/" component={Home} />
          //I custom this route in component UserRout in folder component
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
        </Switch>
      </div>
    </Router>
>>>>>>> 34bb239624e4c5de09153e71c1b4b797d42fd252
  );
}

export default App;
