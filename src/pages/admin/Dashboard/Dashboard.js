import Footer from "../../../components/admin/footer/Footer";
import Sidbar from "../../../components/admin/sidbar/Sidbar";
// import Navbar from '../../../components/admin/Navbar/Navbar'
import Recipes from "../../../pages/admin/Dashboard/recipes/Recipes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Outlet
} from "react-router-dom";
// import Loader from '../../../../Loader'
import addRecipe from "../../../pages/admin/Dashboard/recipes/AddRecipe";
import AddRecipeCat from "../../../pages/admin/Dashboard/category_of_recipes/AddRecipeCat";
import Category_of_recipes from "../../../pages/admin/Dashboard/category_of_recipes/Category_of_recipes";
import Category_of_ingredients from "../../../pages/admin/Dashboard/Categories_for_ingredients/Categories_for_ingredients";
import AddIngredCat from "../../../pages/admin/Dashboard/Categories_for_ingredients/AddIngredCat";
import Ingredients from "../../../pages/admin/Dashboard/Ingredients/Ingredients";
import AddIngredients from "../../../pages/admin/Dashboard/Ingredients/AddIngredients";
import NavAdmin from "../../../components/admin/navAdmin/NavAdmin";
import User from './../../../pages/admin/Dashboard/users/User'
import EditIngredCat from '../../../pages/admin/Dashboard/Categories_for_ingredients/EditIngredCat'
import AddIngred from '../../../pages/admin/Dashboard/Ingredients/AddIngred'


function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <NavAdmin />
        
          <div className="d-flex">
            <div>
              <Sidbar/>
            </div>

            <div className="m-auto mt-1 app-container">
              <Switch>
                {/* <Route exact path='path' component={Recipes}></Route> */}
                <Route exact path={`${path}R`} component={Recipes}></Route>
                <Route exact path={`${path}RC`} component={Category_of_recipes}></Route>
                <Route exact path={`${path}addRecipe`} component={addRecipe}></Route>
                <Route exact path={`${path}addRecipeCat`} component={AddRecipeCat}></Route>
                <Route exact path={`${path}IC`} component={Category_of_ingredients}></Route>
                <Route exact path={`${path}AddIngredCat`} component={AddIngredCat}></Route>
                <Route exact path={`${path}Ingredients`} component={Ingredients}></Route>
                <Route exact path={`${path}AddIngred`} component={AddIngred}></Route>
               
                <Route exact path={`${path}Users`} component={User}></Route>
                {/* <Route exact path={`${path}EditIngredients`} component={EditIngredients}></Route> */}
                <Route exact path={`${path}EditIngredCat`} component={EditIngredCat}></Route>
               
              
              
              </Switch>
            </div>
      
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
