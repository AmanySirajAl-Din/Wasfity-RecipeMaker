import './App.css'
import Home from './pages/site/home/home'
import Nav from './components/site/nav/nav'
import Footer from './components/site/footer/footer'
import Profile from './pages/site/profile/profile'
// import Footer  from './components/admin/footer/Footer';
// import Sidbar from './components/admin/sidbar/Sidbar'
// import {useEffect} from 'react'
// import{db} from './firebase'
// import { collection, getDocs,onSnapshot } from'firebase/firestore'
// import Navbar from './components/admin/Navbar/Navbar';
// import Recipes from './pages/admin/recipes/Recipes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecipeDetails from './pages/site/recipeDetails/recipeDetails'
// import Loader from './Loader';
// import addRecipe from './pages/admin/recipes/AddRecipe';
// import AddRecipeCat from './pages/admin/category_of_recipes/AddRecipeCat'
// import Category_of_recipes from './pages/admin/category_of_recipes/Category_of_recipes'
// import Category_of_ingredients from './pages/admin/Categories_for_ingredients/Categories_for_ingredients'
// import AddIngredCat from './pages/admin/Categories_for_ingredients/AddIngredCat'
// import Ingredients from './pages/admin/Ingredients/Ingredients'
// import AddIngredients from './pages/admin/Ingredients/AddIngredients'

function App() {
  return (
    <div className='App'>
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
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/:id' component={RecipeDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
