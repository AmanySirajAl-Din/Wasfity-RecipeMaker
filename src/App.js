
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from './Loader'
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Category_of_recipes from './pages/admin/Dashboard/category_of_recipes/Category_of_recipes'
import UserRout from "./components/admin/UserRout/UserRout";

// import Nav from './pages/auth/nav/Nav';



function App() {
  return (
    <div className='App'>
      <Router>
        
              
                <Switch>
                <UserRout exact path="/Dashboard/*" component={Dashboard} />
                  <Route exact path='/Loader' component={Loader}></Route>
                  <Route exact path="/login" component={Login} /> 
                   <Route exact path="/register" component={Signup} /> 

                </Switch>
            
          
      
      
      </Router>
    </div>
  )
}

export default App
