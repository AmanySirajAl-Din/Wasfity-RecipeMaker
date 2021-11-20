import Search from '../../../components/site/search/search'
import Hero from '../../../components/site/hero/hero'
import RecipeList from '../../../components/site/recipesList/recipesList'
import { injectIntl } from 'react-intl'
import './home.css'

const Home = ({ intl: { messages } }) => {
  return (
    <main>
      <Search props={messages.search} />
      <Hero props={messages.hero} />
      <RecipeList props={messages} />
    </main>
  )
}

export default injectIntl(Home)
