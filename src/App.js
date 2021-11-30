
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { setUser } from './redux/authAction'
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Loader from './Loader'
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Category_of_recipes from './pages/admin/Dashboard/category_of_recipes/Category_of_recipes'
import UserRout from "./components/admin/UserRout/UserRout";

// import Nav from './pages/auth/nav/Nav';



function App() {

  
    const dispatch = useDispatch()
    // I made to sure if their user set hem not rediracte to login page
    useEffect(() => {
      onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          dispatch(setUser(authUser))
        } else {
          dispatch(setUser(null))
        }
      })
    }, [dispatch])
  return (
    <div className='App'>
      <Router>
        
              
                <Switch>
                <UserRout exact path="/Dashboard/*" component={Dashboard} />
                  <Route exact path='/Loader' component={Loader}></Route>
                  <Route exact path="/" component={Login} /> 
                   <Route exact path="/register" component={Signup} /> 

                </Switch>
            
          
      
      
      </Router>
    </div>
  )
}

export default App
