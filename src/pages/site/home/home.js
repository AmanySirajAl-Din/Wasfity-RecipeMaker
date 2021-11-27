import Search from '../../../components/site/search/search'
import Hero from '../../../components/site/hero/hero'
import RecipeList from '../../../components/site/recipesList/recipesList'
import { injectIntl } from 'react-intl'
// import { collection, getDocs } from '@firebase/firestore'
// import { db } from '../../../firebase'
import './home.css'

// // --------------- Firebase
// const colRef = collection(db, 'recipes')

// getDocs(colRef)
//   .then((snapshot) => {
//     let recipes = []
//     snapshot.docs.forEach((doc) => {
//       recipes.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(recipes)
//   })
//   .catch((e) => console.log(e.message))

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
