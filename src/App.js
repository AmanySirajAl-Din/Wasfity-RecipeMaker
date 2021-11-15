import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserRout from './components/UserRout/UserRout'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser } from './redux/authAction' //set user or rediracte
import { auth } from './Firebase/Firebase'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import './App.css'

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
    // <div className="App">
    //       {/* <Login /> */}
    //       {/* <Signup /> */}
    //       <Home />
    // </div>
    <Router>
      <div className='App'>
        <Switch>
          {/* I custom this route in component UserRout in folder component */}
          <UserRout exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Signup} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
