import Nav from '../../../components/site/nav/nav'
import Search from '../../../components/site/search/search'
import Hero from '../../../components/site/hero/hero'
import RecipeList from '../../../components/site/recipesList/recipesList'
import Footer from '../../../components/site/footer/footer'
import './home.css'

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
