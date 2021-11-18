import "./App.css";
import Home from "./pages/site/home/home";
import Nav from "./components/site/nav/Nav";
import Footer from "./components/site/footer/Footer";
// import Footer  from './components/admin/footer/Footer';
// import Sidbar from './components/admin/sidbar/Sidbar'
// import {useEffect} from 'react'
// import{db} from './firebase'
// import { collection, getDocs,onSnapshot } from'firebase/firestore'
// import Navbar from './components/admin/Navbar/Navbar';
// import Recipes from './pages/admin/recipes/Recipes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeDetails from "./pages/site/recipeDetails/recipeDetails";
// import Loader from './Loader';
// import addRecipe from './pages/admin/recipes/AddRecipe';
// import AddRecipeCat from './pages/admin/category_of_recipes/AddRecipeCat'
// import Category_of_recipes from './pages/admin/category_of_recipes/Category_of_recipes'
// import Category_of_ingredients from './pages/admin/Categories_for_ingredients/Categories_for_ingredients'
// import AddIngredCat from './pages/admin/Categories_for_ingredients/AddIngredCat'
// import Ingredients from './pages/admin/Ingredients/Ingredients'
// import AddIngredients from './pages/admin/Ingredients/AddIngredients'
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./redux/authAction";
import UserRout from "./components/site/UserRout/UserRout";
import Login from "./pages/site/login/login";
import Signup from "./pages/site/signup/signup";
import React, { useEffect } from "react";
import { store } from "./redux/store";

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
        {/* <Router>
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
          
        </Switch>
        </div>
        </div>
        
        </div>
        
      </div>
      
      
      <Footer/>*/}

        <Nav />
        <Switch>
          <UserRout exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/:id" component={RecipeDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
