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
import Loader from './Loader';
import addRecipe from './pages/admin/recipes/AddRecipe';
import AddRecipeCat from './pages/admin/category_of_recipes/AddRecipeCat'
import Category_of_recipes from './pages/admin/category_of_recipes/Category_of_recipes'
import Category_of_ingredients from './pages/admin/Categories_for_ingredients/Categories_for_ingredients'
import AddIngredCat from './pages/admin/Categories_for_ingredients/AddIngredCat'
import Ingredients from './pages/admin/Ingredients/Ingredients'
import AddIngredients from './pages/admin/Ingredients/AddIngredients'

function App() {
  

  return (
    <div className="App">
      
    <Router>
      
      <div>
      <div> <Navbar />
      <div className="d-flex">
        <div > <Sidbar /></div>
      
        <div className="m-auto mt-1 app-container">
        <Switch>
          <Route  exact path="/R" 
          component={Recipes}>
          </Route>
          <Route  exact path="/RC" 
          component={Category_of_recipes}>
          </Route>
          <Route  exact path="/Loader"  component={Loader}>
          </Route>
          <Route  exact path="/addRecipe"  component={addRecipe}>
          </Route>
          <Route  exact path="/addRecipeCat"  component={AddRecipeCat}>
          </Route>
          <Route  exact path="/IC"  component={Category_of_ingredients}>
          </Route>
          <Route  exact path="/AddIngredCat"  component={AddIngredCat}>
          </Route>
          <Route  exact path="/Ingredients"  component={Ingredients}>
          </Route>
          <Route  exact path="/AddIngredients"  component={AddIngredients}>
          </Route>
          <Route  exact path="/EditIngredients"  component={AddIngredients}>
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
