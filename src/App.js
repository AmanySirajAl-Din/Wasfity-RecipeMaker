import logo from './logo.svg';
import './App.css';
import Footer  from './components/admin/footer/Footer';
import Sidbar from './components/admin/sidbar/Sidbar'
import {useEffect} from 'react'
import{db} from './firebase'
import { collection, getDocs,onSnapshot } from'firebase/firestore'
import Navbar from './components/admin/Navbar/Navbar';
import Recipes from './pages/admin/recipes/Recipes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  

  return (
    <div className="App">
      
    <Router>
      <div>
      <div className="d-flex">
        <div > <Sidbar /></div>
        <div> <Navbar />
        <div className="ms-4 ">
        <Switch>
          <Route  exact path="/R" 
          component={Recipes}>
          </Route>
          
        </Switch>
        </div>
        </div>
        
        </div>
        
      </div>
      
      
       
      <Footer/>
    </Router>

        
      
    </div>
  );
}

export default App;
