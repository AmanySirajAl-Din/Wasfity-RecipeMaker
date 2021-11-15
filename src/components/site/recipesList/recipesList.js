import './recipesList.css'
import Recipe from '../recipe/recipe'
import { data } from '../../../data/data'

const RecipeList = () => {
  return (
    <section className='recipe-list'>
      {data.map((recipe, index) => {
        return <Recipe {...recipe} key={index} />
      })}
    </section>
  )
}

export default RecipeList
