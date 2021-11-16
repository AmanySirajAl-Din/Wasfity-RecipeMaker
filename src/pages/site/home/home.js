import Search from "../../../components/site/search/search";
import Hero from "../../../components/site/hero/hero";
import RecipeList from "../../../components/site/recipesList/recipesList";
import "./home.css";

const Home = () => {
  return (
    <main>
      <Search />
      <Hero />
      <RecipeList />
    </main>
  );
};

export default Home;
