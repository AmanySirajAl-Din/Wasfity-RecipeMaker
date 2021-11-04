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
  );
}

export default App;
