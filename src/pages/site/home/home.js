import RecipeList from '../../../components/site/recipesList/recipesList'
import Search from '../../../components/site/search/search'
import Hero from '../../../components/site/hero/hero'
import Nav from '../../../components/site/nav/nav'
import './home.css'
import Footer from '../../../components/site/footer/footer'

const Home = () => {
  return (
    <main>
      <Nav />
      <Search />
      <Hero />
      <RecipeList />
      <Footer />
    </main>
  )
}

export default Home